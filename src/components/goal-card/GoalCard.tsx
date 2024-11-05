import type { ObjectivesProps } from "@/data/objectivesData";

export default function GoalCard({ id, text }: ObjectivesProps) {
  return (
    <div className="flex items-start gap-2 w-full">
      <div className="w-10 !aspect-square rounded-full border-2 border-orange-400 flex items-center justify-center">{id as string}</div>
      <p className="text-slate-700 w-[70%]">{text}</p>
    </div>
  );
}
