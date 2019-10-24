import React from 'react'
import '../../node_modules/aura-icons/dist/css/auraicons.min.css';
import {BIOSPAGE, SCHEDULEPAGE, MYTALKSPAGE, INFOPAGE} from '../data/pageNames.json';

class HeaderNavbar extends React.Component {

    constructor() {
        super()
        this.state = {
            activePill: SCHEDULEPAGE
        }
    }

    setActive = (name) => {
        // const name = event.target.name;
        if (this.state.activePill !== name) {
            this.setState({
                activePill: name
            })
            console.log("setting active pill to " + name);
        }
        
    }

    render() {
        return (
            <ul className="nav nav-pills">
                <li role="presentation" className={this.state.activePill === SCHEDULEPAGE ? 'active': null}>
                    <a name={SCHEDULEPAGE} className='header' href="#" onClick={(event) => { this.props.handlePageChange(SCHEDULEPAGE); this.setActive(SCHEDULEPAGE)} }>
                        <div>Schedule</div>
                        <i className="ai-calendar"></i>
                    </a>
                    
                </li>
                <li role="presentation" className={this.state.activePill === BIOSPAGE ? 'active': null}>
                    <a name={BIOSPAGE} className='header' href="#" onClick={(event) => { this.props.handlePageChange(BIOSPAGE); this.setActive(BIOSPAGE)} }  >
                        <div>Bios</div>
                        <i className="ai-user"></i>
                    </a>
                    
                </li>
                {/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) 
                    ? <li role="presentation" className={this.state.activePill === MYTALKSPAGE ? 'active': null}>
                        <a name={MYTALKSPAGE} className='header' href="#" onClick={(event) => { this.props.handlePageChange(MYTALKSPAGE); this.setActive(MYTALKSPAGE)} }>
                            <div>My Talks</div>
                            <i className="ai-star"></i>
                        </a>
                        
                    </li>
                    : <li></li>
                    }
                <li role="presentation" className={this.state.activePill === INFOPAGE ? 'active': null}>
                    <a name={INFOPAGE} className='header' href="#" onClick={(event) => { this.props.handlePageChange(INFOPAGE); this.setActive(INFOPAGE)} }>
                        <div>Info</div>
                        <i className="ai-info-circle"></i>
                    </a>
                    
                </li>
            </ul>
        )
    }
}

export default HeaderNavbar;