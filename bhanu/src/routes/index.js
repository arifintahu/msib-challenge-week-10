const { Router } = require("express");
const userRoutes = require("./user.route");
const movieRoutes = require("./movie.route");

const router = Router();

router.use("/users", userRoutes);
router.use("/movies", movieRoutes);

module.exports = router;
