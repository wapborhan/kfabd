import React from 'react';
import Slider from '../components/slider/home-v2';
import dataSlider from '../assets/fake-data/data-slider';
import About from '../features/about/home-v2';
import dataAbout from '../assets/fake-data/data-about';
import RoadMap from '../features/roadmap/home-v2';
import dataRoadmap from '../assets/fake-data/data-roadmap';
import Project from '../features/project/home-v2';
import dataProject from '../assets/fake-data/dataProject';
import Work from '../features/work/home-v2';
import dataWork from '../assets/fake-data/data-work';
import dataTeam from '../assets/fake-data/data-team';
import Team from '../features/team/home-v2';
import Partner from '../features/partner';
import dataPartner from '../assets/fake-data/data-partner';
import Blog from '../features/blog/home-v2';
import dataBlog from '../assets/fake-data/data-blog';
import FAQ from '../features/faq/home-v2';
import dataFaq from '../assets/fake-data/data-faq';


function HomeTwo(props) {
    return (
        <div className='home-2'>
            <Slider data={dataSlider} />

            <About data={dataAbout} />

            <RoadMap data={dataRoadmap} />

            <Project data={dataProject} />
            
            <Work data={dataWork} />

            <Team data={dataTeam} />

            <Partner data={dataPartner} />

            <Blog data={dataBlog} />

            <FAQ data={dataFaq} />
        </div>
    );
}

export default HomeTwo;