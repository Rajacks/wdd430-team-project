"use client";

import { useMemo, useState } from "react";
import { DashboardShell } from "@/components/DashboardShell";
import { Icon } from "@/components/Icon";
import { StudyGroupCard } from "@/components/StudyGroupCard";
import { studyGroups } from "@/lib/sample-data";

export default function StudyGroupsPage() {
  const [tab, setTab] = useState("All groups");
  const [joined, setJoined] = useState(() => new Set(studyGroups.filter((group) => group.joined).map((group) => group.id)));
  const [showNotice, setShowNotice] = useState(false);
  const visibleGroups = useMemo(() => {
    if (tab === "My groups") return studyGroups.filter((group) => group.createdByMe);
    if (tab === "Joined") return studyGroups.filter((group) => joined.has(group.id));
    return studyGroups;
  }, [joined, tab]);
  function toggleGroup(id: string) {
    setJoined((current) => { const next = new Set(current); if (next.has(id)) next.delete(id); else next.add(id); return next; });
  }
  return <DashboardShell>
    <div className="page-heading"><div><span className="eyebrow">BETTER TOGETHER</span><h1>Study groups</h1><p>Find your people, share what you know, and make progress together.</p></div><button className="button button-primary" onClick={() => setShowNotice(true)}><Icon name="plus" size={17} />Create group</button></div>
    <div className="groups-banner"><div className="groups-banner-mark"><Icon name="group" size={23} /></div><div><strong>Good company makes hard things easier.</strong><p>Join a group or start one for a course you love.</p></div><span className="groups-banner-decoration">✳</span></div>
    <div className="tabs groups-tabs" role="tablist" aria-label="Study group filter">{["All groups", "My groups", "Joined"].map((item) => <button key={item} type="button" role="tab" aria-selected={tab === item} className={`tab-button ${tab === item ? "tab-active" : ""}`} onClick={() => setTab(item)}>{item}</button>)}</div>
    <div className="study-groups-grid">{visibleGroups.map((group) => {
      const isJoined = joined.has(group.id);
      return <StudyGroupCard key={group.id} group={{ ...group, joined: isJoined }} action={<button className={`button ${isJoined ? "button-outline" : "button-primary"} button-small`} type="button" onClick={() => toggleGroup(group.id)}>{isJoined ? <><Icon name="close" size={15} />Leave group</> : <><Icon name="plus" size={15} />Join group</>}</button>} />;
    })}</div>
    {showNotice && <div className="modal-backdrop" role="presentation" onClick={() => setShowNotice(false)}><div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="create-group-title" onClick={(event) => event.stopPropagation()}><button className="modal-close icon-button" onClick={() => setShowNotice(false)} aria-label="Close"><Icon name="close" /></button><span className="modal-icon purple-modal"><Icon name="group" /></span><h2 id="create-group-title">Group creation is coming soon</h2><p>You can explore and join sample groups now. Creating a group will be available once the API is connected.</p><button className="button button-primary" onClick={() => setShowNotice(false)}>Sounds good</button></div></div>}
  </DashboardShell>;
}
