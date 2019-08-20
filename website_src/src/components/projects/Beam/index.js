import React from 'react';
import {Point} from 'components/Project/styles';
import Project from 'components/Project';
import {UnderlinedLink} from 'styles/shared/styled-components';
import YouTube from 'react-youtube';

const opts = {
    height: '390',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };

const Beam = () => (
  <Project
    title="&#9733; Beam: An Autonomous Service Robot (CSU, 2017)"
  >
    <Point>
    <b>&bull;</b>&nbsp; Lead a team to convert <UnderlinedLink href="https://suitabletech.com/products/beam"> Beam+ robot </UnderlinedLink> into an 
    autonomous <UnderlinedLink href="https://www.ros.org/about-ros/">ROS</UnderlinedLink> compatible research platform.
    </Point>
    <Point>
    <b>&bull;</b>&nbsp; Developed autonomous charging system for Beam+ using AR markers.
    </Point>
    <Point>
    <b>&bull;</b>&nbsp; Published this work as a first-author <UnderlinedLink href="https://aaai.org/ocs/index.php/FSS/FSS17/paper/view/16022">conference paper</UnderlinedLink> at 2017 AAAI symposium, Virginia, USA.
    </Point>
    <Point>
    <b>&bull;</b>&nbsp; Check out the Beam robot autonomously navigating in Cleveland State University's campus below.
    </Point>
    <Point>
        <YouTube
            videoId="wY-OLI1LG1U"
            opts={opts}
            onReady={(event) => {event.target.stopVideo(); event.target.mute()}}
        />
    </Point>
  </Project>
);

export default Beam;