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
    <div
      className="flex items-center gap-2 p-4 rounded-3xl w-full"
      style={{ background: `${mainBg}` }}
    >
      <div
        className={`flex items-center justify-center h-16 w-16 rounded-2xl`}
        style={{ background: `${smallBg}` }}
      >
        <img src={icon} alt={title} />
      </div>
      <div className="flex flex-col">
        <span className="text-neutral-dark text-base font-bold tracking-tight">
          {title}
        </span>
        <span className="text-neutral text-sm md:text-base font-medium">
          {description}
        </span>
      </div>
    </div>
  );
};

export default ValueCard;
