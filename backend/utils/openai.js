const OpenAI = require("openai");
const dotenv = require("dotenv");
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.CHAT_APP_API_KEY,
});

const context = (question, vectors) => {
  return `
  Please use the following Article to answer question. If answer is not found from the article please write I do not know.

  Article: ${vectors.join(". ")}

  Question: ${question}
`;
};

async function openai_chat_completion(question, vectors) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      {
        role: "user",
        content: context(question, vectors),
      },
    ],
  });

  return completion.choices[0].message;
}

module.exports = openai_chat_completion;
