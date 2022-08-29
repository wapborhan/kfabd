import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.scss';

TeamItem.propTypes = {
  item: PropTypes.object,  
};

function TeamItem(props) {
    const {item} = props;
    return (
        <div className="team-box">
            <div className="image">
                <img src={item.img} alt="Crybox" />
            </div>
            <div className="content">
                <div className="h8"><a href="/team-details">{item.name}</a></div>
                <p>{item.position}</p>
                <ul className="social">
                    {
                        item.listsocial.map(icon => (
                            <li key={icon.id}>
                                <Link to={icon.link}><i className={icon.icon}></i></Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default TeamItem;