import React from 'react'
import "./Stream.css"
import NotificationsIcon from '@material-ui/icons/Notifications';

const Stream = () => {
    return (
        <div className="stream">
            <div className="stream__container">
                <div className="stream__status">
                    <div className="stream__statusContainer">
                        <div className="stream__statusContainerTop">
                            <div className="stream__statusIndicator">
                                ONLINE
                            </div>
                            <h2>Check out the below stream</h2>
                            <div className="stream__statusInfo">
                            <NotificationsIcon />
                            <p>You will notify when I am live</p>
                        </div>
                        </div>
                        
                    </div>
                </div>
                <div className="stream__videoEmbed">
                <iframe 
                    width="400" 
                    height="200" 
                    src="https://www.youtube.com/embed/TUnZIMyAaTM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Stream
