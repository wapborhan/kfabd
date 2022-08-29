import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';

import ProjectItem from '../project-item';
import '../../../scss/components/form.scss'
import Button from '../../../components/button';


Project.propTypes = {
    data: PropTypes.array,
};

function Project(props) {
    const {data} = props;

    const [visible , setVisible] = useState(16);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 4);
    }

    return (
        <section className="tf-section tf-project home-2 nft-item">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="widget widget-search" data-aos="fade-in" data-aos-duration="800">
                            <form action="#">
                                <input type="text" placeholder="Search" required="" />
                                <button><i className="fal fa-search"></i></button>
                            </form>
                        </div>
                    </div>

                    <div className="col-md-8 z-index">
                        <div className="seclect-box" data-aos="fade-in" data-aos-duration="800">
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    All Categories       
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                <Dropdown.Item href="#">
                                    <li data-toggle="modal" data-target="#delete_client">Forgotten Samurai</li>
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    <li data-toggle="modal" data-target="#edit_client">Star Batter</li>
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    <li data-toggle="modal" data-target="#edit_client">Calvary Deneral</li>
                                </Dropdown.Item>
                                
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                Default sorting   
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                <Dropdown.Item href="#">
                                    <li data-toggle="modal" data-target="#delete_client">Sort by Popularity</li>
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    <li data-toggle="modal" data-target="#edit_client">Sort by Latest</li>
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    <li data-toggle="modal" data-target="#edit_client">Sort by View</li>
                                </Dropdown.Item>
                                
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>

                    {
                        data.slice(0,visible).map(item => (
                            <div key={item.id} className="col-md-3">
                                <ProjectItem item={item} />
                            </div>
                        ))
                    }
                    {
                        visible < data.length && 
                        <div className="col-md-12">
                            <div className="btn-about center m-t16" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
                                <Button title='Load More' path='#' onClick={showMoreItems} />
                            </div>
                        </div>
                    }
                    
                </div>
            </div>
        </section>
    );
}

export default Project;