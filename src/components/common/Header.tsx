import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import PostForm from "../PostForm/PostForm";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <AppBar position="static" className="header-wrapper">
        <div className="container">
          <Toolbar>
            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
              <Box component={Link} to="/" aria-label="logo">
                <img src="/images/logo.png" alt="Logo" className="logo-main" />
              </Box>
            </Box>
            <Button
              variant="contained"
              onClick={() => setIsModalOpen(true)}
              sx={{ display: "flex", alignItems: "center", gap: "6px" }}
              aria-label="Create a new post"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                height="16"
                width="16"
                fill="#fff"
                aria-label="Plus icon"
                role="img"
              >
                <path
                  d="M480,224H288V32c0-17.673-14.327-32-32-32s-32,14.327-32,32v192H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h192v192   
    c0,17.673,14.327,32,32,32s32-14.327,32-32V288h192c17.673,0,32-14.327,32-32S497.673,224,480,224z"
                />
              </svg>
              Add Blog
            </Button>
            {isModalOpen && (
              <PostForm open={isModalOpen} onClose={handleCloseModal} />
            )}
          </Toolbar>
        </div>
      </AppBar>
    </>
  );
};

export default Navbar;
