const { QdrantClient } = require("@qdrant/js-client-rest");
const embeddings = require("../embeddings/ecommerce_faq_embeddings.json");

const client = new QdrantClient({
  host: "localhost",
  port: 6333,
});

// const faq_points = embeddings.map((item, idx) => {
//   return {
//     id: idx + 1,
//     vector: item.vector,
//     payload: item.payload,
//   };
// });

// async function main() {
//   await client.createCollection("ecommerce_faq_data_collection", {
//     vectors: { size: 1536, distance: "Cosine" },
//   });
//   const operationInfo = await client.upsert("ecommerce_faq_data_collection", {
//     wait: true,
//     points: faq_points,
//   });

//   console.debug(operationInfo);
// }

// main();

client
  .collectionExists("ecommerce_faq_data_collection")
  .then((res) => console.log(res));
