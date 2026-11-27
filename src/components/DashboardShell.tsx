"use client";

import { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="dashboard-layout"><Sidebar open={menuOpen} onNavigate={() => setMenuOpen(false)} /><div className="dashboard-main"><Header dashboard onMenuClick={() => setMenuOpen(!menuOpen)} /><main className="dashboard-content">{children}</main></div></div>;
}
