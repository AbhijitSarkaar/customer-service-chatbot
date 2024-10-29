const { QdrantClient } = require("@qdrant/js-client-rest");

const client = new QdrantClient({
  host: "localhost",
  port: 6333,
});

async function search(vector) {
  let searchResult = await client.query("ecommerce_faq_data_collection", {
    query: vector,
    limit: 10,
    with_payload: true,
    // with_vector: true,
  });

  return searchResult.points.map((item) => item.payload.answer);
}

module.exports = search;
