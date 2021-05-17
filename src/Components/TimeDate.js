import React from 'react';


class TimeDate extends React.Component {
  state={
    curTime : new Date().toLocaleString(),
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ curTime: new Date().toLocaleString() });
    }, 1000)
  }
  render(){
    return (
      <div className="App">
        <p>Today's date : {this.state.curTime}</p>
      </div>
    );
  }
}

export default TimeDate;