import React from 'react';
import PropTypes from 'prop-types';

import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.scss' ;
import ProjectItem from './project-item';

Project.propTypes = {
    data: PropTypes.array,
};

function Project(props) {
    const {data} = props;
    return (
        <section className="tf-section tf-project">
            <div className="container-fluid">

            <Swiper
                className='swiper-portfolio s1'
                modules={[ Autoplay ]}
                spaceBetween={30}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                        },
                    767: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 5,
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

            <Swiper
                className='swiper-portfolio s1 mt-30'
                modules={[ Autoplay ]}
                spaceBetween={30}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                        },
                    767: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 5,
                    },
                }}
                loop
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    reverseDirection: true,
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