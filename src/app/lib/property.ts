const mongoose = require("mongoose");
const { Schema } = mongoose;

const PropertySchema = new Schema({
  image: {
    type: String,
    default:
      "https://cdn.vectorstock.com/i/preview-1x/32/45/no-image-symbol-missing-available-icon-gallery-vector-45703245.jpg",
  },
  rent: {
    type: Number,
    required: true,
  },
  verified: {
    type: Boolean,
    default: false,
    required: true,
  },
  space: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  carpet: {
    type: Number,
    required: true,
  },
  furnishing: {
    type: Number,
    required: true,
    enums: [0, 1, 2], //0->unfurnished,1->semi-furnished,2->furnished
  },
});

const Property =
  mongoose.models.Property || mongoose.model("Property", PropertySchema);
export default Property;
