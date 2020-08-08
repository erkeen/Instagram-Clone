import React from "react";
import "./Post.css";
import { Row, Image } from "react-bootstrap";
import { Avatar } from "@material-ui/core";
function Post() {
  return (
    <Row className="post">
      <Row className="post__header align-items-center p-2">
        <Avatar
          className="post__avatar mr-1"
          src="https://yt3.ggpht.com/a-/AOh14GgNCD8mAkz1hpdKGt05go-WBWIoTJd59GE6zADV=s88-c-k-c0xffffffff-no-rj-mo"
          alt="Erkin Sheraliev"
        />
        <h3>Username</h3>
      </Row>

      <Image
        className="post__image"
        src="https://s3.envato.com/files/285719512/18_preview.png"
      />
      <h4 className="post__text p-2">
        <strong>3rkeen</strong> This is test post
      </h4>
    </Row>
  );
}

export default Post;
