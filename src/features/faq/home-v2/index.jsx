import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles.scss';
import AccordionItem from '../accordion-item';


FAQ.propTypes = {
    data: PropTypes.array,
};

function FAQ(props) {

    const {data} = props;

    const [dataBlock] = useState({
        subtitle: 'FAQs',
        title: 'Looking for answers?'
    })

    return (
        <section className="tf-section faq bg-st2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="wrap-fx">
                            <div className="image-faq" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200">
                                <img src={require ('../../../assets/images/common/imgfaq.jpg')} alt="" />
                            </div>

                            <div className="content-faq">
                            <div className="tf-title st2 m-b50" data-aos="fade-up" data-aos-duration="800">
                                <p className="h8 sub-title">{dataBlock.subtitle}</p>
                                <h4 className="title">{dataBlock.title}</h4>
                            </div>
                            
                            <div className="flat-accordion" data-aos="fade-up" data-aos-duration="800">

                                {
                                    data.slice(0,4).map(item => (
                                        <AccordionItem key={item.id} item={item} />
                                    ))
                                }
                                
                            </div>
                        </div>
                        </div>
                        
                    </div>
                
                </div>
            </div>
        </section>
    );
}

export default FAQ;