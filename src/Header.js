import React from 'react';
import "./Header.css";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import StarIcon from '@material-ui/icons/Star';

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img className="header__leftLogo" src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Twitch_mit_Glitch.png" alt=""/>
                <h2>Following</h2>
                <h2>Browse</h2>
                <div className="header__verticalLine">
                </div>
                <h2>Sports</h2>
                    <h2>Music</h2>
                    <MoreHorizIcon />
            </div>
            <div className="header__center">
                <input type="text" placeholder="Search"/>
                <div className="header__centerLogoContainer">
                    <SearchIcon />
                </div>
            </div>
            <div className="header__right">
                <div className="header__rightContainer">
                    <NotificationsIcon />
                    <AllInboxIcon />
                    <ChatBubbleOutlineIcon />
                </div>
                <div className="header__rightBits">
                    <StarIcon />
                    <h4>Get Bits</h4>
                </div>
                <div className="header__avatar">
                <Avatar />
                </div>
            </div>
        </div>
    )
}

export default Header
