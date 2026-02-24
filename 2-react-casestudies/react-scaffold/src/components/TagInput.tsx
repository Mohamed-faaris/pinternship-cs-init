import { useState, useCallback } from 'react';

interface TagInputProps {
  onAddTag: (tag: string) => void;
}

const TagInput = function TagInput({ onAddTag }: TagInputProps) {
  const [value, setValue] = useState('');

  const handleSubmit = useCallback(() => {
    if (value.trim()) {
      onAddTag(value);
      setValue('');
    }
  }, [value, onAddTag]);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter tag"
      />
      <button onClick={handleSubmit}>Add Tag</button>
    </div>
  );
};

export default TagInput;
