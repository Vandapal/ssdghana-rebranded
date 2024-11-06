interface CardThreeProps {
  title: string;
  description?: string;
  hasListDescription?: boolean;
}
export default function CardThree({
  title,
  description,
  hasListDescription = false,
}: CardThreeProps) {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-md overflow-clip w-[400px] max-w-[400px]">
      <h3 className="text-xl text-center font-bold bg-orange-500 text-white capitalize p-2 lg:text-2xl">
        {title}
      </h3>
      {hasListDescription ? (
        <ul className="w-full p-4 flex flex-col">
            <li className="value-list-item">Diversity</li>
            <li className="value-list-item">Inclusion</li>
            <li className="value-list-item">Accountability</li>
        </ul>
      ) : (
        <p className="text-sm font-light text-slate-600 p-4 lg:text-xl">{description}</p>
      )}
    </div>
  );
}
