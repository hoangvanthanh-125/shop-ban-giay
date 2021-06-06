import { useScrollTrigger } from "@material-ui/core";
import React from 'react';

function ElevationScroll(props) {
  const { children, window } = props;
 
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
export default ElevationScroll;