import React from 'react';
import {UnderlinedLink} from 'styles/shared/styled-components';
import {Point} from 'components/Project/styles';
import Project from 'components/Project';

const Sawyer = () => (
  <Project
    title="&#9733; Reinforcement Learning with Sawyer (2018-2019)"
  >
    <Point>
    <b>&bull;</b>&nbsp; Built an object detection/manipulation system 
    for <UnderlinedLink href="https://www.rethinkrobotics.com/sawyer">Sawyer</UnderlinedLink> robot to conduct RL experiments. See it in action <UnderlinedLink href="https://youtu.be/aT726QUaOiM?list=PLPyKMJ2JRBsdh5exM9LB49YPKhFU1SI3t"><b>here</b></UnderlinedLink>.
    </Point>
    <Point>
    <b>&bull;</b>&nbsp; Created simulation environments for Sawyer robot. See it in action <UnderlinedLink href="https://youtu.be/6C4BClyr8iU?list=PLPyKMJ2JRBscrUmynAdqy9dsGwOiRX27d"><b>here</b></UnderlinedLink>.
    </Point>
    <Point>
    <b>&bull;</b>&nbsp; Made Docker images to run Reinforcement Learning algorithms in simulation and with real robot.
    </Point>
  </Project>
);

export default Sawyer;