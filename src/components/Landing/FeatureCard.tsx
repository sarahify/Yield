interface FeatureCardProps {
  icon: string;
  bigTitle: string;
  content: string;
  smallTitle: string;
  smallText: string;
  image: string;
  smallTitleColor: string;
  smallTextColor: string;
}
const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  bigTitle,
  content,
  smallTitle,
  smallText,
  image,
  smallTextColor,
  smallTitleColor,
}) => {
  return (
    <div className="flex flex-col p-6 sm:p-12 rounded-2xl sm:rounded-[3rem] bg-[#077dbb0a] gap-[1rem]">
      <div className="flex items-center justify-center rounded-full w-14 h-14 sm:w-18 sm:h-18 bg-[#077DBB]">
        <img
          src={icon}
          alt={bigTitle}
          className="w-6 h-6 sm:w-auto sm:h-auto"
        />
      </div>
      <span className="text-[#055986] text-2xl sm:text-4xl font-semibold">
        {bigTitle}
      </span>
      <p className="text-[#6B7280] text-xs sm:text-base font-normal">
        {content}
      </p>
      <div className="bg-[#F3F4F6] relative flex w-[100%] mt-8 ml-[1rem] rounded-2xl border border-[#E5E7EB]">
        <div className="relative top-[-0.69rem] flex w-[100%] bg-[#F9FAFB] left-[-0.77rem] rounded-2xl border border-[#E5E7EB]">
          <div className="bg-white flex items-center justify-between p-4 sm:p-[1.5rem] rounded-2xl border border-[#E5E7EB] relative w-[100%] top-[-0.69rem] left-[-0.77rem]">
            <div className="flex flex-col">
              <span
                className="text-lg sm:text-[1.75rem] font-medium"
                style={{ color: `${smallTitleColor}` }}
              >
                {smallTitle}
              </span>
              <span
                className="font-normal text-xs sm:text-base"
                style={{ color: `${smallTextColor}` }}
              >
                {smallText}
              </span>
            </div>
            <img src={image} alt={smallTitle} className="w-10 h10 sm:w-auto sm:h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
