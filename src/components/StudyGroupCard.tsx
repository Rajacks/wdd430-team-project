import Link from "next/link";
import type { StudyGroup } from "@/lib/sample-data";
import { Icon } from "./Icon";

export function StudyGroupCard({ group, compact = false, action }: { group: StudyGroup; compact?: boolean; action?: React.ReactNode }) {
  return <article className={`study-group-card card ${compact ? "study-group-compact" : ""}`}>
    <Link className="study-group-card-main" href={`/study-groups/${group.id}`} aria-label={`View ${group.name} members`}>
      <span className={`group-icon group-${group.color}`}><Icon name={group.icon} size={22} /></span>
      <div className="group-card-copy"><div className="group-card-heading"><h3>{group.name}</h3>{compact && <span className="group-activity"><span className="activity-dot" />{group.activity}</span>}</div>
        <span className="course-tag">{group.course}</span>
        <div className="group-card-meta"><span><Icon name="users" size={15} />View members</span>{!compact && <span><Icon name="clock" size={15} />{group.activity}</span>}</div>
      </div>
    </Link>
    {action ?? <Link className={`button ${group.joined ? "button-soft" : "button-primary"} button-small`} href={`/study-groups/${group.id}`}>{group.joined ? "View group" : "Join group"}</Link>}
  </article>;
}
