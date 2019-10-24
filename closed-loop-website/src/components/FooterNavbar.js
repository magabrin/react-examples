import React from 'react';
import {MAIN, UPSTAIRS, DOWNSTAIRS} from '../data/rooms.json';

class FooterNavbar extends React.Component {
    constructor() {
        super()
        this.state = {
            activePill: MAIN
        }
    }

    setActive = (name) => {
        if (this.state.activePill !== name) {
            this.setState({
                activePill: name
            })
            console.log("setting active room pill to " + name);
        }
        
    }


    render() {

        return (
        <ul className="FooterCSS nav-pills nav navbar-fixed-bottom">  {/* nav-justified */ }
            <li role="presentation" className={this.state.activePill === UPSTAIRS ? 'active FooterCSS': 'FooterCSS'}>
                <a name={UPSTAIRS} className='header' href="#" onClick={(event) => { this.props.handlePageChange(UPSTAIRS); this.setActive(UPSTAIRS)} }  >
                    <div>Upstairs Room</div>
                    {/* <i className="ai-user"></i> */}
                </a>                
            </li>
            <li role="presentation" className={this.state.activePill === MAIN ? 'active FooterCSS': 'FooterCSS'}>
                <a name={MAIN} className='header' href="#" onClick={(event) => { this.props.handlePageChange(MAIN); this.setActive(MAIN)} }>
                    <div>Main Auditorium</div>
                    {/* <i className="ai-calendar"></i> */}
                </a>                
            </li>            
            <li role="presentation" className={this.state.activePill === DOWNSTAIRS ? 'active FooterCSS': 'FooterCSS'}>
                <a name={DOWNSTAIRS} className='header' href="#" onClick={(event) => { this.props.handlePageChange(DOWNSTAIRS); this.setActive(DOWNSTAIRS)} }>
                    <div>Downstairs Room</div>
                    {/* <i className="ai-star"></i> */}
                </a>                
            </li>
        </ul>
        )
    }
}

export default FooterNavbar;