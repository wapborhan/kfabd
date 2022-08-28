import React from 'react';
import dataRoadmap from '../assets/fake-data/data-roadmap';
import PageTitle from '../components/pagetitle';
import RoadMap from '../features/roadmap/home-v3';


function RoadMapTwo(props) {
    return (
        <div className='page-roadmap-v2'>
            <PageTitle title='Roadmap' />

            <RoadMap data={dataRoadmap} />
        </div>
    );
}

export default RoadMapTwo;