interface CardProps {
  icon: string;
  title: string;
  content: string;
}

const HowItWorksCard: React.FC<CardProps> = ({ icon, title, content }) => {
  return (
    <div className="w-full px-[2rem] py-[3rem] flex flex-col bg-[#F9FAFB] gap-[1.5rem] sm:w-[25%] rounded-3xl">
      <div className="flex items-center justify-center bg-[#077DBB] w-[3.5rem] h-[3.5rem] rounded-full">
        <img src={icon} alt={title} />
      </div>
      <span className="text-2xl font-semibold text-[#055986]">{title}</span>
      <p className="text-[#6B7280] text-base font-normal">{content}</p>
    </div>
  );
};

export default HowItWorksCard;
