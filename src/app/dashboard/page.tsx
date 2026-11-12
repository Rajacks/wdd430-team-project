"use client";

import Link from "next/link";
import { Avatar } from "@/components/Avatar";
import { DashboardShell } from "@/components/DashboardShell";
import { Icon } from "@/components/Icon";
import { QuickActions } from "@/components/QuickActions";
import { StudyGroupCard } from "@/components/StudyGroupCard";
import { useDemoSession } from "@/components/DemoSessionProvider";
import { studyGroups, studentProfile, taegProfile } from "@/lib/sample-data";

export default function DashboardPage() {
  const { account } = useDemoSession();
  const profile = account?.id === "taeg" ? taegProfile : studentProfile;
  const profileGroups = studyGroups.filter((group) => profile.groupIds.includes(group.id));

  return <DashboardShell>
    <div className="page-heading dashboard-welcome"><div><span className="eyebrow">YOUR STUDY SPACE</span><h1>Welcome back, {profile.name.split(" ")[0]} <span className="wave">✦</span></h1><p>Here’s your academic overview. You’re doing great!</p></div><Link className="button button-primary" href="/study-groups"><Icon name="plus" size={17} />Create a group</Link></div>
    <div className="dashboard-panels">
      <section className="panel-card card">
        <div className="section-heading"><div><span className="eyebrow">YOUR LEARNING CIRCLE</span><h2>My study groups</h2></div><Link className="text-link" href="/study-groups">View all <span>→</span></Link></div>
        <div className="group-list">{profileGroups.map((group) => <StudyGroupCard key={group.id} group={group} compact action={<Link className="circle-arrow" href={`/study-groups/${group.id}`} aria-label={`View ${group.name} members`}><Icon name="chevron" size={16} /></Link>} />)}</div>
      </section>
      <section className="panel-card quick-panel card">
        <div className="section-heading"><div><span className="eyebrow">MAKE IT HAPPEN</span><h2>Quick actions</h2></div></div>
        <QuickActions />
      </section>
    </div>
    <section className="growth-banner">
      <div className="growth-art"><span>✦</span><span>✳</span><span>↗</span></div>
      <div className="growth-copy"><span className="eyebrow">A LITTLE PROGRESS, EVERY DAY</span><h2>Keep learning. Keep growing.</h2><p>Great things happen when we learn together. Find your next study buddy.</p></div>
      <Link className="button button-white" href="/discover">Explore students <Icon name="arrow" size={16} /></Link>
      <div className="growth-avatar-stack"><Avatar initials="SJ" color="coral" size="sm" /><Avatar initials="GO" color="purple" size="sm" /><Avatar initials={profile.initials} color={profile.color} size="sm" /></div>
    </section>
  </DashboardShell>;
}
