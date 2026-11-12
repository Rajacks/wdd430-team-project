import Link from "next/link";
import { notFound } from "next/navigation";
import { DashboardShell } from "@/components/DashboardShell";
import { GroupMembers } from "@/components/GroupMembers";
import { Icon } from "@/components/Icon";
import { studyGroups } from "@/lib/sample-data";

export default async function StudyGroupDetailsPage({
  params,
}: {
  params: Promise<{ groupId: string }>;
}) {
  const { groupId } = await params;
  const group = studyGroups.find((item) => item.id === groupId);

  if (!group) notFound();

  return <DashboardShell>
    <div className="page-heading">
      <div>
        <span className="eyebrow">STUDY GROUP</span>
        <h1>{group.name}</h1>
        <p>Meet the students learning together in this group.</p>
      </div>
      <Link className="button button-outline" href="/study-groups"><Icon name="arrow" size={16} />All groups</Link>
    </div>
    <section className="group-detail-panel card">
      <div className="group-detail-heading">
        <span className={`group-icon group-${group.color}`}><Icon name={group.icon} size={23} /></span>
        <div><span className="course-tag">{group.course}</span><p>{group.activity}</p></div>
      </div>
      <GroupMembers groupId={group.id} />
    </section>
  </DashboardShell>;
}
