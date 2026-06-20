export default function GrowthBanner({
  name = "there",
  imageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuBCLmI74msXFdSAszu21mPXaEH2AFsIWkzWYDD5sAT40oavOhNRCryk1iSx47LQ6HFsSFmLPF5WNko-A9xqW2_00iV08UCk3SOeSYzqGaPh6qJVpJfQrc7iVpsUDfVbxZInI2NEkuDlZTIysjemOm_pEM9s_oe09mYYrDwoQjgPpLRd1MOAAATOFHKYMarGbP7m5NKLIsYxF3vqD0fN48i_MWeYF7DQwiJ7b8PF80GqG-jt8MbVh_NGoV7NLDjmugDCFAAb-HfBsis",
  onScheduleNext,
}) {
  return (
    <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg group">
      <img
        alt="Abstract growth visualization"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        src={imageUrl}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex flex-col justify-center px-margin-desktop text-white">
        <h3 className="text-headline-lg font-headline-lg mb-2">Keep going, {name}.</h3>
        <p className="text-body-lg max-w-md opacity-90">
          Complete more interviews to start tracking your progress over time.
        </p>
        <button
          onClick={onScheduleNext}
          className="mt-6 bg-secondary text-white px-8 py-3 rounded-lg font-bold hover:bg-on-secondary-container transition-all self-start shadow-xl"
        >
          Schedule Next Session
        </button>
      </div>
    </div>
  );
}
