import React from 'react';
import Box from 'grommet/components/Box';
import Text from 'grommet/components/Text';
import DownArrow from 'grommet-icons/icons/Down';
import UpArrow from 'grommet-icons/icons/Up';

class Accordian extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayContent: false };
  }

  showContent = () => {
    this.setState({ displayContent: true });
  }

  hideContent = () => {
    this.setState({ displayContent: false });
  }

  toggleView = () => {
    const isContentVisible = this.state.displayContent;
    if(isContentVisible)
      this.hideContent();
    else
      this.showContent();
  }

  render() {
    return (
      <React.Fragment>
        <Box full="horizontal" direction="row" onClick={this.toggleView} margin={{top: "small"}} pad="small" className="accordian-header">
          {this.state.displayContent ? <UpArrow /> : <DownArrow />}
          &nbsp;&nbsp;&nbsp;
          <Text>{this.props.title}</Text>
        </Box>
        {this.state.displayContent ? this.props.children : null}
      </React.Fragment>
    );
  }
}

export default Accordian;