interface ListItemProps extends React.HTMLAttributes<HTMLParagraphElement> {
  content: string;
}

export default function ListItem({ content }: ListItemProps) {
  return <p className="w-full text-md lg:text-xl inline-flex gap-2 text-slate-500 relative before:mt-2 before:h-3 before:!aspect-square before:bg-orange-500 before:rounded-full">{content}</p>;
}
