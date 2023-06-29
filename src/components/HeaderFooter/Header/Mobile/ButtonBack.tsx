const ButtonBack = ({
  menuState,
  goBack,
}: {
  menuState: number;
  goBack: () => void;
}) => {
  return (
    <div className="p-[20px] flex justify-between items-center text-center ">
      <div
        className={`${
          menuState === 1 && "opacity-50"
        } flex gap-x-[10px] text-yc1`}
        onClick={goBack}
      >
        <div className="flex items-center ">
          <svg
            width="7"
            height="14"
            viewBox="0 0 7 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 1L1 7L6 13"
              stroke="#F8991D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        Назад
      </div>
    </div>
  );
};

export default ButtonBack;
