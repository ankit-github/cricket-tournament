import React from 'react';
import Box from 'grommet/components/Box';

class FlipCard extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {mouseOver: false};
  }

  flipCard = () => {
    this.setState((prevState) => {
      const changeValue = prevState.mouseOver;
      return {
        mouseOver: !changeValue
      }
    });
  }
  
  render() {
    return (
      <Box onClick={this.flipCard}>
        { this.state.mouseOver ? this.props.children[1] : this.props.children[0] }
      </Box>
    );
  }
}

export default FlipCard;