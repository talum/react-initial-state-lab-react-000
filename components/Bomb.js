const React = require('react');

class Bomb extends React.Component {
  constructor(props){
    super();

    this.state = {
      secondsLeft: props.initialCount
    };
  }

  render() {
    var componentText;
    var secondsLeft = this.state.secondsLeft;
    if (secondsLeft == 0) {
      componentText = 'Boom!';
    }
    else {
      componentText = this.state.secondsLeft + ' seconds left before I go boom!';
    }

    return (
      <div>{componentText}</div>
    )
  }
}

module.exports = Bomb;
