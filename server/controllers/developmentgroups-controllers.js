const express = require("express");
const developmentGroupsLogic = require("../bll/developmantgroups-logic");

const router = express.Router();

router.get("/", async (request, response) => {
    try{
        const developmentGroups = await developmentGroupsLogic.getAllGroups();
        response.json(developmentGroups);
    }
    catch(err) {
        response.status(500).json(err.message);
    }
});

router.get("/:id", async (request, response) => {
    try{
        const id = +request.params.id;
        const group = await developmentGroupsLogic.getOneGroup(id);
        response.json(group);
    }
    catch(err) {
        response.status(500).json(err.message);
    }
});

module.exports = router;