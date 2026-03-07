import { useState } from "react";
import { CommentBox } from "./CommentBox";

function App() {
  const [comments, setComments] = useState<string[]>([]);
  
  const handlePost = (comment:string) => {
    setComments((prev) => [...prev, comment]);
  };

  return (
    <>
      <h1>CommentBox Demo</h1>
      <CommentBox onPost={handlePost} />
      <h2>Comments:</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </>
  );
}

// ❯ bunx jest
//  PASS  src/__tests__/CommentBox.test.tsx
//   CommentBox
//     ✓ renders an input and a Post button (42 ms)
//     ✓ calls onPost with input value when clicked (19 ms)
//     ✓ clears the input after posting (10 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        3.882 s
// Ran all test suites.

export default App;
