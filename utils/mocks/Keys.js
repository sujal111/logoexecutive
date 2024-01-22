const Keys = require("../../models/Keys");
const { Timestamp } = require("firebase-admin/firestore");

const keysObj = {
  userId: crypto.randomUUID(),
  keyId: crypto.randomUUID(),
  key: crypto.randomUUID(),
  keyDescription: "this is key description",
  usageCount: 9999,
  createdAt: Timestamp.now().toDate().toString(),
  updatedAt: Timestamp.now().toDate().toString(),
};

const mockKeyModel = new Keys(keysObj);

module.exports = {
  mockKeyModel,
};