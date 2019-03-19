import React from 'react'
import { graphql } from 'gatsby'
import { cloneDeep } from 'lodash';

import Layout from '../globals/layout'

import SceneComponent from '../components/SceneComponent'

import Mousetrap from 'mousetrap'

let device;

class IndexPage extends React.Component {
  
  constructor(props) {
    super(props);
    // Set initial state
    this.state = {
      mobile: null
    };
  }

  componentDidMount() {
    // Load device package
    device = require('current-device').default;
    // KEYBOARD CONTROLS
    Mousetrap.bind('up', () => {
      
    });
    Mousetrap.bind('down', () => {
      
    });
  }

  // Remove listeners on unmount
  componentWillUnmount() {
    Mousetrap.unbind('up');
    Mousetrap.unbind('down');
  }
  
  render() {
    return(
      <Layout>
        <SceneComponent />
      </Layout>
    );
  }
};

export default IndexPage