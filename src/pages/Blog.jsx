import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../components/pagetitle';
import img1 from '../assets/images/post/imgpost1.jpg'

import dataBlog from '../assets/fake-data/data-blog2';
import Sidebar from '../components/sidebar';

function Blog(props) {
    return (
        <div>
            <PageTitle title='OUR BLOGs' />

            <section className="tf-section grid">
                <div className="container">
                    <div className="row">
                            <article className="article">
                                <div className="post p-b42" data-aos="fade-up" data-aos-duration="1200">
                                    <div className="image">
                                        <img src={img1} alt="crybox" />
                                        <div className="tag">nftartwork</div>
                                    </div>
                                    <ul className="meta-post">
                                        <li><span>by</span><Link to="/blog-details">Admin</Link></li>
                                        <li><Link to="/blog-details"> 20 Jun 2022</Link></li>
                                    </ul>
                                    <h5 className="title"><Link to="/blog-details">Convert more leads with these three new follow-up ideas</Link></h5>
                                    <p className="m-b17">We make daily use products more affordable and accessible for a billion 
                                        Indians by using our in-house technology to power one of the world’s most efficient grocery supply chains. We make daily use products more affordable and accessible for a...</p>
                                    <Link to="/blog-details" className="read-more">Read more</Link>
                                </div>
                                {
                                    dataBlog.map(item => (
                                        <div key={item.id} className="post inner-post" data-aos="fade-up" data-aos-duration="800">
                                            <div className="image">
                                                <img src={item.img} alt="crybox" />
                                                <div className="tag">{item.category}</div>
                                            </div>
                                            <div className="content-post">
                                                <ul className="meta-post">
                                                    <li><span>by</span><Link to="/blog-details">Admin</Link></li>
                                                    <li><Link to="/blog-details">{item.time}</Link></li>
                                                </ul>
                                                <div className="title h7"><Link to="/blog-details">{item.title}</Link></div>
                                                <p>{item.text}</p>
                                                <Link to="/blog-details" className="read-more">Read more</Link>
                                            </div>
                                        </div>
                                    ))
                                }
                                <div className="themesflat-pagination m-t40" data-aos="fade-in" data-aos-duration="800">
                                    <ul>
                                        <li><Link to="#">1</Link></li>
                                        <li><Link to="#" className="active">2</Link></li>
                                        <li><Link to="#">3</Link></li>
                                        <li><Link to="#">4</Link></li>
                                        <li><Link to="#">5</Link></li>
                                    </ul>
                                </div>
                            </article>

                            <Sidebar />    

                    </div>
                </div>
            </section>
        </div>

        
    );
}

export default Blog;