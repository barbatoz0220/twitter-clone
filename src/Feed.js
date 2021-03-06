import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import db from "./Firebase";
import FlipMove from "react-flip-move";

function Feed() {
    // THis part imports the post from the database
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Run whenever the feed component loads
        // This part loads the collection from the database, read every entry in the collection and their items (if exist)
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);

    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* TweetBox */}
            <TweetBox />
            <FlipMove>
            {posts.map(post => (
                <Post
                    key={post.text}
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                />
            ))}
            </FlipMove>
        </div>
    );
}

export default Feed;
