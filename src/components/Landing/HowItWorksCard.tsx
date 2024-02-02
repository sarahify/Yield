interface CardProps {
  icon: string;
  title: string;
  content: string;
}

const HowItWorksCard: React.FC<CardProps> = ({ icon, title, content }) => {
  return (
    <div className="w-full px-8 py-12 flex flex-col bg-neutral-50 gap-6 md:w-1/4 rounded-3xl">
      <div className="flex items-center justify-center bg-primary w-14 h-14 rounded-full">
        <img src={icon} alt={title} />
      </div>
      <span className="text-2xl font-semibold text-primary">{title}</span>
      <p className="text-neutral text-base font-normal">{content}</p>
    </div>
  );
};

export default HowItWorksCard;
