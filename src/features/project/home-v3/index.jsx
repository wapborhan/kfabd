import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import '../styles.scss' ;

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
        <section className="tf-section tf-project pb-mobie">
            <div className="container">
            <div className="col-md-12">
                <div className="tf-title mb-59" data-aos="fade-up" data-aos-duration="800">
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
                    600: {
                        slidesPerView: 2,
                    },
                    991: {
                        slidesPerView: 3,
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
                            <Link to='#'>
                                <div className="img-box">
                                    <img src={item.img} alt="crybox" />
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))
                }

            </Swiper>

            <Swiper
                className='swiper-portfolio s1 mt-33'
                modules={[ Autoplay ]}
                spaceBetween={30}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        },
                    600: {
                        slidesPerView: 2,
                    },
                    991: {
                        slidesPerView: 3,
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
                            <Link to='#'>
                                <div className="img-box">
                                    <img src={item.img} alt="crybox" />
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
            </div>
        </section>
    );
}

export default Project;