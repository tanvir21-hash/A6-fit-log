interface ITagListProps {
  tags: string[];
  uppercase?: boolean; 
}

const TagList = ({ tags, uppercase = true }: ITagListProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className={`badge badge-primary badge-sm rounded-full font-bold ${uppercase ? "uppercase" : ""}`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagList;
