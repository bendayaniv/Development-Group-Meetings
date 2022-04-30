export class Meeting {
    public constructor(
        public meetingID: number = 0,
        public groupID: number = 1,
        public startMeeting: string = "",
        public endMeeting: string = "",
        public description: string = "",
        public room: string = ""
    ) {}
}