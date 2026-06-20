export default function HeaderProfile({
  avatarUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuAz1m2vjcWsUkVjk913OC97Fppb0diWIFF9Ld_42R_KCxTF0MV3HkaHQ6aNP2kwbXY_PLYIqRVdjfhOlL3jVNXJrn7CQOID4eAGZTjNiqHzVxj_ZaIjpx-UpInRTkyzmL0DWozK8DoHwjR8KYmrVvx7zPQTvLYyJUiUKDNPxAArqvDNK085N8MkolKwTcwj7R5nHbqvnhBvf2UzfIFJ31Z4OTJIKNv1SC59DHjJ4DKYJBr4AWsN9CJZMBSzRHiBfndmt7VpOGmquXw",
  alt = "User profile",
}) {
  return (
    <img
      alt={alt}
      className="w-8 h-8 rounded-full border border-outline-variant object-cover"
      src={avatarUrl}
    />
  );
}
