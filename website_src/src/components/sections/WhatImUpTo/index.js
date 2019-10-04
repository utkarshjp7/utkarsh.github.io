import React from 'react';
import {Section, SectionTitle, ListItem, UnorderedList, UnderlinedLink} from 'styles/shared/styled-components';

const WhatImUpTo = () => (
  <Section id="sup" className="animated fadeInDown">
    <SectionTitle> What I'm up to </SectionTitle>
    <UnorderedList>
      <ListItem>
      Masters in Computer Science at University of Southern California. Graduating in May, 2020.
      </ListItem>
      <ListItem>
      Specializing in Machine Learning and Robotics.
      </ListItem>
      <ListItem>
      Active member of Trojan Cricket Club at USC.
      </ListItem>
      <ListItem>
      Competing in <UnderlinedLink href="https://sites.google.com/usc.edu/raceon/home">Race On!</UnderlinedLink>, a self-driving car competition at USC.
      </ListItem>
      <ListItem>
      Exploring the World, one national park at a time.
      </ListItem>
    </UnorderedList>
  </Section>
);

export default WhatImUpTo;