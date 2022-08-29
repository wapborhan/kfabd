import React from 'react';
import PropTypes from 'prop-types';

AboutItem.propTypes = {
    item: PropTypes.object,
};

function AboutItem(props) {

    const {item} = props;

    return (
        <div key={item.id} className={`box-text corner-box ${item.class}`}>
            <div className="h7">{item.title}</div>
            <p>{item.desc}</p>
        </div>
    );
}

export default AboutItem;