import React, { Component } from 'react';
import './App.css';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti';
import boy from './images/boy.png';
import girl from './images/girl.png';
import TextLoop from "react-text-loop";
import Countdown from "./Countdown"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showConfetti: false,
      girlPicked: false,
      boyPicked: false
    };
  }

  getConfetti() {
    return <Confetti
        width={400}
        height={1000}
      />;
  }

  girlPicked() {
    this.setState({
      showConfetti: true,
      girlPicked: true,
      boyPicked: false
    })
  }

  boyPicked() {
    this.setState({
      showConfetti: false,
      girlPicked: false,
      boyPicked: true
    })
  }

  render () {
    return (
      <div className="App">
        {this.state.showConfetti ? this.getConfetti(): null}
        <div width="100%" style={{paddingTop: "20px"}}>
          <div style={{margin: "0 auto", width: "300px"}}>
            <div style={{maxWidth: "300px", textAlign: "center"}}> 
              <TextLoop noWrap={false} interval={4000}>
                <span>Hi! I am Isabel (Izzy). I am going to get a baby sibling soon.</span>
                <span>Guess it's a boy or a girl by clicking on one of the babies</span>
              </TextLoop>
            </div>
            <div style={{paddingTop: "20px"}}>
            <img src="http://c2.staticflickr.com/2/1596/23948188374_77061251e2_z.jpg"
                style={{marginLeft: '-40px', width: "250px"}}>
            </img>
            <div style={{marginTop: "-120px", marginBottom:"100px"}}>
            <div style={{display: "flex", width: "300",
                  justifyContent: "space-between"}} >
                  <div>
                    <img width="120px" src={girl} onClick={() => this.girlPicked()}/>
                  </div>
                  <div>
                    <img style={{visibility: this.state.girlPicked ? "hidden" : "visible"}} width="120px" src={boy} onClick={() => this.boyPicked()} />
                  </div>
                </div>
              </div>
            </div>
            { this.state.boyPicked ? 
                  <TextLoop noWrap={false} interval={4000}>
                    <span>Sorry!! wrong guess</span>
                  </TextLoop> : null
              }
              {
                this.state.girlPicked ? 
                <TextLoop noWrap={false} interval={4000}>
                  <span>Yess!! it's a Baby GIRL!!!</span>
                </TextLoop> : null
              }
              {
                this.state.girlPicked ? <Countdown /> : null
              }
            </div>
        </div>
      </div>
    )
  }
}

export default App;
