import React from "react";
import { useLocation, Link } from "react-router";
const BreadCrumb = () => {
  const { pathname } = useLocation();
  const pathnameArr = pathname.split("/").filter((item) => item);

  return (
    <div className="container mx-auto">
      <div className="py-20 flex justify-start items-center gap-1">
        {/* Home link */}
        <span>
          <Link to="/">Home</Link>
        </span>

        {/* Dynamic breadcrumbs */}
        {pathnameArr.map((item, idx) => {
          // build the path progressively
          const routeTo = "/" + pathnameArr.slice(0, idx + 1).join("/");

          return pathnameArr.length - 1 === idx ? (
            <span key={idx} className="text-gray-500">
              /{item}
            </span>
          ) : (
            <span key={idx}>
              <Link to={routeTo}>/{item}</Link>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default BreadCrumb;
