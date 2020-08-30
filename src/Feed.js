import React from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import Widgets from "./Widgets";
import "./Feed.css";

function Feed() {
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* TweetBox */}
            <TweetBox />

            {/* Post */}
            <Post
                displayName="WLOP"
                username="wlopwangling"
                verified={true}
                text="WIP for August 30"
                avatar={
                    "https://wallpapercave.com/wp/wp2493743.jpg"
                }
                image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6f131d22-7974-4793-9db3-2160376b5c72/ddhj93p-b509cb78-4751-43f3-8d88-a97d25cdb8de.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNmYxMzFkMjItNzk3NC00NzkzLTlkYjMtMjE2MDM3NmI1YzcyXC9kZGhqOTNwLWI1MDljYjc4LTQ3NTEtNDNmMy04ZDg4LWE5N2QyNWNkYjhkZS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.tW_6Z7w1m5cd0QbJONLfyQ0juDiZIWMhU6EDWdBKyww"
            />
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Feed;
