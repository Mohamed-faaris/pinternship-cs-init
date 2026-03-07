import { useState, useCallback, memo } from "react";

interface Tag {
  name: string;
  type: "info" | "success" | "warning" | "error";
}

const generateTags = (): Tag => {
  const types = ["info", "success", "warning", "error"] as const;
  const randomType = types[Math.floor(Math.random() * types.length)];
  return {
    name: `Tag ${Math.floor(Math.random() * 10000)}`,
    type: randomType,
  };
};

const tagList: Tag[] = Array(10).fill(null).map(generateTags);

interface TagInputProps {
  onAddTag: (tagName: string) => void;
}

const TagInput = memo(function TagInput({ onAddTag }: TagInputProps) {
  const [inputValue, setInputValue] = useState("");
  console.log("[RENDER] TagInput rendered");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTag(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter tag name"
      />
      <button type="submit">Add Tag</button>
    </form>
  );
});

interface TagListProps {
  tags: Tag[];
}

const TagList = memo(function TagList({ tags }: TagListProps) {
  console.log("[RENDER] TagList rendered");

  return (
    <ul>
      {tags.map((tag, index) => (
        <li key={index}>{tag.name}</li>
      ))}
    </ul>
  );
});

function App() {
  const [tags, setTags] = useState<Tag[]>(tagList);
  const [unrelatedState, setUnrelatedState] = useState(0);

  console.log("[RENDER] App rendered");

  const handleAddTag = useCallback((tagName: string) => {
    const types = ["info", "success", "warning", "error"] as const;
    const randomType = types[Math.floor(Math.random() * types.length)];
    const newTag: Tag = {
      name: tagName,
      type: randomType,
    };
    setTags((prev) => [...prev, newTag]);
  }, []);

  return (
    <div>
      <h1>React.memo + useCallback Demo</h1>

      <div>
        <p>
          <strong>Unrelated State:</strong> {unrelatedState}
        </p>
        <button onClick={() => setUnrelatedState((prev) => prev + 1)}>
          Update Unrelated State
        </button>
        <p>
          Clicking this button updates parent state but does NOT re-render
          TagInput or TagList
        </p>
      </div>

      <h3>Add New Tag</h3>
      <TagInput onAddTag={handleAddTag} />

      <h3>Tag List ({tags.length} tags)</h3>
      <TagList tags={tags} />

      <div>
        <h4>Check the console to see render logs:</h4>
        <ul>
          <li>
            Clicking "Update Unrelated State" only logs:
            <code>[RENDER] App rendered</code>
          </li>
          <li>
            Adding a tag logs: <code>[RENDER] App rendered</code>,
            <code>[RENDER] TagList rendered</code>
          </li>
          <li>TagInput only re-renders when typing (internal state change)</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
