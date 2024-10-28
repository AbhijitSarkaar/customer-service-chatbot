const openai_chat_completion = require("../utils/openai");

const getResponse = async (req, res) => {
  const { content } = req.body;
  try {
    openai_chat_completion(content).then((result) => {
      let data = result?.content?.split("\n").filter((item) => item.length);

      res.status(200).json({
        role: result.role,
        content: data,
      });
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  getResponse,
};
