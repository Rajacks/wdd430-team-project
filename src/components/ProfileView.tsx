"use client";

import { useState } from "react";
import Link from "next/link";
import { Avatar } from "@/components/Avatar";
import { DashboardShell } from "@/components/DashboardShell";
import { Icon } from "@/components/Icon";
import type { StudentProfile } from "@/lib/sample-data";
import { studyGroups } from "@/lib/sample-data";

const courseNames: Record<string, string> = {
  CSE111: "Intro to Programming",
  CSE210: "Data Structures",
  CSE341: "Web Development",
  CSE340: "Database Systems",
  ITM111: "Information Systems",
};

export function ProfileView({ profile, isOwner = false }: { profile: StudentProfile; isOwner?: boolean }) {
  const [activeTab, setActiveTab] = useState("Courses");
  const [editing, setEditing] = useState(false);
  const profileGroups = studyGroups.filter((group) => profile.groupIds.includes(group.id));

  return <DashboardShell>
    <div className="page-heading"><div><span className="eyebrow">{isOwner ? "GET TO KNOW YOU" : "STUDENT PROFILE"}</span><h1>{isOwner ? "My profile" : profile.name}</h1><p>{isOwner ? "Your learning story, all in one place." : "A little about this fellow learner."}</p></div>{isOwner ? <button className="button button-outline" onClick={() => setEditing(true)}><Icon name="user" size={17} />Edit profile</button> : <Link className="button button-outline" href="/discover"><Icon name="users" size={17} />Find students</Link>}</div>
    <section className="profile-hero card">
      <div className="profile-cover"><span className="cover-star">✳</span><span className="cover-orbit orbit-one" /><span className="cover-orbit orbit-two" /></div>
      <div className="profile-identity"><Avatar initials={profile.initials} color={profile.color} size="lg" /><div className="profile-intro"><h2>{profile.name}</h2><p><Icon name="book" size={16} />{profile.program}</p></div><span className="profile-badge"><span />Open to study together</span></div>
      <p className="profile-bio">{profile.bio}</p>
    </section>
    <section className="panel-card profile-details card">
      <div className="tabs" role="tablist" aria-label="Profile sections">
        {["Courses", "Groups", "Activity"].map((tab) => <button key={tab} type="button" role="tab" aria-selected={activeTab === tab} className={`tab-button ${activeTab === tab ? "tab-active" : ""}`} onClick={() => setActiveTab(tab)}>{tab}</button>)}
      </div>
      {activeTab === "Courses" && <div className="profile-courses"><div className="section-heading"><div><h2>{isOwner ? "My courses" : "Courses"}</h2><p>Classes this student is learning in</p></div>{isOwner && <button className="text-link" onClick={() => setEditing(true)}>Manage courses <span>→</span></button>}</div><div className="course-grid">{profile.courses.map((course, index) => <div className="course-card" key={course}><span className={`course-symbol symbol-${index % 4}`}><Icon name={course === "CSE341" ? "code" : "book"} size={19} /></span><div><strong>{course}</strong><span>{courseNames[course] ?? "Course"}</span></div><span className="course-check"><Icon name="check" size={16} /></span></div>)}</div></div>}
      {activeTab === "Groups" && <div className="profile-courses"><div className="section-heading"><div><h2>{isOwner ? "My groups" : "Study groups"}</h2><p>Study circles this student is a part of</p></div></div>{profileGroups.length ? <div className="profile-group-list">{profileGroups.map((group) => <Link className="profile-group-row" href={`/study-groups/${group.id}`} key={group.id}><span className={`group-icon group-${group.color}`}><Icon name={group.icon} size={19} /></span><strong>{group.name}</strong><span className="text-link">View members →</span></Link>)}</div> : <p className="profile-empty">No study groups to show yet.</p>}</div>}
      {activeTab === "Activity" && <div className="profile-courses"><div className="section-heading"><div><h2>Recent activity</h2><p>{isOwner ? "Your latest steps on StudyPal" : "Recent public profile activity"}</p></div></div>{isOwner ? <div className="activity-list"><p><span className="activity-marker" />Joined <strong>CSE341 Study Group</strong><small>Today · 9:42 AM</small></p><p><span className="activity-marker purple-marker" />Connected with <strong>Sarah Johnson</strong><small>Yesterday · 4:18 PM</small></p><p><span className="activity-marker cyan-marker" />Added <strong>CSE341</strong> to your courses<small>Monday · 11:05 AM</small></p></div> : <p className="profile-empty">No public activity to show yet.</p>}</div>}
    </section>
    {editing && <div className="modal-backdrop" role="presentation" onClick={() => setEditing(false)}><div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="edit-profile-title" onClick={(event) => event.stopPropagation()}><button className="modal-close icon-button" onClick={() => setEditing(false)} aria-label="Close"><Icon name="close" /></button><span className="modal-icon"><Icon name="user" /></span><h2 id="edit-profile-title">Profile editing is coming soon</h2><p>Your sample profile is read-only for now. Profile updates will be available when StudyPal connects to its API.</p><button className="button button-primary" onClick={() => setEditing(false)}>Got it</button></div></div>}
  </DashboardShell>;
}
