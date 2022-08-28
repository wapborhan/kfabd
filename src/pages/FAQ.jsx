import React from 'react';
import PageTitle from '../components/pagetitle';
import dataFaq from '../assets/fake-data/data-faq';
import AccordionItem from '../features/faq/accordion-item';



function FAQ(props) {
    return (
        <div>
            <PageTitle title='Asked Questions' />

            <section className="tf-section faq bg-st2">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-md-12">
                        <div className="flat-accordion" data-aos="fade-up" data-aos-duration="800">
                            {
                                dataFaq.slice(0,5).map(item => (
                                    <AccordionItem key={item.id} item={item} />
                                ))
                            }

                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="flat-accordion" data-aos="fade-up" data-aos-duration="800">
                            {
                                dataFaq.slice(1,6).map(item => (
                                    <AccordionItem key={item.id} item={item} />
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}

export default FAQ;