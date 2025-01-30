import React from "react";
import { Container, Typography, Paper, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useCommunity } from "../context/CommunityContext";
import CommentForm from "../components/CommentForm/CommentForm";
import Comment from "../components/Comment/Comment";
import "./PostDetail.scss";

const PostDetail: React.FC = () => {
  // Get the postId from the URL parameters
  const { postId } = useParams<{ postId: string }>();
  // Get posts and featured posts from the context
  const { posts, featurePosts } = useCommunity();
  // Find the post either in posts or featured posts
  const post =
    posts.find((p) => p.id.toString() === postId) ||
    featurePosts.find((fp) => fp.id.toString() === postId);
  // If post is not found, display an error message
  if (!post) {
    return (
      <Container sx={{ py: 15 }}>
        <Typography variant="h4" color="error" align="center" sx={{ mt: 15 }}>
          Post not found!
        </Typography>
      </Container>
    );
  }

  return (
    <>
      {/* Banner section */}
      <div className="banner">
        <div className="container">
          <div className="inner-container text-center">
            <h1>{post.title}</h1>
            <p className="banner-desc">
              By {post.author.username} on{" "}
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
      <Container className="post-detail-wrapper">
        {/* Display post image if available */}
        {post.image && (
          <Box
            sx={{
              width: "100%",
              overflow: "hidden",
              borderRadius: "50px",
              mb: 2,
            }}
          >
            <img
              src={post.image}
              alt={post.title}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </Box>
        )}
        {/* Display post content */}
        <Typography variant="body1" paragraph>
          <span
            className="editor-output"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></span>
        </Typography>
        {/* Comments section */}
        <Paper sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
          <Typography className="comments-heading">
            <span> Comments</span>
          </Typography>
          <Box>
            {post.comments.map((comment) => (
              <Comment
                key={comment.id}
                comment={comment}
                postId={post.id}
                depth={0}
              />
            ))}
          </Box>
          {/* Comment form */}
          <CommentForm postId={post.id} />
        </Paper>
      </Container>
    </>
  );
};

export default PostDetail;
