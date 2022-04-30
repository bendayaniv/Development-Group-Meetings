const dal = require("../dal/dal");

async function getAllMeetings() {
    const sql = `select meetingID, groupID, startMeeting, endMeeting,
                 description, room
                 from groupsmeetings`;
    const meetings = await dal.execute(sql);
    return meetings;
}

async function getMeetingsOfSpecificGroup(id) {
    const sql = `select meetingID, developmentgroup.groupName,
                 startMeeting, endMeeting, description, room
                 from groupsmeetings join developmentgroup on groupsmeetings.groupID = developmentgroup.groupID
                 where developmentgroup.groupID = ` +id;
    const meetings = await dal.execute(sql);
    return meetings;
}

async function addMeeting(groupmeeting) {
    const sql = `insert into groupsmeetings(meetingID, groupID, 
                 startMeeting, endMeeting, description, room)
                 values('${groupmeeting.meetingID}', 
                 '${groupmeeting.groupID}',
                 '${groupmeeting.startMeeting}', 
                 '${groupmeeting.endMeeting}', 
                 '${groupmeeting.description}', 
                 '${groupmeeting.room}')`;
    const info = await dal.execute(sql);
    groupmeeting.groupID = info.insertId;
    return groupmeeting;
}

module.exports = {
    getAllMeetings,
    getMeetingsOfSpecificGroup,
    addMeeting
}