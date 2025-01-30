import React, { useEffect, useState } from "react";
import { useCommunity } from "../../context/CommunityContext";
import RichTextEditor from "../../utlis/RichTextEditor";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import "./PostForm.scss";
import { Post as PostType } from "../../types";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// Define the props for the PostForm component
interface PostFormProps {
  open: boolean;
  onClose: () => void;
  post?: PostType | null;
}
// PostForm component
const PostForm: React.FC<PostFormProps> = ({ open, onClose, post }) => {
  const navigate = useNavigate();

  // State variables for form fields and errors
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string>("");
  const { addPost, updatePost } = useCommunity();
  const [errors, setErrors] = useState({
    title: false,
    content: false,
    image: false,
  });

  // Validate form fields
  const validateFields = () => {
    const newErrors = {
      title: title.trim() === "",
      content: content.trim() === "",
      image: image === "",
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
      setImage(post.image);
    } else {
      setTitle("");
      setContent("");
      setImage("");
    }
  }, [post, open]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    debugger;
    e.preventDefault();
    if (!validateFields()) return;
    let message = ""; // Declare a string variable
    try {
      if (post) {
        message = await updatePost(post.id, title, content, image);
        // Show success SweetAlert for editing
        Swal.fire({
          icon: "success",
          title: "Post updated successfully!",
          text: message,
          timer: 3000,
          showConfirmButton: false,
        });
      } else {
        message = await addPost(title, content, image);
        // Show success SweetAlert for adding
        Swal.fire({
          icon: "success",
          title: "Post added successfully!",
          text: message,
          timer: 3000,
          showConfirmButton: false,
        });
      }

      navigate("/"); // Navigate after showing the alert
    } catch (error) {
      // Show error SweetAlert in case of any issue
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again later.",
        showConfirmButton: true,
      });
    } finally {
      onClose(); // Close the form/modal after submitting
    }
  };
  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">
              {post ? "Edit Post" : "Create Post"}
            </Typography>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>

        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Title"
              size="small"
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
              error={errors.title}
              helperText={errors.title ? "Title is required" : ""}
            />
            <RichTextEditor value={content} onChange={setContent} />
            {errors.content && (
              <Typography color="error">Content is required</Typography>
            )}
            <Box mt={2}>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;

                  const reader = new FileReader();
                  reader.onload = () => setImage(reader.result as string);
                  reader.readAsDataURL(file);
                }}
                id="image-upload"
                hidden
              />
              <label htmlFor="image-upload" className="image-upload">
                <Button
                  variant="outlined"
                  component="span"
                  startIcon={<AddPhotoAlternateIcon />}
                >
                  Upload Image
                </Button>
              </label>
              {errors.image && (
                <Typography color="error">Image is required</Typography>
              )}
            </Box>

            {image && (
              <Box
                mt={2}
                position="relative"
                width="fit-content"
                className="image-preview"
              >
                <img
                  src={image}
                  alt="Preview"
                  style={{ maxWidth: "100%", borderRadius: "4px" }}
                />
                <IconButton
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                  }}
                  onClick={() => setImage("")}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
            )}
          </form>
        </DialogContent>

        <DialogActions className="footer-bottom">
          <Button onClick={onClose} className="cancel-btn" variant="outlined">
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            size="medium"
          >
            {post ? "Update Post" : "Create Post"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PostForm;
