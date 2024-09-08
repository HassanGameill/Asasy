import { Link } from "@/navigation";
import "./headCategory.css";


interface SubTitlesProps {
  title: string;
  btnTitle?: string; // Optional
  pathText: string;
}

const HeadCategory: React.FC<SubTitlesProps> = ({
  title,
  btnTitle,
  pathText,
}) => {
  return (
    <div className="flex items-center justify-between pt-4">
      <div className=" flex items-center gap-2">
      <span className=" border-2 h-6 border-[#FFD500] dark:border-[#F6AA02] rounded-lg"></span>
      <h2 className="text-[#E71B20]  head-text text-[20px]">{title}</h2>
      </div>
      {btnTitle && (
        <Link
          href={pathText}
        >
          <div className="bg-[#6CB536] text-[10px] px-2 py-1 rounded-lg text-white">
            {btnTitle}
          </div>
        </Link>
      )}
    </div>
  );
};

export default HeadCategory;
