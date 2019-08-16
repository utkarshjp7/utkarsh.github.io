import React from 'react';
import {Section, SectionTitle, UnorderedList} from 'styles/shared/styled-components';

//projects
import ZillowIntern from 'components/projects/ZillowIntern';

const ProudProjects = () => (
  <Section id="projects" className="animated fadeInDown">
    <SectionTitle> Projects I'm proud of </SectionTitle>
    <UnorderedList>
      <ZillowIntern/>
    </UnorderedList>
  </Section>
);

export default ProudProjects;