import { useMemo } from 'react';

interface Tag {
  id: string;
  label: string;
}

interface TagListProps {
  tags: Tag[];
  filter: string;
}

const TagList = function TagList({ tags, filter }: TagListProps) {
  const filteredTags = useMemo(() => {
    return tags.filter((tag) =>
      tag.label.toLowerCase().includes(filter.toLowerCase())
    );
  }, [tags, filter]);

  return (
    <ul>
      {filteredTags.map((tag) => (
        <li key={tag.id}>{tag.label}</li>
      ))}
    </ul>
  );
};

export default TagList;
