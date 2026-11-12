"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DarkModeToggle } from "./DarkModeToggle";
import { useDemoSession } from "./DemoSessionProvider";
import { Icon, type IconName } from "./Icon";

const items: { label: string; href: string; icon: IconName }[] = [
  { label: "Dashboard", href: "/dashboard", icon: "home" },
  { label: "My Profile", href: "/profile", icon: "user" },
  { label: "Find Students", href: "/discover", icon: "users" },
  { label: "Study Groups", href: "/study-groups", icon: "group" },
  { label: "Connections", href: "/connections", icon: "mail" },
  { label: "Notifications", href: "/connections", icon: "bell" },
  { label: "Settings", href: "/profile", icon: "settings" },
];

export function Sidebar({ open, onNavigate }: { open: boolean; onNavigate: () => void }) {
  const pathname = usePathname();
  const { account, logOut } = useDemoSession();
  const profileHref = account?.profileHref ?? "/profile";
  return (
    <>
      {open && <button className="sidebar-backdrop" aria-label="Close navigation" onClick={onNavigate} />}
      <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
        <div className="sidebar-brand-row"><Link href="/" className="brand sidebar-brand" onClick={onNavigate}><span className="brand-mark"><Icon name="sparkles" size={18} /></span><span>StudyPal</span></Link><DarkModeToggle className="sidebar-theme-toggle" /></div>
        <span className="sidebar-label">MENU</span>
        <nav className="sidebar-nav" aria-label="Dashboard navigation">
          {items.map((item) => {
            const href = item.label === "My Profile" ? profileHref : item.href;
            const active = item.label !== "Notifications" && item.label !== "Settings" && (pathname === href || (href !== "/dashboard" && pathname.startsWith(`${href}/`)));
            return <Link key={item.label} href={href} onClick={onNavigate} className={`sidebar-link ${active ? "sidebar-link-active" : ""}`} aria-current={active ? "page" : undefined}>
              <Icon name={item.icon} size={19} /><span>{item.label}</span>
            </Link>;
          })}
        </nav>
        <div className="sidebar-bottom"><div className="sidebar-help"><span className="help-orb"><Icon name="sparkles" size={17} /></span><strong>Need a study buddy?</strong><p>Find your people and learn together.</p><Link href="/discover" onClick={onNavigate}>Explore students <span>→</span></Link></div>
          <Link className="sidebar-link logout-link" href="/" onClick={() => { logOut(); onNavigate(); }}><Icon name="logout" size={19} /><span>Log Out</span></Link>
        </div>
      </aside>
    </>
  );
}
