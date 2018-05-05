import React, { Component } from "react";
import { Sidebar, Segment, Button, Menu, Header } from "semantic-ui-react";
import './SideBar.css';
class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      visible: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  render() {
    return (
      <div id="SideBar">
        {" "}
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="push"
            width="very wide"
            visible={this.state.visible}
            vertical
            inverted
          >
            <p>Search Bar</p>
            <p>Search Result</p>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
              <h1 as="h3">This is the map</h1>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }

  toggleVisibility() {
    this.setState({ visible: !this.state.visible });
  }
}

export default SideBar;
