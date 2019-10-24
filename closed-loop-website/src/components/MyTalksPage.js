import React from 'react';
import Schedule from './Schedule';

import Closedloop2019 from '../data/schedules.json';

class MyTalksPage extends React.Component {

    render() {
        let scheduleList = [];
        Closedloop2019['closedLoop2019']
        .filter(el => localStorage.getItem(el.name) !== null)
        .map(element => {
            scheduleList.push(<Schedule addToMyTalks={this.props.addToMyTalks} key={element.name} abstract={element.abstract} time={element.time} name={element.name} room={element.room} talkType={element.talkType}></Schedule>)
        });

        if (scheduleList.length === 0) {
            scheduleList.push(<div className="header"><hr></hr>Select the Star on Your Favorite Talks From the Schedule, and They Will Appear Here!</div>);
        }

        return (
            <div>
                {scheduleList}                          
            </div>            
        )
    }
}

export default MyTalksPage;