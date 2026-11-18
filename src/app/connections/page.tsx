"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Avatar } from "@/components/Avatar";
import { ConnectionCard } from "@/components/ConnectionCard";
import { DashboardShell } from "@/components/DashboardShell";
import { Icon } from "@/components/Icon";
import { connections, invitations } from "@/lib/sample-data";

export default function ConnectionsPage() {
  const [tab, setTab] = useState("Requests");
  const [pending, setPending] = useState(() => new Set(invitations.map((student) => student.id)));
  const [notice, setNotice] = useState("");
  const visibleInvites = useMemo(() => invitations.filter((student) => pending.has(student.id)), [pending]);
  function respond(id: string, response: string) {
    const person = invitations.find((student) => student.id === id);
    setPending((current) => { const next = new Set(current); next.delete(id); return next; });
    if (person) setNotice(`${person.name}’s request was ${response}. This sample action is not saved.`);
  }
  return <DashboardShell>
    <div className="page-heading"><div><span className="eyebrow">YOUR COMMUNITY</span><h1>Connections & invitations</h1><p>Build your learning circle, one connection at a time.</p></div><Link href="/discover" className="button button-outline"><Icon name="users" size={17} />Find students</Link></div>
    <section className="connections-panel card">
      <div className="connection-tabs tabs" role="tablist" aria-label="Connection sections">
        {["Requests", "My connections"].map((item) => <button key={item} role="tab" type="button" aria-selected={tab === item} className={`tab-button ${tab === item ? "tab-active" : ""}`} onClick={() => setTab(item)}>{item}</button>)}
      </div>
      {tab === "Requests" ? <div className="requests-content"><div className="section-heading"><div><h2>Waiting to connect</h2><p>Say hello to a future study buddy.</p></div></div>
        {visibleInvites.length ? <div className="connection-list">{visibleInvites.map((student) => <ConnectionCard key={student.id} student={student} onAccept={() => respond(student.id, "accepted")} onDecline={() => respond(student.id, "declined")} />)}</div> : <div className="inline-empty"><span className="empty-icon"><Icon name="check" size={21} /></span><strong>You’re all caught up</strong><p>No pending requests at the moment.</p></div>}
      </div> : <div className="requests-content"><div className="section-heading"><div><h2>Your connections</h2><p>People you’re learning alongside</p></div><Link href="/discover" className="text-link">View all <span>→</span></Link></div><div className="connection-grid">{connections.map((student) => <article className="connection-person card" key={student.id}><Avatar initials={student.initials} color={student.color} size="lg" /><strong>{student.name}</strong><span>{student.courses[0]} · {student.interest}</span><button className="button button-outline button-small" onClick={() => setNotice(`A message to ${student.name} will be available when StudyPal connects to its API.`)}><Icon name="mail" size={14} />Say hello</button></article>)}</div></div>}
    </section>
    {tab === "Requests" && <section className="connection-preview card"><div className="section-heading"><div><span className="eyebrow">GOOD COMPANY</span><h2>Your connections</h2></div><button className="text-link" onClick={() => setTab("My connections")}>View all <span>→</span></button></div><div className="avatar-row">{connections.map((student) => <Avatar key={student.id} initials={student.initials} color={student.color} size="md" />)}<span className="connection-preview-label">People make progress better.</span></div></section>}
    {notice && <div className="notice-toast" role="status"><Icon name="check" size={17} />{notice}<button onClick={() => setNotice("")} aria-label="Dismiss"><Icon name="close" size={15} /></button></div>}
  </DashboardShell>;
}
