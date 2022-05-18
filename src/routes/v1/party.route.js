const express = require("express");

const PartyController = require("../../controllers/party.controller.js");

//route - /api/v1/user
const router = express.Router();

router.get("/health", (req, res) => res.status(200).send("UP"));

router.get("/", PartyController.findAll);
router.get("/:id", PartyController.findOne);
router.post("/", PartyController.createParty);
router.patch("/:id", PartyController.update);
router.delete("/:id", PartyController.partyDelete);

module.exports = router;