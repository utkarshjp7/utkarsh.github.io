import Pdf from 'doc/resume.pdf';

const links = {
  github: 'https://github.com/utkarshjp7',
  linkedin: 'https://linkedin.com/in/utkarsh-patel',
  email: 'mailto:utkarshp@usc.edu'
};

export const textLinks = [
  {
    title: 'Software Engineer',
  },
  {
    title: 'Roboticist',
  },
  {
    title: 'Machine Learning Enthusiast',
  }
];

export const socialIcons = [
  {
    icon: 'envelope',
    href: links.email
  },
  {
    icon: 'github',
    href: links.github
  },
  {
    icon: 'linkedin',
    href: links.linkedin
  }
];