class GroupMeeting {
    constructor(meetingID, groupID, groupName, startMeeting, endMeeting, room, description) {
        this.meetingID = meetingID;
        this.groupID = groupID;
        this.groupName = groupName;
        this.startMeeting = startMeeting;
        this.endMeeting = endMeeting;
        this.description = description;
        this.room = room
    }
};

module.exports = GroupMeeting;