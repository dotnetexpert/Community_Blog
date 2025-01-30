import React from "react";
import Post from "../components/Post/Post";
import { useCommunity } from "../context/CommunityContext";
import "./CommunityPage.scss";
import FeaturePost from "../components/FeaturePost/FeaturePost";

function CommunityPage() {
  // Use the custom hook to get posts and featured posts from the context
  const { posts, featurePosts } = useCommunity();

  return (
    <div className="main-page-wrapper">
      <div className="banner">
        <div className="container">
          <div className="inner-container text-center">
            <h1>Let’s Build Something Amazing Together</h1>
            <p className="banner-desc">
              Join us to create, inspire, and make a lasting impact. Share
              ideas, build connections, and collaborate on projects. Let’s make
              something incredible—together!
            </p>
          </div>
        </div>
      </div>
      <main>
        <div className="container">
          <div className="post-main-wrapper d-flex gap48">
            {/* Latest Blog Posts section */}
            <div className="post-form-wrapper latest-post">
              <div className="section-heading">
                <h2 className="section-title">Latest Blog</h2>
              </div>
              <div className="posts-main-wrapper d-flex flex-wrap">
                {posts.map((post) => (
                  <div className="post-card" key={post.id}>
                    <Post post={post} />
                  </div>
                ))}
              </div>
            </div>
            {/* Featured Posts section */}
            <div className="featured-posts">
              <div className="section-heading">
                <h2 className="section-title">Featured Posts</h2>
              </div>

              <div className="featured-post-main-wrapper">
                {featurePosts.map((post) => (
                  <div className="post-card featured-post-card" key={post.id}>
                    <FeaturePost post={post} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CommunityPage;
