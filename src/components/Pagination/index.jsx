"use client";
import { useQuery } from "@tanstack/react-query";
import PaginationContainer from "./container";

const Pagination = () => {
  const { data: followersData, isLoading } = useQuery({
    queryKey: ["followers"],
    queryFn: () =>
      fetch(
        `https://api.github.com/users/john-smilga/followers?per_page=100`
      ).then((res) => res.json()),
  });

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-[#102a42] my-2  mt-16 text-5xl font-bold">
          {isLoading ? "Loading..." : "Pagination"}
        </h1>
        <div className="bg-[#49a6e9] w-32 h-1"></div>
      </div>

      {!isLoading && followersData && (
        <PaginationContainer data={followersData} />
      )}
    </>
  );
};

export default Pagination;
