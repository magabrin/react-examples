import React from 'react';
import './App.css';
import '../node_modules/aura-web-ui/dist/css/aura.min.css';
import HeaderNavbar from './components/HeaderNavbar';
import SchedulePage from './components/SchedulePage';
import InfoPage from './components/InfoPage';
import BiosPage from './components/BiosPage';
import MyTalksPage from './components/MyTalksPage';
import LoginPage from './components/LoginPage';
import {BIOSPAGE, SCHEDULEPAGE, MYTALKSPAGE, INFOPAGE} from './data/pageNames.json';
import {MAIN, UPSTAIRS, DOWNSTAIRS} from './data/rooms.json';


class App extends React.Component {

  constructor() {
    super()
    this.state ={
      pageName: SCHEDULEPAGE,
      roomName: 'main',
      loggedIn: true,
      password: 'closedloop',
      myTalks: [],
    }
  }

  addToMyTalks = (event) => {
    const name = event.target.getAttribute("name")
    
    if (localStorage.getItem(name)) {
      // item added to my talks, remove from it
      console.log("removing " + name + " to my talks");
      localStorage.removeItem(name);
      let oldMyTalks = this.state.myTalks;
      oldMyTalks.splice(oldMyTalks.indexOf(name));      
      this.setState({
        myTalks: oldMyTalks
      })

    } else {
      // item not in my talks, add it
      console.log("adding " + name + " to my talks");
      localStorage.setItem(name, name);
      let oldMyTalks = this.state.myTalks;
      oldMyTalks.push(name);
      this.setState({
        myTalks: oldMyTalks
      })
    }

    
    
  }

  handlePageChange = (name) => {    
    // const name = event.target.name;
    if (this.state.pageName !== name) {
      console.log("changing page to " + name);
      this.setState({
        pageName: name,
        currentRoom: MAIN
      });
    }    
  }

  handleRoomChange = (name) => {    
    // const name = event.target.name;
    if (this.state.currentRoom !== name) {
      console.log("changing room page to " + name);
      this.setState({
        currentRoom: name
      });
    }    
  }

  handleLogin = (guess) => {
    if (guess === this.state.password) {
      this.setState({
        loggedIn: true
      })
    }
  }


  render() {
    let page, frame, image;
    if (this.state.loggedIn) {
      if (this.state.pageName === SCHEDULEPAGE) {
        page = <SchedulePage handleRoomChange={this.handleRoomChange} addToMyTalks={this.addToMyTalks} currentRoom={this.state.currentRoom}></SchedulePage>
        
        if (this.state.currentRoom === UPSTAIRS) {
          image = <img src="upstairs.jpg" alt="..." className="headerImage scale img-responsive img-rounded"></img>  
        } else if (this.state.currentRoom === DOWNSTAIRS) {
          image = <img src="downstairs.jpg" alt="..." className="headerImage scale img-responsive img-rounded"></img>  
        } else {
          image = <img src="edited-closedloop-disruption-finke.jpg" alt="..." className="headerImage scale img-responsive img-rounded"></img>  
        }
        
      } else if (this.state.pageName === INFOPAGE) {
        page = <InfoPage></InfoPage>
        image = <img src="info.jpg" alt="..." className="headerImage scale img-responsive img-rounded"></img>  
      } else if (this.state.pageName === BIOSPAGE) {
        page = <BiosPage></BiosPage>
        image = <img src="bios.jpg" alt="..." className="headerImage scale img-responsive img-rounded"></img>  
      } else if (this.state.pageName === MYTALKSPAGE) {
        page = <MyTalksPage addToMyTalks={this.addToMyTalks}></MyTalksPage>
        image = <img src="mytalks.jpg" alt="..." className="headerImage scale img-responsive img-rounded"></img>  
      }

      frame = (<header className="App-header">
        <img src="closedloop_light--gradient.svg" className="titleImage"></img>
        {image}
        
        
        
        <HeaderNavbar handlePageChange={this.handlePageChange}></HeaderNavbar>
      </header>);
    } else {
      page = <LoginPage handleLogin={this.handleLogin}></LoginPage>
      frame = (<header className="App-header">
        <img src="cl19-banner-4-big.png" alt="..." className="img-responsive img-rounded"></img>  
      </header>);
    }
    


    return (
      <div className="App">
        
        {frame}
        {page}

      </div>
    );
  }
}

export default App;
