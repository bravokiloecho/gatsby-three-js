// Get new thumb position based on current position
function getThumbNewPosition ( oldState, direction = 'next' ) {
  // Moving from top
  if ( oldState === 'top' ) {
    if ( direction === 'next' ) {
      return 'middle';
    } else {
      return 'top';
    }
  // Moving from middle
  } else if ( oldState === 'middle' ) {
    if ( direction === 'next' ) {
      return 'bottom';
    } else {
      return 'top';
    }
  // Moving from bottom
  } else {
    if ( direction === 'next' ) {
      return 'bottom';
    } else {
      return 'middle';
    }
  }
}

// Get direction of thumb movement
// based on position of clicked thumb
function getDirection ( thumbPos ) {
	if ( thumbPos === 'bottom' ) {
		return 'prev';
	} else {
		return 'next';
	}
}

// Get first thumb by progress direction
function getFirstImageNode ( images, direction, thumbsState ) {
	let thumbPos;
	if ( direction === 'next' ) {
		if ( thumbsState === 'noTop' ) {
			thumbPos = 'middle';	
		} else {
			thumbPos = 'top';
		}
	} else {
		if ( thumbsState === 'noBottom' ) {
			thumbPos = 'middle';	
		} else {
			thumbPos = 'bottom';
		}
	}

	return getImageByPosition( images, thumbPos ).node;
}

// Get the thumb that needs moving
function getSecondImageNode ( images, firstPosition ) {
	let secondPosition;
	if ( firstPosition === 'top' || firstPosition === 'bottom' ) {
		secondPosition = 'middle';
	} else {
		secondPosition = 'top';
	}
	
	const secondImage = getImageByPosition( images, secondPosition );
	if ( secondImage ) {
		return secondImage.node;
	} else {
		return false;
	}
}

// Get the image row by the thumb's current position
function getImageByPosition ( images, position ) {
	let image;
	
	// If middle, get the only middle position
	if ( position === 'middle' ) {
		image = images.edges.find(obj => {
			return obj.node.position === position;
		});
	// If top, get the first image at the top
	} else if ( position === 'top' ) {
		image = images.edges.filter(obj => {
			return obj.node.position === position;
		});
		image = image[ 0 ];
	// If bottom, get the last image at the bottom
	} else {
		image = images.edges.filter(obj => {
			return obj.node.position === position;
		});
		image = image[ image.length - 1 ];
	}

	return image;
}


export default {
	getThumbNewPosition: getThumbNewPosition,
	getDirection: getDirection,
	getFirstImageNode: getFirstImageNode,
	getSecondImageNode: getSecondImageNode,
	getImageByPosition: getImageByPosition
};