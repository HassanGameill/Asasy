"use client"
import CategoryCard  from "./CategoryCard";
import Loading  from "../../Feedback/Loading/Loading";
import useCategories from "./useCategories";
import SliderList from "../../LogicList/SliderList/SliderList";

const CategoryRender = () => {
  const { loading, error, records } = useCategories();

  return (
    <>
    <div className="container">
      <Loading status={loading} error={error} type="category">
        <SliderList
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
