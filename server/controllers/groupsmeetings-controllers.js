const express = require("express");
const groupsMeetingsLogic = require("../bll/groupsmeetings-logic");

const router = express.Router();

router.get("/", async (request, response) => {
    try{
        const meetings = await groupsMeetingsLogic.getAllMeetings();
        response.json(meetings);
    }
    catch(err) {
        response.status(500).json(err.message);
    }
});

router.get("/:id", async (request, response) => {
    try{
        const id = +request.params.id;
        const meetings = await groupsMeetingsLogic.getMeetingsOfSpecificGroup(id);
        response.json(meetings);
    }
    catch(err) {
        response.status(500).json(err.message);
    }
});

router.post("/", async (request, response) => {
    try{
        const meeting = request.body;
        const addedMeeting = await groupsMeetingsLogic.addMeeting(meeting);
        response.status(201).json(addedMeeting);
    }
    catch(err) {
        response.status(500).json(err.message);
    }
});

module.exports = router;