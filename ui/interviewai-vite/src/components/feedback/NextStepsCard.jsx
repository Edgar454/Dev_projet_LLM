const DEFAULT_STEPS = [
  {
    icon: "forward",
    title: "Schedule Technical Review",
    description: "Candidate passed the soft-skills and leadership gate.",
  },
  {
    icon: "assignment",
    title: "Request Portfolio Deep-dive",
    description: "Focus on the 'Enterprise Dashboards' project.",
  },
  {
    icon: "mail",
    title: "Send Feedback Email",
    description: "Automated summary of top traits is ready.",
  },
];

export default function NextStepsCard({ steps = DEFAULT_STEPS, onProceed }) {
  return (
    <div className="col-span-12 md:col-span-5 bg-primary text-on-primary p-stack-md rounded-xl animate-fade-in">
      <h4 className="text-headline-md font-headline-md mb-stack-md">Recommended Next Steps</h4>

      <div className="space-y-stack-sm">
        {steps.map((step) => (
          <div
            key={step.title}
            className="group flex items-start gap-4 p-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-white">{step.icon}</span>
            </div>
            <div>
              <p className="text-label-md font-label-md">{step.title}</p>
              <p className="text-caption text-on-primary/70">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onProceed}
        className="w-full mt-stack-md py-3 bg-secondary-container text-on-secondary-container font-bold rounded-lg hover:opacity-90 transition-opacity"
      >
        PROCEED TO HIRING STAGE
      </button>
    </div>
  );
}
