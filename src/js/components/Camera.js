import {Entity} from "aframe-react";
import React from "react";

export default (props) => (
    <Entity>
      <Entity camera="userHeight: 1.7" look-controls="" wasd-controls="" {...props}/>

      <Entity id="leftController"
              static-body="shape: sphere; sphereRadius: 0.02;"
              vive-controls="hand: left"
              sphere-collider="objects: .cube"
              grab
      />
      <Entity id="rightController"
              static-body="shape: sphere; sphereRadius: 0.02;"
              vive-controls="hand: right"
              sphere-collider="objects: .cube"
              grab
      />

    </Entity>
);
