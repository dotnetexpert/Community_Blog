import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Post as PostType } from "../../types";
import "./FeaturePost.scss";

interface PostProps {
  post: PostType;
}

const FeaturePost: React.FC<PostProps> = ({ post }) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        marginBottom: "10px",
        flexDirection: "column",
        transition: "transform 0.3s ease-in-out",
        textDecoration: "none",
        background: "transparent",
        boxShadow: "none",
      }}
      component={Link}
      to={`/post/${post.id}`}
    >
      {post.image && (
        <CardMedia
          component="img"
          height="225"
          image={post.image}
          alt={post.title}
          sx={{
            borderRadius: "15px",
          }}
        />
      )}

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          className="post-title"
          variant="h6"
          color="text.primary"
          sx={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          {post.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeaturePost;
