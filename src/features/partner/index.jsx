import React from 'react';
import PropTypes from 'prop-types';

import { Scrollbar, A11y   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './styles.scss'

Partner.propTypes = {
    data: PropTypes.array,
};

function Partner(props) {

    const {data} = props;

    return (
        <section className="tf-section partner">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tf-title" data-aos="fade-up" data-aos-duration="800">
                            <p className="h8 sub-title">partnerS</p>
                            <h4 className="title">CYBOX INVESTORS</h4>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="item-parner" data-aos="fade-up" data-aos-duration="800">
                            <Swiper
                                modules={[  Scrollbar, A11y ]}
                                    spaceBetween={60}
                                    scrollbar={{ draggable: true }}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 2,
                                            },
                                        767: {
                                            slidesPerView: 4,
                                        },
                                        991: {
                                            slidesPerView: 6,
                                        },
                                    }}
                                >
                                {
                                    data.slice(0,9).map((item,idx) => (
                                        <SwiperSlide key={idx}>
                                            <div className="image">
                                                <img src={item.img} alt="Crybox" />
                                            </div>
                                        </SwiperSlide>
                                        
                                    ))
                                }
                            </Swiper>
                            <Swiper
                                modules={[  Scrollbar, A11y ]}
                                    spaceBetween={60}
                                    scrollbar={{ draggable: true }}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 2,
                                            },
                                        767: {
                                            slidesPerView: 4,
                                        },
                                        991: {
                                            slidesPerView: 6,
                                        },
                                    }}
                                >
                                {
                                    data.slice(9,17).map((item,idx) => (
                                        <SwiperSlide key={idx}>
                                            <div className="image">
                                                <img src={item.img} alt="Crybox" />
                                            </div>
                                        </SwiperSlide>
                                        
                                    ))
                                }
                            </Swiper>
                            <Swiper
                                modules={[  Scrollbar, A11y ]}
                                    spaceBetween={60}
                                    scrollbar={{ draggable: true }}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 2,
                                            },
                                        767: {
                                            slidesPerView: 4,
                                        },
                                        991: {
                                            slidesPerView: 6,
                                        },
                                    }}
                                >
                                {
                                    data.slice(10,18).map((item,idx) => (
                                        <SwiperSlide key={idx}>
                                            <div className="image">
                                                <img src={item.img} alt="Crybox" />
                                            </div>
                                        </SwiperSlide>
                                        
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Partner;