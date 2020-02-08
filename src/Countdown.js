import React, { Component } from 'react';

class Countdown extends Component {

    constructor(props) {
        super(props);
        this.state = {isClient: false};
        this.timer = null;
    }


    render() {
        var end = new Date('07/02/2020 10:10 AM');
        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var _month = _day * 30;
    
        var now = new Date();
        var distance = end - now;
    
        if (distance < 0 || !this.state.isClient) {
            return 'Hello World!';
        }
    
        var months = Math.floor(distance / _month);
        var days = Math.floor((distance % _month) / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);
    
        return <div style={{padding: "11px", fontSize: "11px"}}>
        { months + ' Mths ' + days + ' Days ' + hours + ' Hrs '
            + minutes + ' Mins ' + seconds + ' Secs' }
        </div>;
    }

    componentDidMount() {
        var self = this;
        this.setState({isClient: true});
        this.timer = setInterval(this.forceUpdate.bind(this), 1000);
    }
    componentWillUnmount() {
        this.timer = null;
    }
}

export default Countdown;