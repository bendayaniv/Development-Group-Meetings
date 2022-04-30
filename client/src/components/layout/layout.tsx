import React, { Component } from "react";
import "./layout.css";
import { Group } from "../../models/group";
import { Meeting } from "../../models/meeting";

interface LayoutState {
    groups: Group[],
    meetings: Meeting[],
    meeting: Meeting
}

export class Layout extends Component<any, LayoutState> {

    public constructor(props:any) {
        super(props);
        this.state = {
            groups: [],
            meetings: [],
            meeting: new Meeting()
        };
    }

    public getAllMeetings = (e:any): void => {
        const id = +e.target.value;
        fetch("http://localhost:3001/api/meetings/" + id)
            .then(response => response.json())
            .then(meetings => {
                this.setState({meetings})
            })
            .catch(err => alert(err));

        const meeting = {...this.state.meeting};
        meeting.groupID = id; 
        this.setState({meeting});
    }

    public componentDidMount(): void {
        fetch("http://localhost:3001/api/groups")
            .then(response => response.json())
            .then(groups => this.setState({groups}))
            .catch(err => alert(err));
    }
    

    public setStartMeeting = (e:any): void => {
        const startMeeting = e.target.value;
        const meeting = {...this.state.meeting};
        meeting.startMeeting = startMeeting;
        this.setState({meeting});
    }
    
    public setEndMeeting = (e:any): void => {
        const endMeeting = e.target.value;
        const meeting = {...this.state.meeting};
        meeting.endMeeting = endMeeting;
        this.setState({meeting});
    }

    public setDescription = (e:any): void => {
        const description = e.target.value;
        const meeting = {...this.state.meeting};
        meeting.description = description;
        this.setState({meeting});
    }

    public setRoom = (e:any): void => {
        const room = e.target.value;
        const meeting = {...this.state.meeting};
        meeting.room = room;
        this.setState({meeting});
    }

    public addMeeting = (): void => {
        fetch("http://localhost:3001/api/meetings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(this.state.meeting)
        })
            .then(response => response.json())
            .then(meeting => {
                alert("New meeting has been added" );
            })
            .catch(err => alert(err));
    }
 
    public render(): JSX.Element {
        return (
            <div className="layout">
                <h1>Group Meetings of the Company</h1>

                <label>Select Group: </label>
                <select onChange={this.getAllMeetings} defaultValue={'default'}>
                    <option disabled value="default">Select Group...</option>
                    {this.state.groups.map(g =>
                        <option key={g.groupID} value={g.groupID}>{g.groupName}
                        </option>)}
                </select>
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <td><label>Start Date and Time</label></td>
                                <td><input type="datetime-local" onChange={this.setStartMeeting}
                                    value={this.state.meeting.startMeeting}/></td>
                            </tr>
                            <tr>
                                <td><label>End Date and Time</label></td>
                                <td><input type="datetime-local" onChange={this.setEndMeeting}
                                    value={this.state.meeting.endMeeting}/></td>
                            </tr>
                            <tr>
                                <td><label>Description</label></td>
                                <td><textarea placeholder="Description..." onChange={this.setDescription}
                                    value={this.state.meeting.description}></textarea></td>
                            </tr>
                            <tr>
                                <td><label>Room</label></td>
                                <td><textarea placeholder="Room..." onChange={this.setRoom}
                                    value={this.state.meeting.room}></textarea></td>                      
                            </tr>
                            <tr>
                                <td></td>
                                <td><button type="button" onClick={this.addMeeting}>Add Meeting</button></td>
                            </tr>
                        </tbody>
                    </table>
                </form>

                {this.state.meetings.map(m =>
                    <div key={m.meetingID} className="meetingsCards">
                        <p>From: {m.startMeeting}</p>
                        <p>To: {m.endMeeting}</p>
                        <p>Description: {m.description}</p>
                        <p>Room: {m.room}</p>
                    </div>
                )}


                
            </div>
        );
    }
}