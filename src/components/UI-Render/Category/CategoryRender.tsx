"use client"
import Loading  from "../../Feedback/Loading/Loading";
import useCategories from "./useCategories";
import SliderList from "../../LogicList/SliderList/SliderList";
import NewList from "@/components/LogicList/NewList/NewList";
import CategoryCard from "@/components/Common/CategoriesCards/HeroCard";

const CategoryRender = () => {
  const { loading, error, records } = useCategories();

  return (
    <>
    <div className="container">
      <Loading status={loading} error={error} type="category">
        <NewList
          emptyMessage="There are no categories"
          records={records}
          renderItem={(record) => <CategoryCard {...record} />}
        />
      </Loading>
      </div>
    </>
  );
};
export default CategoryRender;
