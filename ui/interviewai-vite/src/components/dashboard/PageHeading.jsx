export default function PageHeading({ title, subtitle }) {
  return (
    <div className="mb-stack-lg">
      <h2 className="text-display-lg font-display-lg text-primary mb-2">{title}</h2>
      {subtitle && <p className="text-body-lg text-on-surface-variant">{subtitle}</p>}
    </div>
  );
}
