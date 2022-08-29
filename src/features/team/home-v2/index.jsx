import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TeamItem from '../team-item';

Team.propTypes = {
    data: PropTypes.array,
};

function Team(props) {

    const {data} = props;

    const [dataBlock] = useState({
        subtitle: 'Our team',
        title: 'Meet our TEAM',
    })
    return (
        <section className="tf-section tf-team home-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tf-title st2 mb-51" data-aos="fade-up" data-aos-duration="800">
                            <p className="h8 sub-title">{dataBlock.subtitle}</p>
                            <h4 className="title">{dataBlock.title}</h4>
                        </div>
                    </div>
                    {
                        data.map(item => (
                            <div key={item.id} className="col-xl-3 col-md-6 " data-aos="fade-up" data-aos-duration="800">
                                <TeamItem item={item} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Team;