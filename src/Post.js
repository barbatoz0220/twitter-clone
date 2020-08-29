import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ displayName, username, verified, text, image, avatar }) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://cdn.24h.com.vn/upload/3-2019/images/2019-09-02/1567431753-628-mat-hoc-sinh---body-phu-huynh-60509124_454884445265423_713666839531126382_n-1562659399-width1080height1080.jpg"></Avatar>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Nguyễn Ngọc Quỳnh{" "}
                            <span className="post__headerSpecial">
                                <VerifiedUserIcon className="post__badge" /> @wyntracyy
              </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Kiss me hard before you go</p>
                    </div>
                </div>
                <img
                    src="https://1.bp.blogspot.com/-vCJPXsIWt9o/W15g5oELIeI/AAAAAAAAYPw/37J9i3jUuNYY1xjA1gePyaXIZxw9K-3UgCLcBGAs/s1600/wyntracyy_36501904_412969742528405_4970654458699579392_n.jpg" width="360"
                    alt=""
                />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    );
}

export default Post;
