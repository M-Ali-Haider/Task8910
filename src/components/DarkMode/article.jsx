const Article = ({ data }) => {
  return (
    <div className="flex flex-col mb-12">
      <h1 className="text-lightMain dark:text-darkMain font-bold text-[1.75rem] tracking-[2px] transition-all duration-300 ease-linear capitalize">
        {data.title}
      </h1>
      <div className="flex items-center italic text-sm dark:text-[#cbd5e1] transition-all duration-300 ease-linear">
        <div className="mr-[0.75rem]">{data.date}</div>
        <div>{data.minRead} min read</div>
      </div>
      <p className="text-sm transition-all duration-300 ease-linear mt-[12px]">
        {data.desc}
      </p>
    </div>
  );
};

export default Article;
