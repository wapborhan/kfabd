import React , {useState} from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
import Button from '../../components/button';
import AboutItem from './about-item';

About.propTypes = {
    data : PropTypes.array,
};

function About(props) {

    const {data} = props;

    const [dataBlock] = useState(
        {
            subtitle : 'About us',
            title: 'What is cybox?',
            desc : 'Maecenas sit pretium, cras in. In quisque sem id eget. In vel gravida ut adipiscing integer felis. Id ac non arcu facilisi proin ultrices sed. Id accumsan quam viverra ante in id integer ut. Volutpat lobortis dolor etiam dis interdum tincidunt senectus.'
        }
    )

    return (
        <section className="tf-section tf-about">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-md-12">
                        <div className="content-about mobie-40" data-aos="fade-up" data-aos-duration="800">
                            <div className="tf-title st2">
                                <p className="h8 sub-title">{dataBlock.subtitle}</p>
                                <h4 className="title">{dataBlock.title}</h4>
                            </div>
                            <p>{dataBlock.desc}</p>
                                <Button title="get Nfts" path='/' />
                        </div>
                    </div>
                    <div className="col-xl-7 col-md-12">
                        <div className="wrap-about" data-aos="fade-up" data-aos-duration="800">
                            {
                                data.map(item => (
                                    <AboutItem key={item.id} item={item} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;