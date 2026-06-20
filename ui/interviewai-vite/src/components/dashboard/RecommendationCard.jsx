export default function RecommendationCard({
  eyebrow = "Personalized Focus",
  title = 'Master "Conflict Resolution" questions',
  description = "Analysis of your last 3 interviews shows a pattern of hesitation when discussing team disagreements. Our new module helps you structure STAR responses for difficult conversations.",
  ctaLabel = "View Training Module",
  onCtaClick,
  className = "col-span-12 lg:col-span-5",
}) {
  return (
    <section
      className={`${className} relative overflow-hidden bg-primary rounded-xl p-stack-md text-on-primary`}
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-2 mb-stack-md">
          <span
            className="material-symbols-outlined text-secondary-fixed"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            lightbulb
          </span>
          <h3 className="text-label-md font-label-md uppercase tracking-widest">{eyebrow}</h3>
        </div>
        <h4 className="text-headline-md font-headline-md mb-stack-sm leading-tight">{title}</h4>
        <p className="text-body-md text-on-primary-container mb-stack-md">{description}</p>
        <button
          onClick={onCtaClick}
          className="mt-auto px-6 py-3 bg-secondary-fixed text-on-secondary-fixed rounded-lg font-bold text-label-md self-start hover:opacity-90 transition-opacity"
        >
          {ctaLabel}
        </button>
      </div>
    </section>
  );
}
