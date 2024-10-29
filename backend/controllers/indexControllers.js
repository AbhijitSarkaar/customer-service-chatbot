const get_question_embedding = require("../utils/get-question-embedding");
const search_embeddings = require("../utils/search-embeddings");
const openai_chat_completion = require("../utils/openai");

const getResponse = async (req, res) => {
  const { content } = req.body;
  try {
    get_question_embedding(content).then((result) => {
      search_embeddings(result.vector).then((matched_results) => {
        openai_chat_completion(content, matched_results).then(
          (chat_response) => {
            res.status(200).json(chat_response);
          }
        );
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Server Error",
      error: err,
    });
  }
};

const uploadFile = async (req, res) => {
  res.send("uploaded file");
};

module.exports = {
  getResponse,
  uploadFile,
};
