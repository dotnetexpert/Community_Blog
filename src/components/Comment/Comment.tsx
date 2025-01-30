import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Paper,
  Collapse,
} from "@mui/material";
import { ReplyRounded, CancelRounded } from "@mui/icons-material";
import { Comment as CommentType } from "../../types";
import CommentForm from "../CommentForm/CommentForm";
import "./Comment.scss";

interface CommentProps {
  comment: CommentType;
  postId: string;
  depth: number;
}
// Comment component to display individual comments and their replies
const Comment: React.FC<CommentProps> = ({ comment, postId, depth }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  // Render replies if they exist
  const renderReplies = () => {
    if (!comment.replies || comment.replies.length === 0) return null;

    return comment.replies.map((reply) => (
      <Comment
        key={reply.id}
        comment={reply}
        postId={postId}
        depth={depth + 1}
      />
    ));
  };

  return (
    <Paper
      elevation={depth > 0 ? 1 : 0}
      sx={{
        pl: depth * 2,
        pr: 2,
        py: 2,
        mb: 0,
        borderLeft: 0,
        borderColor: "divider",
        backgroundColor: "transparent",
        boxShadow: "none",
        paddingLeft: depth > 0 ? "48px" : "0",
        paddingBottom: depth > 0 ? "0" : "15px",
      }}
      className="comments-wrapper"
    >
      <Box sx={{ display: "flex", flexDirection: "column", mb: 1 }}>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Avatar
            src={comment.author.avatar}
            alt={`${comment.author.username}'s avatar`}
            sx={{ width: 50, height: 50 }}
          />
          <Box>
            <Typography variant="body2">{comment.content}</Typography>

            <Box className="d-flex gap10 justify-content-between flex-wrap">
              <Box className="blogauthor-date d-flex gap10 flex-wrap">
                <Typography
                  variant="caption"
                  sx={{ fontWeight: 600 }}
                  className="blog-author-name "
                >
                  {comment.author.username}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {new Date(comment.createdAt).toLocaleString()}
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "center" }}
                className="reply-btn"
                onClick={() => setShowReplyForm(!showReplyForm)}
              >
                <IconButton size="small" color="primary">
                  {showReplyForm ? <CancelRounded /> : <ReplyRounded />}
                  <Typography variant="caption" color="text.secondary">
                    {showReplyForm ? "Cancel" : "Reply"}
                  </Typography>
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Reply form */}
      <Collapse in={showReplyForm}>
        <Box sx={{ mt: 2 }}>
          <CommentForm
            postId={postId}
            parentCommentId={comment.id}
            onCancel={() => setShowReplyForm(false)}
          />
        </Box>
      </Collapse>
      {/* Render replies */}
      {renderReplies()}
    </Paper>
  );
};

export default Comment;
