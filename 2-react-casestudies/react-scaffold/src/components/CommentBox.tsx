import { useState } from 'react';

interface CommentBoxProps {
  onPost: (comment: string) => void;
}

function CommentBox({ onPost }: CommentBoxProps) {
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    if (value.trim()) {
      onPost(value);
      setValue('');
    }
  };

  return (
    <div>
      <input
        data-testid="comment-input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter a comment"
      />
      <button data-testid="post-button" onClick={handleSubmit}>
        Post
      </button>
    </div>
  );
}

export default CommentBox;
