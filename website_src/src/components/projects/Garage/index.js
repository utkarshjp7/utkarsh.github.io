import React from 'react';
import {UnderlinedLink} from 'styles/shared/styled-components';
import {Point} from 'components/Project/styles';
import Project from 'components/Project';

const Garage = () => (
  <Project title="&#9733; Garage (2019)">
    <Point>
    <b>&bull;</b>&nbsp;  
    <UnderlinedLink href="https://github.com/rlworkgroup/garage/">Garage</UnderlinedLink> is a framework for developing and evaluating reinforcement learning algorithms.
    </Point>
    <Point>
    <b>&bull;</b>&nbsp;  
    I implement state-of-the-art reinforcement learning algorithms for garage.
    </Point>
  </Project>
);

export default Garage;
