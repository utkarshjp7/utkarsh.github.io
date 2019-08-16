import React from 'react';
import {UnderlinedLink} from 'styles/shared/styled-components';
import {Point} from 'components/Project/styles';
import Project from 'components/Project';

const ZillowIntern = () => (
  <Project
    title="Natural Language Search">
    <Point>
    Developed natural language search for Zillow and Trulia. 
    </Point>
    <Point>
    Designed and trained deep learning models to find entities (location, price etc.) from a search query. [Python, PyTorch] 
    </Point>
  </Project>
);

export default ZillowIntern;