import type { Student } from "@/lib/sample-data";
import { Avatar } from "./Avatar";
import { Icon } from "./Icon";

export function ConnectionCard({ student, onAccept, onDecline }: { student: Student; onAccept?: () => void; onDecline?: () => void }) {
  return <article className="connection-card">
    <Avatar initials={student.initials} color={student.color} />
    <div className="connection-copy"><strong>{student.name}</strong><span>{student.courses[0]} · {student.interest}</span></div>
    {onAccept && onDecline ? <div className="connection-actions">
      <button type="button" className="button button-primary button-small" aria-label={`Accept ${student.name}`} onClick={onAccept}><Icon name="check" size={15} />Accept</button>
      <button type="button" className="button button-outline button-small decline-button" aria-label={`Decline ${student.name}`} onClick={onDecline}>Decline</button>
    </div> : <span className="online-indicator">Connected</span>}
  </article>;
}
