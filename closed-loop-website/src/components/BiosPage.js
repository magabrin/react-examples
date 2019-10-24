import React from 'react';
import Bio from './Bio';
import Closedloop2019 from './../data/bios.json';

class BiosPage extends React.Component {

    render() {
        console.log(Closedloop2019);
        let bioList = []
        Closedloop2019['closedLoop2019'].forEach(element => {
            bioList.push(<Bio key={element.name} photoUrl={element.photoUrl} name={element.name} bio={element.bio}></Bio>)
        });
        return (
            <div>
                {bioList}
            </div>
        )
    }
}

export default BiosPage;