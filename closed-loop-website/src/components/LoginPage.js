import React from 'react';


class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            passwordForm: ""
        }
    }

    submit = (event) => {
        event.preventDefault();
        this.props.handleLogin(this.state.passwordForm);
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submit} className="LoginCSS">                
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" onChange={this.handleChange} className="form-control" name="passwordForm" id="exampleInputPassword1" placeholder="Password"></input>
                    </div>                
                    <button type="submit" className="btn btn-default" >Submit</button>
                </form>
                <footer className="App-footer">
                    
                </footer>
            </div>
        )
    }

}

export default LoginPage;