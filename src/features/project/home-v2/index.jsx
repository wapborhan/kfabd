import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ProjectItem from '../project-item';

Project.propTypes = {
    data: PropTypes.array,
};

function Project(props) {
    const {data} = props;

    const [dataBlock] = useState({
        sutitle: 'NFT featured',
        title: 'Arts & collectibles'
    })
    return (
        <section className="tf-section tf-project pb-mobie home-2 bg-st1">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tf-title st2 m-b50" data-aos="fade-up" data-aos-duration="800">
                            <p className="h8 sub-title">{dataBlock.sutitle}</p>
                            <h4 className="title m-b17">{dataBlock.title}</h4>
                        </div>
                    </div>

                    {
                        data.slice(0,8).map(item => (
                            <div key={item.id} className="col-xl-3 col-md-4 col-6">
                                <ProjectItem item={item} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Project;