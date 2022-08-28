import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import dataAbout from '../assets/fake-data/data-about';
import dataProject from '../assets/fake-data/dataProject';
import PageTitle from '../components/pagetitle';
import About from '../features/about';
import Project from '../features/project/home-v3';

import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss' ;

function Community(props) {

    const [isOpen, setOpen] = useState(false)
    return (
        <div className='community'>
            <PageTitle title='Community' />

            <section className="tf-section tf-video">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="content-about mb-51 mobie-40">
                                <div className="tf-title pd22" data-aos="fade-up" data-aos-duration="800">
                                    <h3 className="title">CYbox nft collectionS  for everyone</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="video" data-aos="fade-up" data-aos-duration="800">
                                <img src={require('../assets/images/common/video.jpg')} alt="" />
                                <div className="wrap-video">
                                    <Link to="#" className="popup-youtube" onClick={()=> setOpen(true)}>
                                        <svg width="27" height="35" viewBox="0 0 27 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M27 17.0001L0 0.500061V35.0001L27 17.0001Z" fill="#14C2A3"/>
                                        </svg>
                                    </Link>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="i7EMACWuErA" onClose={() => setOpen(false)} />
            </section>

            <About data={dataAbout} />

            <Project data={dataProject} />
            
        </div>
    );
}

export default Community;