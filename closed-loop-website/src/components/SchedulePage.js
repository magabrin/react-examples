import React from 'react';
import FooterNavbar from './FooterNavbar';
import Schedule from './Schedule';
import Closedloop2019 from '../data/schedules.json';
import {MAIN, UPSTAIRS, DOWNSTAIRS} from '../data/rooms.json';

class SchedulePage extends React.Component {
    constructor() {
        super()
        // this.state = {
        //     currentRoom: this.props.currentRoom
        // }
    }

    // handlePageChange = (name) => {    
    //     // const name = event.target.name;
    //     if (this.state.currentRoom !== name) {
    //       console.log("changing room page to " + name);
    //       this.setState({
    //         currentRoom: name
    //       });
    //     }    
    //   }

    render() {
        let scheduleList = [];
        let roomCheck = this.props.currentRoom ? this.props.currentRoom : MAIN
        Closedloop2019['closedLoop2019']
        .filter(el => el.room === roomCheck)
        .map(element => {
            scheduleList.push(<Schedule addToMyTalks={this.props.addToMyTalks} key={element.name} abstract={element.abstract} time={element.time} name={element.name} room={element.room} talkType={element.talkType}></Schedule>)
        });

        return (
            <div>
                {scheduleList}          
                <footer className="App-footer">
                    <FooterNavbar handlePageChange={this.props.handleRoomChange}></FooterNavbar>
                </footer>
            </div>            
        )
    }
}

export default SchedulePage;