import React from 'react';
import {FeaturedLinks} from './styles';
import {UnderlinedLink} from 'styles/shared/styled-components';
import {Point} from 'components/Project/styles';
import Project from 'components/Project';
import YouTube from 'react-youtube';

const opts = {
    height: '390',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };

const ShareSci = () => (
  <Project
    title="&#9733; ShareSci: An Intelligent Full-Text Search Engine (2017-2018)"
  >
    <Point> <b>&bull;</b>&nbsp; Built a search engine for research papers to simplify the process of literature review.</Point>
    <Point> <b>&bull;</b>&nbsp; Trained deep learning models to build document search, and user recommendations for 1M+ documents. </Point>
    <Point> <b>&bull;</b>&nbsp; Won the Best Computer Science Capstone Project Award at CSU.</Point>

    <Point>
        <YouTube
            videoId="tIOvY0ioY3Y"
            opts={opts}
            onReady={(event) => {event.target.stopVideo()}}
        />
    </Point>


  </Project>
);

export default ShareSci;