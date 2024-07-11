export const Balance = ({ value }) => {
    return (
      <div className="flex  mt-5 ml-[35px] items-center justify-start ">
        <div className="font-extrabold text-[20px]">My balance:</div>
        <div className="font-semibold ml-2 text-[20px]">Rs {value}</div>
      </div>
    );
  };