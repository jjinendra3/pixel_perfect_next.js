import express from "express";
import cors from "cors";
const app = express();
const ConnecttoMongoDBs = require("./db");
const Property = require("./model");
ConnecttoMongoDBs();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", async (req, res) => {
  try {
    return res.send({ success: 1 });
  } catch (error: any) {
    return res.send({ success: 0, error: error });
  }
});

app.post("/submit", async (req, res) => {
  try {
    for (let i = 0; i < req.body.length; i++) {
      const { image, rent, verified, space, location, carpet, furnishing } =
        req.body[i];
      const property = await Property.create({
        image,
        rent,
        verified,
        space,
        location,
        carpet,
        furnishing,
      });
    }
    return res.send({ success: 1 });
  } catch (error) {
    return res.send({ success: 0, error: error });
  }
});

app.get("/getall", async (req, res) => {
  try {
    const properties = await Property.find();
    return res.send({ success: 1, properties });
  } catch (error) {
    return res.send({ success: 0, error: error, msg: "done" });
  }
});
interface FilterRequest {
  verified: boolean;
  images: number;
}

interface Property {
  name: string;
  verified: boolean;
  images: string[];
}

interface FilterResponse {
  success: number;
  properties?: Property[];
  error?: string;
}
app.post("/filter", async (req, res) => {
  try {
    const { verified, images } = req.body;
    let query: any = {};

    if (verified === true) {
      query.verified = true;
    } else {
      query.verified = false;
    }

    if (images === 1) {
      query.images = { $ne: "cdn.vectorstock" };
    } else {
      query.images = "cdn.vectorstock";
    }

    const properties = await Property.find(query);

    return res.send({ success: 1, properties });
  } catch (error: any) {
    return res.send({ success: 0, error: error.message });
  }
});

app.listen(5000, () => {
  return console.log(`Express is listening at http://localhost:5000`);
});
