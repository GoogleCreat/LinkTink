const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://<pw>:<cn>@cluster0.qip3pak.mongodb.net/";

const client = new MongoClient(uri);

async function run() {
  try {
    console.log("⏳ Đang kết nối...");
    await client.connect();

    console.log("✅ Đã kết nối MongoDB");

    const db = client.db("sample_mflix");
    const collection = db.collection("users");

    console.log("⏳ Đang lấy dữ liệu...");
    const data = await collection.find({}).limit(5).toArray();

    console.log("📊 Số lượng:", data.length);
    console.log("📄 Data:", data);

  } catch (err) {
    console.error("❌ Lỗi:", err.message);
  } finally {
    await client.close();
  }
}

run();
