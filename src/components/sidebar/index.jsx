import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import img1 from "../../assets/images/post/imgpost6.jpg";
import img2 from "../../assets/images/post/imgpost7.jpg";
import img3 from "../../assets/images/post/imgpost8.jpg";

function Sidebar(props) {
  console.log(props);

  const [dataCategory] = useState([
    {
      id: 1,
      title: "Latest",
      count: "22",
      link: "#",
    },
    {
      id: 2,
      title: "Analysis",
      count: "45",
      link: "#",
    },
    {
      id: 3,
      title: "Digital Art",
      count: "13",
      link: "#",
    },
    {
      id: 4,
      title: "Collectible",
      count: "12",
      link: "#",
    },
    {
      id: 5,
      title: "Corporate",
      count: "32",
      link: "#",
    },
    {
      id: 6,
      title: "Game",
      count: "05",
      link: "#",
    },
    {
      id: 7,
      title: "Metaverse",
      count: "16",
      link: "#",
    },
  ]);

  const [dataRecent] = useState([
    {
      id: 1,
      img: img1,
      title: "enior Apple employee alleges sexism at",
      author: "Admin",
      time: "20 Jun 2022",
    },
    {
      id: 2,
      img: img2,
      title: "enior Apple employee alleges sexism at",
      author: "Admin",
      time: "20 Jun 2022",
    },
    {
      id: 3,
      img: img3,
      title: "enior Apple employee alleges sexism at",
      author: "Admin",
      time: "20 Jun 2022",
    },
  ]);

  const [dataArchies] = useState([
    {
      id: 1,
      title: "October",
      count: "22",
      link: "#",
    },
    {
      id: 2,
      title: "September",
      count: "11",
      link: "#",
    },
    {
      id: 3,
      title: "August",
      count: "14",
      link: "#",
    },
    {
      id: 4,
      title: "July",
      count: "27",
      link: "#",
    },
    {
      id: 5,
      title: "June",
      count: "31",
      link: "#",
    },
    {
      id: 6,
      title: "May",
      count: "21",
      link: "#",
    },
    {
      id: 7,
      title: "April",
      count: "27",
      link: "#",
    },
  ]);

  const [dataTag] = useState([
    {
      id: 1,
      name: "nftartwork",
      link: "#",
    },
    {
      id: 2,
      name: "rarible",
      link: "#",
    },
    {
      id: 3,
      name: "metaverse",
      link: "#",
    },
    {
      id: 4,
      name: "btc",
      link: "#",
    },
    {
      id: 5,
      name: "nftsstories",
      link: "#",
    },
    {
      id: 6,
      name: "digitalartist",
      link: "#",
    },
    {
      id: 7,
      name: "animation",
      link: "#",
    },
    {
      id: 8,
      name: "cryptocurrencies",
      link: "#",
    },
  ]);
  return (
    <div
      id="sidebar"
      className="toggle"
      data-aos="fade-left"
      data-aos-delay="300"
      data-aos-duration="1000"
    >
      <div className="widget widget-search">
        <form action="#">
          <input type="text" placeholder="Search" required="" />
          <button>
            <i className="fal fa-search"></i>
          </button>
        </form>
      </div>
      <div className="widget widget-category">
        <div className="h7 widget-title">Categories</div>
        <div className="content-widget">
          <ul>
            {dataCategory.map((item) => (
              <li key={item.id}>
                <Link to={item.link}>
                  <span>{item.title}</span>
                  <span className="number">({item.count})</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="widget widget-recent-posts">
        <div className="h7 widget-title">Recent Posts</div>
        <div className="content-widget">
          {dataRecent.map((item) => (
            <ul key={item.id} className="recent-posts">
              <li>
                <img src={item.img} alt="crybox" />
                <ul className="content">
                  <li className="h8">
                    <Link to="/blog-details">{item.title}</Link>
                  </li>
                  <li>
                    <ul className="meta-post">
                      <li className="firt">
                        <span>by</span>
                        <Link to="/blog-details">{item.author}</Link>
                      </li>
                      <li>
                        <Link to="/blog-details">{item.time}</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div className="widget widget-category st2">
        <div className="h8 widget-title st">Archives</div>
        <div className="content-widget">
          <ul>
            {dataArchies.map((item) => (
              <li key={item.id}>
                <Link to={item.link}>
                  <span>{item.title}</span>
                  <span className="number">({item.count})</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="widget widget-Tags">
        <div className="h8 st widget-title">Popular Tags</div>
        <div className="content-widget">
          <ul>
            {dataTag.map((item) => (
              <li key={item.id}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
