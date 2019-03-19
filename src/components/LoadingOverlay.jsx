import React from 'react';
import { Transition } from "react-transition-group";

const duration = 1000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease`,
  opacity: 1,
};

const transitionStyles = {
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

const LoadingOverlay = function ({ loaded }) {
  return (
    <Transition
      in={!loaded}
      timeout={duration}
      unmountOnExit
    >
      {(state) => (
        <div
          className="loader"
          style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}
        >
          <span>Loading...</span>
        </div>
      )}
    </Transition>
  )
}

export default LoadingOverlay;