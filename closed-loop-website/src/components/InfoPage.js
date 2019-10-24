import React from 'react';

class InfoPage extends React.Component {

    render() {
        let list = ["Andrew Kiley: Camera - Upstairs",
            "Tryphena Cockroft: Host - Upstairs",
            "Thomas Schaaf: Host - Main (Morning)",
            "John McNulty: Host - Main (Afternoon)",
            "Nathaniel Buck: Camera - Main (Morning)",
            "Matt Gabrin: Camera - Main (Afternoon)",
            "Sirus Sukanich: Host - Downstairs",
            "Neal Altman: Camera - Downstairs",
            "Shaun Davis: Set Up",
            "Taylor Ferguson: Greeter",
            "Kristen Carpio: Greeter",
            "Theora Kvitka: Breakfast",
            "Lisa Bush: Breakfast",
            "Jennifer Lines: Lunch",
            "Erin McPeak: Lunch",
            "Kaylee Noll: Afterparty/Food",
            "Ciera Watson: Afterparty/Food",
            "Anastasia Tircuit: Games",
            "Jennifer Lines: Games + Email Communicaiton",
            "Elisa Vettier: Clean Up",
            "Melody Hauber: Clean Up",
            "Juddson Poeske: General",
            "Tope Abegunde: General",
            "Matt Clark: AV - Sound",
            "Kevin Kibler: AV - Lights",
            "Long Hong: AV - Equipment",
            "Shawn Mars: AV - General",
            "Brian Krimbel: AV - Sound Setup",
            "Anna Abovyan: Speaker Coordination",
            "Derek Atkinson: Design",
            "Kyle Libby: Design",
            "Matt Gabrin: Website",
            "Mike Gabrin: Website",
            "Brett Bender: Website",
            "Shahid Durrani: Photos",
            "Philip Truchee: Photos",
            "Michael Finke: 3M | M*Modal Leadership",
            "Detlef Koll: 3M | M*Modal Leadership"]

        let htmlList = [];
        list.forEach(el => {
            htmlList.push(<li key={el}>{el}</li>);
        })
        return (
            <div className="InfoCSS">
                <h3 className="header">ClosedLoop Mission</h3>
                <p>ClosedLoop is an annual day-long internal M*Modal conference created by and for M*Modal employees. The mission of the conference is to spread knowledge, foster discussions and spark ideas. ClosedLoop takes place in Pittsburgh, at a venue nearby the office. We invite everyone in Pittsburgh office to participate: either through helping out with the planning committee, submitting talks or volunteering. Employees from other offices are welcome to attend, assuming they get travel budget approval from their managers. We welcome a variety of topics and formats: feel free to explore topics outside of your immediate job responsibilities.<b> Please participate - This is YOUR conference!</b> </p>
                <h3 className="header">Planning Committee</h3>
                <h4 className="subheader">Co-chairs</h4>
                <ul className="list-unstyled">
                    <li>Juddson Poeske</li>
                    <li>Tope Abegunde</li>
                </ul>
                <h4 className="subheader">Volunteers</h4>
                <ul className="list-unstyled">
                    {htmlList}
                </ul>
                <h3 className="header">Map</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1996.5517925809474!2d-79.92441290253015!3d40.43736417980975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x8834f1ff6215f9dd%3A0x9409495555492609!2sM*2AModal%2C%20Murray%20Avenue%2C%20Pittsburgh%2C%20PA!3m2!1d40.4379516!2d-79.9232846!4m5!1s0x8834f1ff414a2d5f%3A0x19aabd5925dfdfaf!2s5738%20Darlington%20Rd%2C%20Pittsburgh%2C%20PA%2015217!3m2!1d40.4366282!2d-79.9237301!5e0!3m2!1sen!2sus!4v1569348265945!5m2!1sen!2sus" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen=""></iframe>
            </div>
        )
    }
}

export default InfoPage;