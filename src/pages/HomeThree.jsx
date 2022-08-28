import React from 'react';
import Slider from '../components/slider/home-v3';
import dataSlider from '../assets/fake-data/data-slider';
import About from '../features/about/home-v3';
import dataAbout from '../assets/fake-data/data-about';
import RoadMap from '../features/roadmap/home-v3';
import dataRoadmap from '../assets/fake-data/data-roadmap';
import Work from '../features/work/home-v3';
import dataWork from '../assets/fake-data/data-work';
import Project from '../features/project/home-v3';
import dataProject from '../assets/fake-data/dataProject';
import Team from '../features/team/home-v3';
import dataTeam from '../assets/fake-data/data-team';
import Partner from '../features/partner';
import dataPartner from '../assets/fake-data/data-partner';
import Blog from '../features/blog/home-v2';
import dataBlog from '../assets/fake-data/data-blog';
import FAQ from '../features/faq/home-v3';
import dataFaq from '../assets/fake-data/data-faq';


function HomeThree(props) {
    return (
        <div className='home-3'>
            <Slider data={dataSlider} />

            <About data={dataAbout} />

            <RoadMap data={dataRoadmap} />

            <Work data={dataWork} />

            <Project data={dataProject} />

            <Team data={dataTeam} />

            <Partner data={dataPartner} />

            <Blog data={dataBlog} />

            <FAQ data={dataFaq} />
        </div>
    );
}

export default HomeThree;