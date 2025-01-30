import React, { useState } from "react";
import { Box, TextField, Button, Stack } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useCommunity } from "../../context/CommunityContext";

interface CommentFormProps {
  postId: string;
  parentCommentId?: string;
  onCancel?: () => void;
}
// CommentForm component to add a new comment or reply to an existing comment
const CommentForm: React.FC<CommentFormProps> = ({
  postId,
  parentCommentId,
  onCancel,
}) => {
  const [content, setContent] = useState("");
  const { addComment } = useCommunity();
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (content.trim()) {
      addComment(postId, content, parentCommentId);
      // Reset form
      setContent("");
      // Call onCancel if provided (to close the form)
      if (onCancel) {
        onCancel();
      }
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ width: "100%" }}
      className="comment-textarea"
    >
      <TextField
        fullWidth
        multiline
        rows={3}
        variant="outlined"
        placeholder={
          parentCommentId ? "Write a reply..." : "Write a comment..."
        }
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        sx={{ mb: 2 }}
      />
      <Stack direction="row" spacing={2} justifyContent="flex-end">
        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<Send />}
        >
          {parentCommentId ? "Reply" : "Comment"}
        </Button>
      </Stack>
    </Box>
  );
};

export default CommentForm;
