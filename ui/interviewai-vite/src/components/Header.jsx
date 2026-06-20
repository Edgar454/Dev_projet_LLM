import HeaderSearch from "./header/HeaderSearch";
import HeaderActions from "./header/HeaderActions";
import HeaderProfile from "./header/HeaderProfile";

export default function Header() {
  return (
    <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-surface dark:bg-on-background flex justify-between items-center px-margin-desktop z-40">
      <HeaderSearch />

      <div className="flex items-center gap-6">
        <HeaderActions />
        <div className="h-8 w-[1px] bg-outline-variant" />
        <HeaderProfile />
      </div>
    </header>
  );
}
