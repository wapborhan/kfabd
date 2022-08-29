import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import WorkItem from './work-item';

Work.propTypes = {
    data: PropTypes.array,
};

function Work(props) {

    const {data} = props;

    const [dataBlock] = useState({
        subtitle: 'How we work',
        title: 'BECOME OUR MEMBER',
        desc: 'Maecenas sit pretium, cras in. In quisque sem id eget. In vel gravida ut adipiscing integer felis.'
    })
    return (
        <section className="tf-section how-we-work">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tf-title st2 mb-60" data-aos="fade-up" data-aos-duration="800">
                            <p className="h8 sub-title">{dataBlock.subtitle}</p>
                            <h4 className="title m-b17">{dataBlock.title}</h4>
                            <p className="p-r60">{dataBlock.desc} </p>
                        </div>
                    
                    </div>

                    {
                        data.map(item => (
                            <div key={item.id} className="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                                <WorkItem item={item} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Work;