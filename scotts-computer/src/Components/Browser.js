import React from 'react';
// import { Timeline } from 'react-twitter-widgets';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import './Browser.css';

function Browser() {
    return (
      <div className="position-absolute d-flex" >

        <TwitterTimelineEmbed 
            sourceType="url" 
            screenName="scottz_thoughtz" 
            options={{ id: "profile:scottz_thoughtz" }} 
            noScrollbar
            noHeader
        />
        </div>
    );
}

export default Browser;