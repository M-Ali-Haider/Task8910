import { useState } from "react";
import PaginationCard from "./card";

const PaginationContainer = ({ data }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const handlePageChange = (index) => {
    setPageNumber(index);
  };

  const goToPrevPage = () => {
    if (pageNumber === 0) {
      setPageNumber(Math.ceil(data.length / 10) - 1);
    } else {
      setPageNumber(pageNumber - 1);
    }
  };

  const goToNextPage = () => {
    if (pageNumber === Math.ceil(data.length / 10) - 1) {
      setPageNumber(0);
    } else {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <>
      <div className="mt-24 max-w-[1170px] w-full gap-8 flex flex-wrap justify-center xl:justify-normal">
        {data
          .slice(0 + pageNumber * 10, 10 + pageNumber * 10)
          .map((item, index) => {
            return <PaginationCard key={index} data={item} />;
          })}
      </div>
      <div className="flex items-center mt-8">
        <div
          onClick={goToPrevPage}
          className="m-2 tracking-[0.1rem] font-bold cursor-pointer select-none"
        >
          Prev
        </div>
        {[...Array(Math.ceil(data.length / 10))].map((item, index) => {
          return (
            <div
              onClick={() => handlePageChange(index)}
              className={`${
                index == pageNumber
                  ? "bg-[#063251] text-white"
                  : "bg-[#8bcbf9] text-black"
              } w-8 h-8 flex items-center justify-center rounded-[5px] m-2 cursor-pointer  `}
              key={index}
            >
              {index + 1}
            </div>
          );
        })}
        <div
          onClick={goToNextPage}
          className="m-2 tracking-[0.1rem] font-bold cursor-pointer select-none"
        >
          Next
        </div>
      </div>
    </>
  );
};

export default PaginationContainer;
