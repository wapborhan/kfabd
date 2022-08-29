import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
import { Scrollbar, A11y , Navigation  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import TeamItem from './team-item';

Team.propTypes = {
    data: PropTypes.array,
};

function Team(props) {

    const {data} = props;

    const [dataBlock] = useState({
        subtitle: 'Our team',
        title: 'Meet our TEAM',
        desc: 'Who we are',
        text: 'Purus, laoreet dui augue ut euismod. Elementum ante sociis volutpat tellus enim, nisl consectetur mauris. Venenatis congue id quis eget viverra. Vestibulum, justo, euismod congue feugiat eget fames gravida posuere.'
    })
    return (
        <section className="tf-section tf-team">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-6 col-12">
                        <div className="tf-title st2 mb-61" data-aos="fade-up" data-aos-duration="800">
                            <p className="h8 sub-title">{dataBlock.subtitle}</p>
                            <h4 className="title">{dataBlock.title}</h4>
                        </div>
                        <div className="content mobie-30" data-aos="fade-up" data-aos-duration="800">
                            <div className="h7 txt-tranf-cap m-b16">
                                {dataBlock.desc}
                            </div>
                            <p>{dataBlock.text}</p>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-6 col-12"> 
                        <div className="wrap-team" data-aos="fade-up" data-aos-duration="800">
                            <Swiper
                                modules={[ Navigation , Scrollbar, A11y ]}
                                    spaceBetween={30}
        
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 2,
                                            },
                                        767: {
                                            slidesPerView: 1,
                                        },
                                        991: {
                                            slidesPerView: 3,
                                        },
                                    }}
                                    // navigation
                                    scrollbar={{ draggable: true }}
                                >
                                {
                                    data.map(item => (
                                        <SwiperSlide key={item.id}>
                                            <TeamItem item={item} />
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

export default Team;