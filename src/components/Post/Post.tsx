import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Post as PostType } from "../../types";
import "./Post.scss";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PostForm from "../PostForm/PostForm";
import { useCommunity } from "../../context/CommunityContext";
import Swal from "sweetalert2";

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [editOpen, setEditOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { deletePost } = useCommunity();

  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault();

    // Show SweetAlert confirmation dialog
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this post?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      // Call the deletePost function from context
      deletePost(post.id);
      Swal.fire("Deleted!", "Your post has been deleted.", "success");
    }
  };
  return (
    <>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "transform 0.3s ease-in-out",
          textDecoration: "none",
          position: "relative",
        }}
        component={Link}
        to={`/post/${post.id}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="post-actions"
          style={{
            position: "absolute",
            top: 8,
            right: 8,
            display: isHovered ? "flex" : "none",
            gap: "8px",
          }}
        >
          <IconButton
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.7)",
            }}
            onClick={(e) => {
              e.preventDefault();
              setEditOpen(true);
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.7)",
            }}
            onClick={handleDelete}
          >
            <DeleteIcon />
          </IconButton>
        </div>
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
          <Typography className="author-detail">
            {" "}
            <span className="author-name">{post.author.username}</span> on{" "}
            {new Date(post.createdAt).toLocaleDateString()}
          </Typography>
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
          <Typography variant="body2" className="post-description">
            <span
              className="editor-output"
              dangerouslySetInnerHTML={{
                __html: post.content.substring(0, 100) + "...",
              }}
            />
          </Typography>
        </CardContent>
      </Card>
      <PostForm
        open={editOpen}
        onClose={() => setEditOpen(false)}
        post={post}
      />
    </>
  );
};

export default Post;
