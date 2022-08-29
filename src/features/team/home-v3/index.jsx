import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from "swiper";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

// import TeamItem from '../team-item';
import { Link } from 'react-router-dom';

Team.propTypes = {
    data: PropTypes.array,
};

function Team(props) {

    const {data} = props;

    const [dataBlock] = useState({
        subtitle: 'Our team',
        title: 'Meet our TEAM',
        desc: 'Who we are',
        text: 'Purus, laoreet dui augue ut euismod. Elementum ante sociis volutpat tellus enim, nisl consectetur mauris. Venenatis congue id quis eget viverra. Vestibulum, justo, euismod congue feugiat eget fames gravida posuere.',
        desc1: 'our mission',
        text1 : 'Purus, laoreet dui augue ut euismod. Elementum ante sociis volutpat tellus enim, nisl consectetur mauris. Venenatis congue id quis eget viverra. Vestibulum, justo, euismod congue feugiat eget fames gravida posuere.'
    })

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <section className="tf-section tf-team gallery">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-md-12">
                        <div className="tf-title st2 mb-49" data-aos="fade-up" data-aos-duration="800">
                            <p className="h8 sub-title">{dataBlock.subtitle}</p>
                            <h4 className="title">{dataBlock.title}</h4>
                        </div>
                        <div className="content mobie-30 mb-40" data-aos="fade-up" data-aos-duration="800">
                            <div className="h7 txt-tranf-cap m-b16">
                                {dataBlock.desc}
                            </div>
                            <p>{dataBlock.text}</p>
                        </div>

                        <div className="content mobie-30" data-aos="fade-up" data-aos-duration="800">
                            <div className="h7 txt-tranf-cap m-b16">
                                {dataBlock.desc1}
                            </div>
                            <p>{dataBlock.text1}</p>
                        </div>
                    </div>
                    <div className="col-xl-7  col-md-12">
                        <div className="gallery">
                            <Swiper 
            
                                style={{
                                    "--swiper-navigation-color": "#fff",
                                    "--swiper-pagination-color": "#fff",
                                }}
                                spaceBetween={10}
                                navigation={true}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="gallery-slider"
                            >
            
                                {
                                    data.map(item => (
                                        <SwiperSlide key={item.id}>
                                            <div className="team-box">   
                                            <img src={item.img} alt="" />
                                                <div className="content">
                                                    <h5><Link to="/nft-item-details">{item.name}</Link></h5>
                                                    <p>{item.position}</p>
                                                    <p className="desc">“Tortor et odio quam quis in vestibulum. Dictum nunc aliquam rhoncus lectus. Enim sit urna consequat at.”</p>
                                                    <ul className="social">
                                                        {
                                                            item.listsocial.map(icon => (
                                                                <li key={icon.id}>
                                                                    <Link to={icon.link}><i className={icon.icon}></i></Link>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                    
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                            <Swiper
                                
                                // onSwiper={setThumbsSwiper}
                                spaceBetween={20}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 5,
                                        },
                                    767: {
                                        slidesPerView: 7,
                                    },
                                    991: {
                                        slidesPerView: 6,
                                    },
                                }}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="gallery-thumbs"
                            >
                                {
                                    data.map(item => (
                                        <SwiperSlide key={item.id}>
                                            <div className="image"><img src={item.img} alt="" /></div>
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