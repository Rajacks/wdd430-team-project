"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Avatar } from "./Avatar";
import { DarkModeToggle } from "./DarkModeToggle";
import { useDemoSession } from "./DemoSessionProvider";
import { Icon } from "./Icon";

const landingLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "About", href: "/#about" },
];

export function Header({ dashboard = false, onMenuClick }: { dashboard?: boolean; onMenuClick?: () => void }) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const { account, logOut } = useDemoSession();
  const router = useRouter();
  const activeAccount = account ?? { name: "Emmanuel Ndogo", initials: "EN", program: "Computer Science", profileHref: "/profile" };

  function handleLogOut() {
    logOut();
    setAccountMenuOpen(false);
    router.push("/");
  }

  if (dashboard) {
    return (
      <header className="app-header">
        <button className="icon-button mobile-menu-button" type="button" aria-label="Toggle navigation" onClick={onMenuClick}>
          <Icon name="menu" />
        </button>
        <DarkModeToggle className="header-theme-toggle" />
        <label className="header-search">
          <Icon name="search" size={18} />
          <input aria-label="Search StudyPal" placeholder="Search anything..." />
          <kbd>⌘ K</kbd>
        </label>
        <div className="header-actions">
          <div className="notification-wrap">
            <button type="button" className="icon-button notification-button" aria-label="Notifications" onClick={() => setNotificationsOpen(!notificationsOpen)}>
              <Icon name="bell" size={19} /><span className="notification-dot" />
            </button>
            {notificationsOpen && <div className="notification-popover"><strong>You’re all caught up!</strong><p>New study updates will show up here.</p></div>}
          </div>
          <div className="account-menu-wrap">
            <button type="button" className="account-menu-trigger" aria-label="Open account menu" aria-expanded={accountMenuOpen} onClick={() => setAccountMenuOpen(!accountMenuOpen)}>
              <Avatar initials={activeAccount.initials} size="sm" />
            </button>
            {accountMenuOpen && <div className="account-menu">
              <div className="account-menu-person"><Avatar initials={activeAccount.initials} size="sm" /><span><strong>{activeAccount.name}</strong><small>{activeAccount.program}</small></span></div>
              <Link href={activeAccount.profileHref} onClick={() => setAccountMenuOpen(false)}><Icon name="user" size={16} />My profile</Link>
            </div>}
          </div>
          <button type="button" className="button button-outline button-small header-logout" onClick={handleLogOut}><Icon name="logout" size={15} /><span>Log out</span></button>
        </div>
      </header>
    );
  }

  return (
    <header className="landing-header">
      <div className="landing-brand-row"><DarkModeToggle /><Link href="/" className="brand" aria-label="StudyPal home"><span className="brand-mark"><Icon name="sparkles" size={19} /></span><span>StudyPal</span></Link></div>
      <nav className="landing-nav" aria-label="Main navigation">
        {landingLinks.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
      </nav>
      <div className="landing-actions">
        <Link className="button button-quiet button-small" href="/login">Log In</Link>
        <Link className="button button-primary button-small" href="/login">Sign Up <Icon name="arrow" size={15} /></Link>
      </div>
    </header>
  );
}
