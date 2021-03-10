import React from 'react';
import "./Channel.css"

const Channel = ({avatar,name,follower}) => {
    return (
        <div className="channel">
            <div className="channel__details">
                <img src={avatar} alt=""/>
                <p>{name}</p>
            </div>
            <p>{follower}</p>
        </div>
    )
}

export default Channel
