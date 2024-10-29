const fs = require("fs");
const OpenAI = require("openai");
const dotenv = require("dotenv");
dotenv.config();

const EMBEDDING_MODEL = "text-embedding-ada-002";
const ENCODING_FORMAT = "float";

const openai = new OpenAI({
  apiKey: process.env.CHAT_APP_API_KEY,
});

async function main(text) {
  const embedding = await openai.embeddings.create({
    model: EMBEDDING_MODEL,
    input: text,
    encoding_format: ENCODING_FORMAT,
  });
  let data = {
    vector: embedding.data[0].embedding,
    payload: text,
  };
  return data;
}

module.exports = main;
