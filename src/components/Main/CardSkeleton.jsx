const CardSkeleton = () => {
  return (
    <div className="rounded-lg dark:bg-dark-secondery overflow-hidden mb-2.5 md:mb-5">
      <div className="w-full aspect-3/2 animate-pulse bg-gray-400/15"></div>
      <div className="px-4 pt-4 pb-8 flex flex-col gap-1.5">
        <div className="animate-pulse bg-gray-300/20 h-3 w-full rounded-sm"></div>
        <div className="animate-pulse bg-gray-300/20 h-3 w-full rounded-sm"></div>
        <div className="animate-pulse bg-gray-300/20 h-3 w-full rounded-sm"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
