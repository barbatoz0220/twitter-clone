import React from 'react';
// import 3 components from the twitter-embed package
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
import "./Widgets.css";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's Happening</h2>

                <TwitterTweetEmbed tweetId={"1299601387823616001"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="pascalcampion"
                    options={{ height: 400}}
                />

                <TwitterShareButton
                    url="https://www.twitter.com/pascalcampion"
                    options={{text: "#pascalcampion", via:"pascalcampion"}}
                />
            </div>
        </div>
    );
}

export default Widgets;
