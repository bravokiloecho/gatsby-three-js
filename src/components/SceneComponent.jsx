import React, { Component } from 'react';
import LoadingOverlay from './LoadingOverlay';
import { CreateSphere } from "../scene/SceneBasic";


let activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || "development";

export default class SceneComponent extends Component {
  constructor(props) {
    super(props);
    this.scrollTop = 0;
    this.state = {
      loaded: false
    };
    // this.clock = new THREE.Clock()
  }

  componentDidMount = () => {

    this.loadThree()
      .then(() => {
        this.setupRenderer();
        this.setupScene();
        this.setupCamera();
        this.setupLights();
        this.buildScene()
          .then(() => {
            this.animate();
            this.setState({
              loaded: true
            });
          });
      });
  }

  loadThree = () => {
    const loadjs = require('loadjs');
    const threePath = '/three.101.min.js';
    return new Promise(function(resolve, reject) {
      loadjs([threePath], 'three');
      loadjs.ready('three', {
        success: resolve,
        error: reject
      });
    });
  }

  setupCamera = () => {
    let { innerWidth: width, innerHeight: height } = window;
    this.camera = new THREE.PerspectiveCamera(45, width / height, 10, 1000);
    this.camera.position.set(0, 0, 20);
  }

  setupRenderer = () => {
    let { innerWidth: width, innerHeight: height } = window;
    
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      preserveDrawingBuffer: false
    });

    const pixelRatio = Math.max(2, window.devicePixelRatio);
    this.renderer.setPixelRatio(pixelRatio);
    this.renderer.setSize(width, height);
    // Setup resize events
    window.addEventListener('resize', () => this._resize());
    window.addEventListener('orientationchange', () => this._resize());
  }

  setupScene = () => {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffffff);
  }

  buildScene = () => {
    return new Promise((resolve) => {
      const sphere = CreateSphere();
      this.scene.add( sphere );
      resolve();
    });
  }

  setupLights = () => {
    
  }

  animate = () => {
    // Start loop again
    requestAnimationFrame(this.animate);
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <div className="three-container" ref={element => this.containerElement = element}>
        <LoadingOverlay loaded={this.state.loaded} />
        <div className="three-scroller" ref={element => this.scrollElement = element} />
        <canvas id="three-canvas" ref={element => this.canvas = element} />
      </div>
    )
  }

  _resize() {
    let { innerWidth: width, innerHeight: height } = window;
    this.renderer.setSize(width, height);
    this.camera.updateProjectionMatrix();
  }
}
