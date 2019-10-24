import React from 'react';

class Bio extends React.Component {
    constructor() {
        super();
    }

    render() {

        let photoHtml = [];
        let photoUrls = this.props.photoUrl.split("|");
        photoUrls.forEach(url => {
            photoHtml.push(<img src={url} alt="No Photo" className="img-rounded ImageCSS"></img> )
        });

        let bioHtml = [];
        let bioText = this.props.bio.split("\n");
        bioText.forEach(bio => {
            bioHtml.push(<p>{bio}</p> )
        });


        return (
            <div className="container-fluid BioCSS">
                <div className="row-bordered">
                    <div className="col-xs-3 col-md-3">
                        {photoHtml}
                        {/* {this.props.photoUrl 
                            ? <img src={this.props.photoUrl} alt="No Photo" className="img-rounded ImageCSS"></img> 
                            : <img src="./mmodalman.ico" alt="No Photo" className="img-rounded ImageCSS"></img>
                        }                         */}
                    </div>
                    <div className="col-xs-8 col-md-8">
                        <div className="row">
                            <h3>{this.props.name}</h3>
                        </div>
                        <div className="row">
                            <p>{bioHtml}</p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Bio;