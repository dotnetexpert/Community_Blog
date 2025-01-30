import React from "react";
import { Comment as CommentType } from "../../types/index";
import Comment from "../Comment/Comment";
import "./NestedComments.scss";

interface NestedCommentsProps {
  comments: CommentType[];
  postId: string;
  depth?: number;
}
// NestedComments component to render comments and their replies
const NestedComments: React.FC<NestedCommentsProps> = ({
  comments,
  postId,
  depth = 0,
}) => {
  return (
    <div className="nested-comments">
      {comments.map((comment) => (
        <div key={comment.id}>
          {/* Render individual comment */}
          <Comment comment={comment} postId={postId} depth={depth} />
          {/* Render replies recursively if they exist */}
          {comment.replies && (
            <NestedComments
              comments={comment.replies}
              postId={postId}
              depth={depth + 1}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default NestedComments;
