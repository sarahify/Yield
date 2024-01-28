interface ValueCardProps {
  mainBg: string;
  smallBg: string;
  icon: string;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({
  mainBg,
  smallBg,
  icon,
  title,
  description,
}) => {
  return (
    // border border-red-500 border-solid w-[27%]
    <div
      className="flex items-center gap-[1rem] p-[1rem] rounded-3xl w-full sm:w-[32%]"
      style={{ background: `${mainBg}` }}
    >
      <div
        className={`flex items-center justify-center h-[4.5rem] w-[4.5rem] rounded-2xl`}
        style={{ background: `${smallBg}` }}
      >
        <img src={icon} alt={title} />
      </div>
      <div className="flex flex-col">
        <span className="text-[#4B5563] text-base sm:text-xl font-bold tracking-tight">
          {title}
        </span>
        <span className="text-[#6B7280] text-sm sm:text-base font-medium">
          {description}
        </span>
      </div>
    </div>
  );
};

export default ValueCard;
