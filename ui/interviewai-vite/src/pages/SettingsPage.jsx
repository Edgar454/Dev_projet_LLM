import PageHeading from "../components/dashboard/PageHeading";

export default function SettingsPage() {
  return (
    <>
      <PageHeading title="Settings" subtitle="Manage your account and preferences." />

      <div className="bento-grid">
        <section className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-xl p-stack-md border border-outline-variant shadow-sm">
          <p className="text-body-md text-on-surface-variant">
            Settings options will live here.
          </p>
        </section>
      </div>
    </>
  );
}
