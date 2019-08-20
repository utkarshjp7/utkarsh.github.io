import React from 'react';
import {UnderlinedLink} from 'styles/shared/styled-components';
import {Point} from 'components/Project/styles';
import Project from 'components/Project';
import ner from 'img/ner.png';


const ZillowIntern = () => (
  <Project title="&#9733; Natural Language Search (Zillow, 2019)">
    <Point>
    <b>&bull;</b>&nbsp; Developed natural language search for <UnderlinedLink href="https://www.zillow.com">Zillow</UnderlinedLink> that will support over 190M users' queries.   
    </Point>
    <Point>
    <b>&bull;</b>&nbsp; Designed and trained deep learning models to find entities (location, price etc.) from a search query.
    </Point>
    <Point>
    <b>&bull;</b>&nbsp; Given a search query "Single family 2 bed homes between 70k and 120k in 5th St, Ferndale, MI", the entity detection model would find entities as displayed below:
    </Point>
    <Point>
        <img src={ner} alt="Logo" width='800' height='45' />
    </Point>
  </Project>
);

export default ZillowIntern;