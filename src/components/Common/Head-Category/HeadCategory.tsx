import { Link } from "@/navigation";
import { HiChevronRight } from "react-icons/hi2";
import { useLocale } from "next-intl";
import { memo } from "react";

interface SubTitlesProps {
  title_en: string;
  title_ar: string;
  btnTitle_en?: string; // Optional
  btnTitle_ar?: string; // Optional
  pathText: string;
}

const HeadCategory: React.FC<SubTitlesProps> = memo(({
  title_en,
  title_ar,
  btnTitle_en = "Default Button", // Provide default values
  btnTitle_ar = "زر افتراضي", // Provide default values
  pathText,
}) => {
  const locale = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";

  // Set the title and button title based on the locale
  const title = locale === "ar" ? title_ar : title_en;
  const btnTitle = locale === "ar" ? btnTitle_ar : btnTitle_en;

  return (
    <div className="flex items-center justify-between pt-4">
      <div className="flex items-center gap-2">
        <span className="border-2 h-7 border-[#FFD500] dark:shadow-2xl dark:border-primary rounded-lg"></span>
        <h2 className="text-[#E71B20] dark:text-[#FFD500] text-[16px] font-semibold">
          {title} {/* Dynamic title based on locale */}
        </h2>
      </div>
      {btnTitle && (
        <Link href={pathText} aria-label={btnTitle}>
          <div
            dir={dir}
            className="group flex items-center gap-1 bg-[#6CB536] hover:bg-[#FFD500] text-[12px] px-2 py-1 rounded-lg shadow-lg text-white transition-all duration-300"
          >
            {btnTitle} {/* Dynamic button title based on locale */}
            <HiChevronRight
              className={`transition-transform duration-300 ${
                locale === "ar" ? "group-hover:-translate-x-1 rotate-180" : "group-hover:translate-x-1"
              }`}
            />
          </div>
        </Link>
      )}
    </div>
  );
});

// Assign a display name for better debugging
HeadCategory.displayName = "HeadCategory";

export default HeadCategory;
