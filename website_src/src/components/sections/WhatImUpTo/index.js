import React from 'react';
import {Section, SectionTitle, ListItem, UnorderedList, UnderlinedLink} from 'styles/shared/styled-components';

const WhatImUpTo = () => (
  <Section id="sup" className="animated fadeInDown">
    <SectionTitle> What I'm up to </SectionTitle>
    <UnorderedList>
      <ListItem>
      M.S in CS at University of Southern California. Graduating in May, 2020.
      </ListItem>
      <ListItem>
      Specializing in AI, Machine Learning, and Robotics.
      </ListItem>
      <ListItem>
      Exploring the World, one national park at a time.
      </ListItem>
    </UnorderedList>
  </Section>
);

export default WhatImUpTo;