import React from 'react';
import PageTitle from '../components/pagetitle';
import img from '../assets/images/common/img15.jpg';
import { Link } from 'react-router-dom';
import Project from '../features/project/nftdetails';
import dataProject from '../assets/fake-data/dataProject';

function NftItemDetails(props) {
    return (
        <div className='page-item-details'>
            <PageTitle title='ITEM Details' />

            <section className="tf-section tf-item-details pb-mobie">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="image-details" data-aos="fade-right" data-aos-duration="800">
                                <img src={img} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="item-details" data-aos="fade-left" data-aos-duration="800">
                                <h5>Samuel Olukoju</h5>
                                <p className="sub">Cybox #01</p>
                                <div className="action">
                                    <div className="left-box">
                                        <Link to="#" className="view">
                                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 0.423828C3.70727 0.423828 1.62811 1.6782 0.0938938 3.71563C-0.031298 3.88256 -0.031298 4.11576 0.0938938 4.28268C1.62811 6.32257 3.70727 7.57694 6 7.57694C8.29273 7.57694 10.3719 6.32257 11.9061 4.28513C12.0313 4.11821 12.0313 3.88501 11.9061 3.71809C10.3719 1.6782 8.29273 0.423828 6 0.423828ZM6.16447 6.51895C4.64253 6.61468 3.3857 5.36031 3.48144 3.83592C3.55999 2.57909 4.57871 1.56037 5.83553 1.48182C7.35747 1.38609 8.6143 2.64046 8.51857 4.16485C8.43756 5.41922 7.41884 6.43794 6.16447 6.51895ZM6.08837 5.3554C5.26849 5.40695 4.59098 4.7319 4.64498 3.91201C4.68671 3.23451 5.23658 2.6871 5.91409 2.64291C6.73397 2.59136 7.41148 3.26642 7.35747 4.0863C7.31329 4.76626 6.76343 5.31367 6.08837 5.3554Z" fill="white"/>
                                            </svg>
                                            225
                                        </Link>
                                        <Link to="#" className="heart">
                                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.7145 1.64672C12.9744 -0.092941 10.1436 -0.092941 8.40393 1.64672L7.99986 2.05055L7.59603 1.64672C5.85637 -0.0931765 3.02531 -0.0931765 1.28565 1.64672C-0.418689 3.35105 -0.429756 6.05261 1.25998 7.93096C2.80114 9.64354 7.34643 13.3435 7.53928 13.5001C7.6702 13.6065 7.82773 13.6583 7.98432 13.6583C7.9895 13.6583 7.99468 13.6583 7.99963 13.6581C8.16163 13.6656 8.32481 13.61 8.45997 13.5001C8.65282 13.3435 13.1986 9.64354 14.7402 7.93072C16.4297 6.05261 16.4186 3.35105 14.7145 1.64672ZM13.69 6.98578C12.4884 8.32066 9.18546 11.0738 7.99963 12.0508C6.8138 11.074 3.51155 8.32113 2.31018 6.98602C1.13142 5.67586 1.12035 3.80999 2.28452 2.64582C2.87908 2.05149 3.6599 1.75409 4.44072 1.75409C5.22154 1.75409 6.00236 2.05126 6.59693 2.64582L7.48512 3.53401C7.59085 3.63974 7.72412 3.70285 7.86399 3.72498C8.09099 3.77372 8.33729 3.71038 8.51389 3.53425L9.40256 2.64582C10.5919 1.45693 12.5266 1.45716 13.7152 2.64582C14.8794 3.80999 14.8683 5.67586 13.69 6.98578Z" fill="white"/>
                                                </svg>
                                            100
                                        </Link>
                                    </div>
                                    <div className="right-box">
                                        <Link to="#" className="share">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.3241 0.675199C14.7473 0.0984059 13.9309 -0.127994 13.1391 0.0705603L2.38028 2.76004C0.946096 3.11858 -0.0105779 4.35261 8.82884e-05 5.83111C0.0107545 7.3096 0.983839 8.52957 2.42295 8.86842L6.23487 9.76522L7.13166 13.5771C7.47052 15.0162 8.69054 15.9893 10.169 16C10.1772 16 10.1846 16 10.1928 16C11.6606 16 12.8832 15.0458 13.2401 13.6198L15.9296 2.86099C16.1273 2.06842 15.9009 1.25199 15.3241 0.675199ZM14.735 2.56063L12.0455 13.3195C11.7756 14.396 10.8673 14.7562 10.1772 14.7685C9.48394 14.7636 8.58387 14.3747 8.32952 13.2941L7.42372 9.44602L10.896 5.97383C11.1364 5.73343 11.1364 5.34368 10.896 5.10328C10.6556 4.86288 10.2659 4.86288 10.0255 5.10328L6.55322 8.57557L2.70519 7.66976C1.62462 7.41542 1.23572 6.51529 1.2308 5.82199C1.22588 5.12787 1.60247 4.22291 2.67975 3.95379L13.4378 1.26431C13.5256 1.24216 13.6142 1.23146 13.7012 1.23146C13.9801 1.23146 14.2493 1.34147 14.4536 1.54495C14.7219 1.81325 14.8269 2.19306 14.735 2.56063Z" fill="white"/>
                                                </svg>
                                        </Link>
                                        <Link to="#" className="option">
                                            <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="2" cy="2" r="2" fill="white"/>
                                                <circle cx="8" cy="2" r="2" fill="white"/>
                                                <circle cx="14" cy="2" r="2" fill="white"/>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <p className="desc">Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget. 
                                    Facilisi lobortis morbi fringilla urna amet sed ipsum vitae ipsum malesuada. 
                                    Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget. 
                                    Facilisi lobortisal morbi fringilla urna amet sed ipsum</p>
                                <Link to="#" className="tf-button btn-effect">
                                    <span className="boder-fade"></span>          
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.8771 4.39102H13.0567C15.4181 4.39102 17.3346 6.26602 17.3346 8.56602V13.166C17.3346 15.466 15.4181 17.3327 13.0567 17.3327H4.94586C2.58446 17.3327 0.667969 15.466 0.667969 13.166V8.56602C0.667969 6.26602 2.58446 4.39102 4.94586 4.39102H5.12553C5.14264 3.39102 5.54477 2.45768 6.27201 1.75768C7.00781 1.04935 7.94894 0.691016 9.00986 0.666016C11.1317 0.666016 12.8514 2.33268 12.8771 4.39102ZM7.17038 2.64935C6.69125 3.11602 6.42602 3.73268 6.40891 4.39102H11.5937C11.5681 3.02435 10.4216 1.91602 9.00987 1.91602C8.35108 1.91602 7.66661 2.17435 7.17038 2.64935ZM12.2525 7.59935C12.6118 7.59935 12.8942 7.31601 12.8942 6.97435V6.00768C12.8942 5.66601 12.6118 5.38268 12.2525 5.38268C11.9017 5.38268 11.6108 5.66601 11.6108 6.00768V6.97435C11.6108 7.31601 11.9017 7.59935 12.2525 7.59935ZM6.31476 6.97435C6.31476 7.31601 6.03242 7.59935 5.67308 7.59935C5.32229 7.59935 5.0314 7.31601 5.0314 6.97435V6.00768C5.0314 5.66602 5.32229 5.38268 5.67308 5.38268C6.03242 5.38268 6.31476 5.66602 6.31476 6.00768V6.97435Z" fill="white"/>
                                    </svg>
                                    <span className="effect">Buy On Opensea</span>
                                </Link>  
                                <div className="list-product">
                                    <div className="box corner-box">
                                        <p>Clothing</p>
                                        <h6 className="h7">Blank</h6>
                                    </div>
                                    <div className="box corner-box">
                                        <p>Headwear</p>
                                        <h6 className="h7">Black Cap</h6>
                                    </div>
                                    <div className="box corner-box">
                                        <p>Eyewear</p>
                                        <h6 className="h7">Blank</h6>
                                    </div>
                                    <div className="box corner-box">
                                        <p>Face</p>
                                        <h6 className="h7">One Eye</h6>
                                    </div>
                                    <div className="box corner-box">
                                        <p>Food</p>
                                        <h6 className="h7">Potato Chip</h6>
                                    </div>
                                    <div className="box corner-box">
                                        <p>Background</p>
                                        <h6 className="h7">Galaxy</h6>
                                    </div>
                                </div>         
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Project data={dataProject} />
        </div>
    );
}

export default NftItemDetails;