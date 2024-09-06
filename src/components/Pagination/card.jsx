import Image from "next/image";

const PaginationCard = ({ data }) => {
  return (
    <>
      <div className="w-full sm:w-[253px] lg:w-[268.5px] h-[273px] flex flex-col items-center py-8 shadow-md rounded-[0.75rem] bg-white">
        <Image
          src={data.avatar_url}
          width={130}
          height={130}
          alt="followers image"
          className="w-[130px] h-[130px] rounded-full object-cover object-center"
        />
        <h2 className="text-[#617398] text-[0.85rem] font-bold my-4 tracking-widest">
          {data.login}
        </h2>
        <a
          href={`https://github.com/${data.login}`}
          target="_blank"
          className="bg-[#49a6e9] flex items-center justify-center text-[0.7rem] py-[0.35rem] px-[0.75rem] text-white rounded-full tracking-[1.6px]"
        >
          VIEW PROFILE
        </a>
      </div>
    </>
  );
};

export default PaginationCard;
