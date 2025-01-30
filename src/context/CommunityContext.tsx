import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { Post, Comment } from "../types";
import { generateMockPosts } from "../utlis/mockData";
import { generateMockFeaturesPosts } from "../utlis/mockData";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
// Define the shape of the context
interface CommunityContextType {
  posts: Post[];
  featurePosts: Post[];
  addPost: (title: string, content: string, image: string) => string;
  updatePost: (
    postId: string,
    title: string,
    content: string,
    image: string
  ) => string;
  deletePost: (postId: string) => string;
  addComment: (
    postId: string,
    content: string,
    parentCommentId?: string
  ) => void;
}

// Create the context with an undefined default value
const CommunityContext = createContext<CommunityContextType | undefined>(
  undefined
);
// CommunityProvider component to provide the context to its children
export const CommunityProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // State for posts, initialized from localStorage or mock data
  const [posts, setPosts] = useState<Post[]>(() => {
    const storedPosts = localStorage.getItem("communityPosts");
    return storedPosts ? JSON.parse(storedPosts) : generateMockPosts();
  });
  // State for featured posts, initialized from localStorage or mock data
  const [featurePosts, setFeaturePosts] = useState<Post[]>(() => {
    const storedFeaturePost = localStorage.getItem("featurePosts");
    return storedFeaturePost
      ? JSON.parse(storedFeaturePost)
      : generateMockFeaturesPosts();
  });
  // Effect to update localStorage when posts change
  useEffect(() => {
    localStorage.setItem("communityPosts", JSON.stringify(posts));
  }, [posts]);
  // Effect to update localStorage when featured posts change
  useEffect(() => {
    localStorage.setItem("featurePosts", JSON.stringify(featurePosts));
  }, [featurePosts]);

  // **Add a new post**
  const addPost = (title: string, content: string, image: string): string => {
    const newPost: Post = {
      id: uuidv4(),
      title,
      content,
      image,
      author: {
        id: uuidv4(),
        username: "CurrentUser",
        avatar: "/images/currentuseravatar.svg",
      },
      createdAt: new Date().toISOString(),
      comments: [],
    };
    setPosts((prevPosts) => [newPost, ...prevPosts]);
    return "Post created successfully!";
  };

  // **Update an existing post**
  const updatePost = (
    postId: string,
    title: string,
    content: string,
    image: string
  ): string => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, title, content, image } : post
      )
    );
    return "Post updated successfully!";
  };

  // **Delete a post**
  const deletePost = (postId: string): string => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    return "Post deleted successfully!";
  };

  // **Add a comment to a post**
  const addComment = (
    postId: string,
    content: string,
    parentCommentId?: string
  ) => {
    const newComment: Comment = {
      id: uuidv4(),
      content,
      author: {
        id: uuidv4(),
        username: "CurrentUser",
        avatar: "/images/currentuseravatar.svg",
      },
      createdAt: new Date().toISOString(),
      parentId: parentCommentId,
    };

    setPosts((prevPosts) => {
      const updatedPosts = prevPosts.map((post) => {
        if (post.id === postId) {
          if (!parentCommentId) {
            return { ...post, comments: [newComment, ...post.comments] };
          }

          const updateCommentReplies = (comments: Comment[]): Comment[] =>
            comments.map((comment) => {
              if (comment.id === parentCommentId) {
                return {
                  ...comment,
                  replies: [newComment, ...(comment.replies || [])],
                };
              }
              if (comment.replies) {
                return {
                  ...comment,
                  replies: updateCommentReplies(comment.replies),
                };
              }
              return comment;
            });

          return { ...post, comments: updateCommentReplies(post.comments) };
        }
        return post;
      });
      return updatedPosts;
    });
  };

  return (
    <CommunityContext.Provider
      value={{
        posts,
        featurePosts,
        addPost,
        updatePost,
        deletePost,
        addComment,
      }}
    >
      {children}
    </CommunityContext.Provider>
  );
};
// Custom hook to use the CommunityContext
export const useCommunity = () => {
  const context = useContext(CommunityContext);
  // Ensure the hook is used within a CommunityProvider
  if (context === undefined) {
    throw new Error("useCommunity must be used within a CommunityProvider");
  }
  return context;
};
