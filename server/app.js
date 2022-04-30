const express = require("express");
const cors = require("cors");
const developmentGroupsControllers = require("./controllers/developmentgroups-controllers");
const groupsMeetingsControllers = require("./controllers/groupsmeetings-controllers");

const server = express();

server.use(express.json());
server.use(cors());
server.use("/api/groups", developmentGroupsControllers);
server.use("/api/meetings", groupsMeetingsControllers);

server.listen(3001, () => console.log("Listening..."));