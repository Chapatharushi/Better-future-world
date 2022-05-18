const express = require("express");

const userRoutes = require("./v1/user.route");
const partyRoutes = require("./v1/party.route");

// base route - /api
const router = express.Router();

// Health check route
router.get("/v1/health", (req, res) => res.status(200).send("UP"));

// v1 routes
router.use("/v1/user", userRoutes);
router.use("/v1/party", partyRoutes);

module.exports = router;
