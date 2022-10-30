import React from "react";
import { Link } from "react-router-dom";
import dataBlog from "../assets/fake-data/data-blog";
import Blog from "../features/blog/home-v2";

function BlogDetails(props) {
  return (
    <div className="post-details">
      <section className="page-title">
        <div className="image">
          <img src={require("../assets/images/post/imgpost10.jpg")} alt="" />
        </div>
      </section>
      <section className="tf-section detail">
        <div className="container">
          <div className="row">
            <article
              className="article"
              data-aos="fade-in"
              data-aos-duration="800"
            >
              <div className="post p-b23">
                <div className="image">
                  <div className="tag st2">nftartwork</div>
                </div>
                <h4 className="title">
                  <Link to="#">
                    Choosing Your NFT Avatar And How You can Set It Up On Cybox
                  </Link>
                </h4>
                <ul className="meta-post">
                  <li>
                    <span>by</span>
                    <Link to="#">Admin</Link>
                  </li>
                  <li>
                    <Link to="#"> 20 Jun 2022</Link>
                  </li>
                </ul>
              </div>
              <div className="post-details">
                <p>
                  Users can now set and change avatars directly from their NFT
                  collections and experience a brand new social representation.
                  We look forward to having more users join us to experience the
                  brand new digital representation of one’s social identity,
                  discover the true meaning of the digital identity in Web 3.0
                </p>
                <p>
                  Keep on reading to learn how to set up your NFT avatar and If
                  we’ve piqued your interest in NFT avatars, virtual
                  collectibles or just NFTs in general, you can check out the
                  latest drops and collections on Binance NFT, the official NFT
                  Marketplace of Binance.
                </p>
                <div className="image">
                  <img
                    src={require("../assets/images/post/imgpost9.jpg")}
                    alt=""
                  />
                </div>
              </div>
              <div className="content-details">
                <h6>What’s The Connection Between The Metaverse</h6>
                <p>
                  Here at Binance NFT, we believe that NFT avatars will be a new
                  starting point for the user’s path to the metaverse.{" "}
                </p>
                <ul className="list">
                  <li>
                    <svg
                      width="8"
                      height="7"
                      viewBox="0 0 8 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.76 5.108V2.292L2.652 0.4H5.864L7.712 2.336V5.064L5.864 7H2.652L0.76 5.108Z"
                        fill="white"
                      />
                    </svg>
                    <span>
                      {" "}
                      On top of making its way mainstream, NFT avatars are
                      establishing themselves as the new starting point for a
                      user’s path to the metaverse.
                    </span>
                  </li>
                  <li>
                    <svg
                      width="8"
                      height="7"
                      viewBox="0 0 8 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.76 5.108V2.292L2.652 0.4H5.864L7.712 2.336V5.064L5.864 7H2.652L0.76 5.108Z"
                        fill="white"
                      />
                    </svg>
                    <span>
                      {" "}
                      Users can now set their Binance profile picture into an
                      NFT they own.
                    </span>
                  </li>
                  <li>
                    <svg
                      width="8"
                      height="7"
                      viewBox="0 0 8 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.76 5.108V2.292L2.652 0.4H5.864L7.712 2.336V5.064L5.864 7H2.652L0.76 5.108Z"
                        fill="white"
                      />
                    </svg>
                    <span>
                      {" "}
                      In this article you will learn how to obtain top NFT
                      avatars and how you can set it up on Binance NFT.
                    </span>
                  </li>
                </ul>
                <p>
                  Since each NFT avatar project is a community in and of itself,
                  using an NFT as your profile picture can help forge online
                  connections and a sense of belonging within those spaces.
                </p>
              </div>
              <div className="content-details">
                <h6>How to Set up your Avatar And Nickname</h6>
                <p className="st2">
                  Setting up your avatar and personalizing your nickname on
                  Binance is quick and easy. Users can go to binance.com under
                  Dashboard {">"} Settings {">"} My Profile {">"} Avatar and
                  Nickname. For those of you who own NFT assets, you can select
                  the NFT you want to use from your collection as your avatar to
                  personalize your profile. For users who do not own any NFT
                  avatars, check out the NFT avatar collections page to get
                  started.
                </p>
                <p>
                  Alternatively, if you’re on nft.binance.com, go to User Center
                  {">"} Settings {">"} Basic {">"} Set Avatar and Nickname, and
                  you’ll be redirected to the main site. Binance NFT Creators
                  have the option of setting their Avatars on nft.binance.com.
                  Once you set your new unique nickname, it will be standardized
                  and used across the Binance ecosystem.
                </p>
              </div>
              <div className="content-details">
                <h6>NFT Avatar Generators</h6>
                <p className="st2">
                  For those who like to DIY but don’t want to go through the
                  whole creative process, online NFT Generators offer a
                  fuss-free and easy way to quickly make a wide variety of new
                  avatars using different art styles.
                </p>
                <p>
                  You can find a range of NFT marketplaces where you can buy
                  existing NFTs or list your own NFTs for sale.
                </p>
              </div>
              <div className="content-details mb-41">
                <h6>Avatar Monkeys</h6>
                <p>
                  For those who just can’t get enough of cartoon primates and
                  aping in, Avatar Monkeys will surely hit the spot. Check out
                  this special collection of 100 unique monkey NFTs.
                </p>
              </div>
              <div className="wrap-widget">
                <div className="widget widget-tag style-2">
                  <h6 className="title-widget">Tags:</h6>
                  <ul>
                    <li>
                      <Link to="#">Analysis,</Link>
                    </li>
                    <li>
                      <Link to="#">Digital Art,</Link>
                    </li>
                    <li>
                      <Link to="#">Collectible</Link>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-social style-2">
                  <h6 className="title-widget">Share:</h6>
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="wrap-box-details">
                <div className="previous">
                  <Link className="st" to="#">
                    Previous
                  </Link>
                  <h6>
                    <Link to="#">
                      I Couldn’t Help But Splurge On These Epic Fall Finds
                    </Link>
                  </h6>
                </div>
                <div className="next">
                  <Link className="st" to="#">
                    Next
                  </Link>
                  <h6>
                    <Link to="#">
                      My Mani Photo Dump To Save To Your Nail Inspo Folder
                    </Link>
                  </h6>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Blog data={dataBlog} />
    </div>
  );
}

export default BlogDetails;
