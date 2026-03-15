import { useState } from "react";

interface CommentBoxProps {
  onPost: (comment: string) => void;
}

export function CommentBox({ onPost }: CommentBoxProps) {
  const [comment, setComment] = useState("");

  const handlePost = () => {
    if (comment.trim()) {
      onPost(comment);
      setComment("");
    }
  };

  return (
    <div>
      <input
        data-testid="comment-input"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a comment..."
      />
      <button data-testid="post-button" onClick={handlePost}>
        Post
      </button>
    </div>
  );
}
