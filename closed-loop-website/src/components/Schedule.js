import React from 'react';

class Schedule extends React.Component {
    constructor() {
        super();
    }

    

    render() {
        return (
            <div className="container-fluid ScheduleCSS">
                <div className="row-bordered" >
                    <div className="col-xs-4 col-md-4 " >
                        <div className="header">
                            {this.props.time}
                        </div>
                        <div className={this.props.talkType === 'Tech' ? 'techCSS' : 'nontechCSS'}>
                            {this.props.talkType}
                        </div>

                       {/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
                       ? <i name={this.props.name} className={localStorage.getItem(this.props.name) ? "ai-star" : "ai-star-o"} onClick={this.props.addToMyTalks}></i>
                       : <div></div>}
                    </div>
                    <div className="col-xs-8 col-md-8 leftborder">
                        <div className="row">
                            <div className="col header">
                                {this.props.name}
                            </div>                            
                        </div>
                        <div className="row">
                            <div className="col subheader">
                                {this.props.abstract}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Schedule;