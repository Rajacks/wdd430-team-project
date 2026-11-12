"use client";

import { useEffect, useState } from "react";
import { Avatar } from "@/components/Avatar";
import { Icon } from "@/components/Icon";
import { getStudyGroupMembers } from "@/lib/sample-data";

type MembersApiResponse = {
  implemented: boolean;
  message?: string;
};

export function GroupMembers({ groupId }: { groupId: string }) {
  const members = getStudyGroupMembers(groupId);
  const [apiMessage, setApiMessage] = useState("Checking the group members API. Showing the sample roster.");

  useEffect(() => {
    let active = true;

    async function checkMembersApi() {
      try {
        const response = await fetch(`/api/study-groups/${encodeURIComponent(groupId)}/members`);
        const result = await response.json() as MembersApiResponse;

        if (!active) return;
        if (!response.ok || !result.implemented) {
          setApiMessage("The members API is not connected yet. This is a sample roster.");
          return;
        }

        setApiMessage("Showing sample group members.");
      } catch (error) {
        if (!active) return;
        const detail = error instanceof Error ? error.message : "Unknown network error";
        setApiMessage(`Could not check the members API: ${detail}. Showing the sample roster.`);
      }
    }

    void checkMembersApi();
    return () => { active = false; };
  }, [groupId]);

  return <div className="group-members-section">
    <div className="section-heading">
      <div><h2>Group members</h2><p>Everyone in this study group</p></div>
    </div>
    <p className="group-api-status" role="status">{apiMessage}</p>
    {members.length ? <div className="group-members-grid">
      {members.map((student) => <article className="group-member-card card" key={student.id}>
        <Avatar initials={student.initials} color={student.color} size="md" />
        <div className="group-member-copy">
          <strong>{student.name}</strong>
          <span>{student.program ?? student.interest}</span>
          <div className="student-courses">{student.courses.map((course) => <span className="course-tag" key={course}>{course}</span>)}</div>
        </div>
        <Icon name="users" size={17} />
      </article>)}
    </div> : <p className="profile-empty">No sample members are listed for this group yet.</p>}
  </div>;
}
