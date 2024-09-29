import { TCategory } from "../../../types/index";
import Link from "next/link";
import { useLocale } from "next-intl";
import Image from "next/image";

// Define the type of props for the CategoryCard component
interface CategoryCardProps {
  attributes: {
    title_en: string;
    title_ar: string;
    description_ar: string;
    description_en: string;
    imageUrl?: string; // Optional: If you want to include an image
  };
  href: string; // Dynamic link to the category page
}

const CategoryCard = ({
  attributes: { title_en, title_ar, description_ar, description_en, imageUrl },
  href,
}: CategoryCardProps) => {
  const locale = useLocale();

  // Determine the text based on the current locale
  const title = locale === "ar" ? title_ar : title_en;
  const description = locale === "ar" ? description_ar : description_en;

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Link href={href} passHref>
        <div className="relative bg-red-800 px-5 py-16 rounded-t-lg cursor-pointer">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={title}
              width={300}
              height={200}
              className="rounded-lg"
              layout="responsive"
              objectFit="cover"
            />
          )}
        </div>
      </Link>
      <div className="p-4">
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <p className="text-sm text-gray-700">{description}</p>
        <Link href={href} passHref>
          <a className="text-blue-600 hover:underline mt-4 block">
            {locale === "ar" ? "اقرأ المزيد" : "Read More"}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
