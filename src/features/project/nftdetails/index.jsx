import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import '../styles.scss' ;
import ProjectItem from '../project-item';

Project.propTypes = {
    data: PropTypes.array,
};

function Project(props) {
    const {data} = props;

    const [dataBlock] = useState({
        sutitle: 'NFT',
        title: 'Arts & collectibles'
    })
    return (
        <section className="tf-section tf-project nft-details pb-mobie">
            <div className="container-fluid">
            <div className="col-md-12">
                <div className="tf-title mb-50" data-aos="fade-up" data-aos-duration="800">
                    <p className="h8 sub-title">{dataBlock.sutitle}</p>
                    <h4 className="title m-b17">{dataBlock.title}</h4>
                </div>
            </div>
            <Swiper
                className='swiper-portfolio s1'
                modules={[ Autoplay ]}
                spaceBetween={30}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        },
                    767: {
                        slidesPerView: 2,
                    },
                    991: {
                        slidesPerView: 4,
                    },
                }}
                loop
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                speed= {2000}
            >
                {
                    data.map(item => (
                        <SwiperSlide key={item.id}>
                            <ProjectItem item={item} />
                        </SwiperSlide>
                    ))
                }

            </Swiper>

            </div>
        </section>
    );
}

export default Project;