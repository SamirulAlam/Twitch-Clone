import React from 'react';
import Channel from './Channel';
import "./Sidebar.css";
import SearchIcon from '@material-ui/icons/Search';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h5>FOLLOWED CHANNELS</h5>
                <Channel 
                    avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/2969961b-e1c2-4547-8537-0fed3541164a-profile_image-70x70.png"
                    name="Sonny Sangha"
                    follower="852"
                />
                <Channel 
                    avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/2969961b-e1c2-4547-8537-0fed3541164a-profile_image-70x70.png"
                    name="Sonny Sangha"
                    follower="852"
                />
                <h5>RECOMMENDED CHANNEL</h5>
                <Channel 
                    avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/2969961b-e1c2-4547-8537-0fed3541164a-profile_image-70x70.png"
                    name="Sonny Sangha"
                    follower="852"
                />
                <p className="sidebar__topShowMore">Show more</p>
            </div>
            <div className="sidebar__bottom">
                <div className="sidebar__bottomContainer">
                    <SearchIcon />
                    <input type="text" placeholder="Search to add friend"/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
