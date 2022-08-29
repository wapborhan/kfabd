import React , {useState} from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import AccordionItem from './accordion-item';



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
        <section className="tf-section faq">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tf-title mb-58" data-aos="fade-up" data-aos-duration="800">
                            <p className="h8 sub-title">{dataBlock.subtitle}</p>
                            <h4 className="title">{dataBlock.title}</h4>
                        </div>
                    </div>
                    <div className="col-md-12">
                        
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
        </section>
    );
}

export default FAQ;