import React from 'react';
import {Section, SectionTitle, ListItem, UnorderedList, UnderlinedLink} from 'styles/shared/styled-components';

const WhatImUpTo = () => (
  <Section id="sup" className="animated fadeInDown">
    <SectionTitle> What I'm up to </SectionTitle>
    <UnorderedList>
      <ListItem>
        Attending USC for M.S. in Computer Science
      </ListItem>
      <ListItem>
        Exploring the World
      </ListItem>
    </UnorderedList>
  </Section>
);

export default WhatImUpTo;