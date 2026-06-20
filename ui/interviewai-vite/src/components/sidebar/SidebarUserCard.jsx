export default function SidebarUserCard({
  name = "Alex Rivers",
  role = "Senior Product Designer",
  avatarUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuARD7b_2dNQFG_no0RNDpZ8crNpuk3bToxP6khnx9GdqgNPjhFbHdycvEt2SC0QMX2I7tREDHfN6n3jPNtMNYfSGqe8QlSWOzsDUfHSzKnUSshF_kvdE0z9W_pLziriB_ThkHZSGWfHnjygUOCTb3S8dWqD2qRDlOFc_QspjNO5ENApm1PEnYF-jbBekaJb1JwHhUknmghnL6yRnL5EUH5gTaQh83lYnEd44VvB3e7vhU6LMuIWE4GSBh_GLky7Couwj8k41Jdf2WQ",
}) {
  return (
    <div className="flex items-center gap-stack-sm mb-stack-lg p-2 rounded-lg bg-surface-container-low">
      <img
        alt={`${name} avatar`}
        className="w-10 h-10 rounded-full bg-surface-variant object-cover"
        src={avatarUrl}
      />
      <div className="overflow-hidden">
        <p className="text-label-md font-label-md text-on-surface truncate">{name}</p>
        <p className="text-caption text-on-surface-variant truncate">{role}</p>
      </div>
    </div>
  );
}
