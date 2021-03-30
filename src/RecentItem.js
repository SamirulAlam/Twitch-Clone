import React from 'react';
import "./RecentItem.css"

const RecentItem = ({url,title}) => {
    return (
        <div className="recentItem">
            <iframe 
                width="250"
                height="200"
                src={url} 
                frameborder="0"
                allowFullScreen
                ></iframe>
            <div className="item__details">
                <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/e25e61c0-f507-4f02-aa7c-fc457c4c7f2a-profile_image-70x70.png" alt=""/>
                <div className="item__detailsText">
                    <h4>{title}</h4>
                    <p>MERN Bros</p>
                    <p>Science & Technologies</p>
                </div>
            </div>
        </div>
    )
}

export default RecentItem
