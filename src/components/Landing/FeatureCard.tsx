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
    <div className="flex flex-col p-6 md:p-12 rounded-2xl md:rounded-2xl bg-neutral-light gap-4">
      <div className="flex items-center justify-center rounded-full w-14 h-14 md:w-18 md:h-18 bg-primary">
        <img
          src={icon}
          alt={bigTitle}
          className="w-6 h-6 md:w-auto md:h-auto"
        />
      </div>
      <span className="text-primary-700 text-2xl md:text-4xl font-semibold">
        {bigTitle}
      </span>
      <p className="text-neutral text-xs md:text-base font-normal">
        {content}
      </p>
      <div className="bg-neutral-100 relative flex w-100 mt-8 ml-4 rounded-2xl border border-neutral-200">
        <div className="relative top-[-0.69rem] flex w-full bg-neutral-white left-[-0.77rem] rounded-2xl border border-neutral-200">
          <div className="bg-white flex items-center justify-between p-4 md:p-6 rounded-2xl border border-neutral-200 relative w-full top-[-0.69rem] left-[-0.77rem]">
            <div className="flex flex-col">
              <span
                className="text-lg md:text-3xl font-medium"
                style={{ color: `${smallTitleColor}` }}
              >
                {smallTitle}
              </span>
              <span
                className="font-normal text-xs md:text-base text-primary-800"
                style={{ color: `${smallTextColor}` }}
              >
                {smallText}
              </span>
            </div>
            <img src={image} alt={smallTitle} className="w-10 h10 md:w-auto md:h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
