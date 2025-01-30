import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CommunityProvider } from "./context/CommunityContext";
import CommunityPage from "./pages/CommunityPage";
import Header from "./components/common/Header";
import PostDetail from "./pages/PostDetail";

// Example additional page
const App: React.FC = () => {
  return (
    <Router>
      <CommunityProvider>
        <div style={{ backgroundColor: "#ecf0fa" }}>
          <Header />
          <Routes>
            <Route path="/" element={<CommunityPage />} />
            <Route path="/post/:postId" element={<PostDetail />} />
          </Routes>
        </div>
      </CommunityProvider>
    </Router>
  );
};

export default App;
