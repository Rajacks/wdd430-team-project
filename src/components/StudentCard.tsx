import Link from "next/link";
import type { Student } from "@/lib/sample-data";
import { Avatar } from "./Avatar";
import { Icon } from "./Icon";

export function StudentCard({ student }: { student: Student }) {
  return <article className="student-card card">
    <div className="student-card-top"><Avatar initials={student.initials} color={student.color} size="lg" /></div>
    <h3>{student.name}</h3><p className="student-program">{student.program ?? student.interest}</p>
    <div className="student-courses">{student.courses.map((course) => <span className="course-tag" key={course}>{course}</span>)}</div>
    <Link href={student.id === "taeg-dayley" ? "/profile/taeg-dayley" : "/profile"} className="button button-outline button-small student-view">View profile <Icon name="arrow" size={15} /></Link>
  </article>;
}
