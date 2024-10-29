const fs = require("fs");
const OpenAI = require("openai");
const dotenv = require("dotenv");
dotenv.config();
const ecommerce_faq_data = require("../data/Ecommerce_FAQ_Chatbot_dataset.json");

const EMBEDDING_MODEL = "text-embedding-ada-002";
const ENCODING_FORMAT = "float";

const openai = new OpenAI({
  apiKey: process.env.CHAT_APP_API_KEY,
});

async function main(item_data) {
  const embedding = await openai.embeddings.create({
    model: EMBEDDING_MODEL,
    input: item_data.question,
    encoding_format: ENCODING_FORMAT,
  });
  let data = {
    vector: embedding.data[0].embedding,
    payload: item_data,
  };
  return data;
}

let results = [];

ecommerce_faq_data.questions.forEach((item) => {
  main(item).then((res) => {
    results.push(Promise.resolve(res));

    if (results.length === ecommerce_faq_data.questions.length) {
      Promise.all(results)
        .then((data) => {
          fs.writeFile(
            __dirname + `/../embeddings/ecommerce_faq_embeddings.json`,
            JSON.stringify(data),
            (err) => {
              if (err) {
                console.log(err);
              } else {
                console.log("file written");
              }
            }
          );
        })
        .catch((err) => {
          console.log("promise err", err);
        });
    }
  });
});
