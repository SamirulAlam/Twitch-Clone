import React from 'react';
import "./Profile.css";
import FavoriteIcon from '@material-ui/icons/Favorite';
import NotificationsIcon from '@material-ui/icons/Notifications';
import StarIcon from '@material-ui/icons/Star';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import RecentItem from './RecentItem';
const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__topLeft">
                <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/e25e61c0-f507-4f02-aa7c-fc457c4c7f2a-profile_image-70x70.png" alt=""/>
                <div className="profile__topLeftDetails">
                    <h1>Mlh</h1>
                    <h3>12k followers</h3>
                </div>
            </div>
            <div className="profile__topRight">
                <FavoriteIcon className="graybg" />
                <NotificationsIcon className="graybg" />
                <StarIcon />
            </div>
            <div className="profile__menu">
                <h2 className="active">Home</h2>
                <h2>About</h2>
                <h2>Schedule</h2>
                <h2>Videos</h2>
                <ArrowDropUpIcon fontSize="large" />
                <h2>Chat</h2>
            </div>
            <div className="profile__recent">
                <h2>Recent broadcasts</h2>
                <div className="profile__recentItems">
                    <RecentItem
                        url="https://www.youtube.com/embed/hv0rNxr1XXk"
                        title="hackmerced"
                    />
                    <RecentItem
                        url="https://www.youtube.com/embed/hv0rNxr1XXk"
                        title="hackmerced"
                    />
                    <RecentItem
                        url="https://www.youtube.com/embed/hv0rNxr1XXk"
                        title="hackmerced"
                    />
                    <RecentItem
                        url="https://www.youtube.com/embed/hv0rNxr1XXk"
                        title="hackmerced"
                    />
                </div>
                <div className="profile__categories">
                    <h2>Samir's recently streamed category</h2>
                    <img src="https://panels-images.twitch.tv/panel-31239503-image-cc55b93d-e955-45d4-baa9-637da2a9f281" alt=""/>
                    <h3>Science & Technologies</h3>
                </div>
            </div>
        </div>
    )
}

export default Profile
