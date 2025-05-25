const utility = require("../utilities/index.js");
const baseController = {}

baseController.buildHome = async (req, res) => {
    const nav = await utility.getNav();
    res.render("index", {title: "Home", nav});
}

module.exports = baseController;
// This controller is responsible for rendering the home page