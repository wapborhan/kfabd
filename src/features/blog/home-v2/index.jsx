import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles.scss';

import { Scrollbar, A11y , Navigation  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import BlogItem from '../blog-item';

Blog.propTypes = {
    data: PropTypes.array,
};

function Blog(props) {
    
    const {data} = props;

    const [dataBlock] = useState({
        subtitle: 'BLOGS',
        title: 'Lastest News'
    })

    return (
        <section className="tf-section blog">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="tf-title mb-42 st2">
                        <p className="h8 sub-title" data-aos="zoom-in" data-aos-duration="800">{dataBlock.subtitle}</p>
                        <h4 className="title" >{dataBlock.title}</h4>
                    </div>
                </div>
                <div className="col-md-12">
                    <Swiper
                        modules={[ Navigation, Scrollbar, A11y ]}
                            spaceBetween={30}
                            scrollbar={{ draggable: true }}
                            navigation
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
                        >
                        {
                            data.map(item => (
                                <SwiperSlide key={item.id}>
                                    <BlogItem item={item} />
                                </SwiperSlide>
                                
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Blog;