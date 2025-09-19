import React from "react";
import { browserCategory } from "../../Data/data";
import CategoryLayout from "../layout/CategoryLayout";

const BrowseCategory = () => {
  return (
    <div className="container mx-auto py-[80px]">
      <div className="mb-[60px]">
        <CategoryLayout
          isArrow={true}
          timeStamp={false}
          subtitle={"Categories"}
          title={"Browse By Category"}
          categoryData={browserCategory}
        ></CategoryLayout>
      </div>

      <div className="mt-[70px]">
        <hr className="border-1/2" />
      </div>
    </div>
  );
};

export default BrowseCategory;
