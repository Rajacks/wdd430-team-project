import Link from "next/link";
import { Icon, type IconName } from "./Icon";

const actions: { label: string; helper: string; href: string; icon: IconName; tone: string }[] = [
  { label: "Find students", helper: "Meet your next study buddy", href: "/discover", icon: "search", tone: "blue" },
  { label: "Create a group", helper: "Learn better together", href: "/study-groups", icon: "plus", tone: "purple" },
  { label: "View invitations", helper: "Review connection requests", href: "/connections", icon: "mail", tone: "cyan" },
];

export function QuickActions() {
  return <div className="quick-actions">{actions.map((action) => <Link className="quick-action" href={action.href} key={action.label}>
    <span className={`quick-icon tone-${action.tone}`}><Icon name={action.icon} size={19} /></span>
    <span className="quick-copy"><strong>{action.label}</strong><small>{action.helper}</small></span><span className="quick-arrow">↗</span>
  </Link>)}</div>;
}
