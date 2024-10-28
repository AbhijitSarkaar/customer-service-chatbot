const OpenAI = require("openai");
const dotenv = require("dotenv");
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.CHAT_APP_API_KEY,
});

async function openai_chat_completion(question) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      {
        role: "user",
        content: question,
      },
    ],
  });

  return completion.choices[0].message;
}

module.exports = openai_chat_completion;
