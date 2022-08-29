import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles.scss'


import { Navigation , Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

RoadMap.propTypes = {
    data: PropTypes.array,
};

function RoadMap(props) {

    const {data} = props;

    const [dataBlock] = useState(
        {
            subtitle: 'ROADMAP',
            title: 'cybox Timeline'
        }
    )

    return (
        <section className="tf-section tf-roadmap style2 style3">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tf-title mb-39" data-aos="fade-up" data-aos-duration="800">
                            <p className="h8 sub-title">{dataBlock.subtitle}</p>
                            <h4 className="title">{dataBlock.title}</h4>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="roadmap style2 style3" data-aos="fade-up" data-aos-duration="800">
                        <Swiper
                            modules={[ Navigation , Scrollbar, A11y ]}
                                spaceBetween={60}
                                navigation
                                scrollbar={{ draggable: true }}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                        },
                                    767: {
                                        slidesPerView: 2,
                                    },
                                    991: {
                                        slidesPerView: 3,
                                    },
                                }}
                                
                            >
                            {
                                data.map(item => (
                                    <SwiperSlide key={item.id}>
                                        <div className="box">
                                            <div className="rm-box">
                                                <div className={`corner-box ${item.style}`}>
                                                <h5>{item.time}</h5>
                                                <ul>
                                                    {
                                                        item.list.map((li,idx) => (
                                                            <li key={idx}>{li.text}</li>
                                                        ))
                                                    }
                                                </ul>
                                                </div>
                                            </div>
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

export default RoadMap;