import { Link } from "@/navigation";
import "./headCategory.css";
import { HiChevronRight } from "react-icons/hi2";

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
      <div className="flex items-center gap-2">
        <span className="border-2 h-7 border-[#FFD500] shadow-2xl dark:border-[#F6AA02] rounded-lg"></span>
        <h2 className="text-[#E71B20] text-[20px] head-text">{title}</h2>
      </div>
      {btnTitle && (
        <Link
          href={pathText}
          aria-label={btnTitle}
        >
          <div className="group flex items-center gap-1 bg-[#6CB536] hover:bg-[#FFD500] text-[12px] px-2 py-1 rounded-lg shadow-lg text-white transition-all duration-300">
            {btnTitle}
            <HiChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </Link>
      )}
    </div>
  );
};

export default HeadCategory;
