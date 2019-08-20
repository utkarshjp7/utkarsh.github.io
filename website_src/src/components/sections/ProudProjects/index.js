import React from 'react';
import {Section, SectionTitle, UnorderedList} from 'styles/shared/styled-components';

//projects
import ZillowIntern from 'components/projects/ZillowIntern';
import Beam from 'components/projects/Beam';
import ShareSci from 'components/projects/ShareSci';
import Sawyer from 'components/projects/Sawyer';

const ProudProjects = () => (
  <Section id="projects" className="animated fadeInDown">
    <SectionTitle> Projects I'm proud of </SectionTitle>
    <UnorderedList>
      <ZillowIntern/>
      <Sawyer/>
      <Beam/>
      <ShareSci/>      
    </UnorderedList>
  </Section>
);

export default ProudProjects;