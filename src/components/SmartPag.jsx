import React, { useEffect } from "react";
import { useSearchParams } from "react-router";

export default function SmartPag() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const goToPage = (nextPage) => {
    setSearchParams({ page: nextPage });
  };

  useEffect(() => {
    console.log("fetching Data for page:", currentPage);
  }, [currentPage]);

  return (
    <div>
      <p>Current Page:{currentPage}</p>
      <button onClick={() => goToPage(currentPage + 1)}>Next Page</button>
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        Previous Page
      </button>
    </div>
  );
}
