import React from 'react';
import Box from 'grommet/components/Box';

class FlipCard extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {mouseOver: false};
  }

  resetCard = () => {
    this.setState({
      mouseOver: false
    });
  }

  flipCard = () => {
    this.setState({
      mouseOver: true
    });
  }
  
  render() {
    return (
      <Box onMouseOver={this.flipCard} onMouseOut={this.resetCard}>
        { this.state.mouseOver ? this.props.children[1] : this.props.children[0] }
      </Box>
    );
  }
}

export default FlipCard;