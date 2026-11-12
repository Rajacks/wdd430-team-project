export type Student = {
  id: string;
  name: string;
  initials: string;
  courses: string[];
  program?: string;
  interest?: string;
  color: string;
};

export type StudyGroup = {
  id: string;
  name: string;
  course: string;
  memberIds: string[];
  activity: string;
  color: string;
  icon: "code" | "book" | "database";
  joined?: boolean;
  createdByMe?: boolean;
};

export type StudentProfile = {
  name: string;
  initials: string;
  program: string;
  bio: string;
  courses: string[];
  groupIds: string[];
  color?: string;
};

export const studentProfile: StudentProfile = {
  name: "Emmanuel Ndogo",
  initials: "EN",
  program: "Computer Science",
  bio: "Passionate about software development and learning new technologies. Always up for collaborating on a great idea.",
  courses: ["CSE111", "CSE210", "CSE341", "ITM111"],
  groupIds: ["cse341", "web-dev", "database"],
};

export const taegProfile: StudentProfile = {
  name: "Taeg Dayley",
  initials: "TD",
  program: "StudyPal student",
  bio: "Always learning, building, and looking for good people to study alongside.",
  courses: ["CSE210", "CSE341"],
  groupIds: ["cse341"],
  color: "cyan",
};

export const students: Student[] = [
  { id: "taeg-dayley", name: taegProfile.name, initials: taegProfile.initials, courses: taegProfile.courses, program: taegProfile.program, interest: "Collaborative learning", color: "cyan" },
  { id: "sarah", name: "Sarah Johnson", initials: "SJ", courses: ["CSE341", "CSE210"], interest: "Frontend development", color: "coral" },
  { id: "david", name: "David Wilson", initials: "DW", courses: ["CSE341", "ITM111"], interest: "Cloud computing", color: "blue" },
  { id: "grace", name: "Grace Oyekachi", initials: "GO", courses: ["CSE210", "CSE340"], interest: "UI/UX design", color: "purple" },
  { id: "michael", name: "Michael Brown", initials: "MB", courses: ["CSE341"], interest: "Machine learning", color: "green" },
  { id: "jessica", name: "Jessica Taylor", initials: "JT", courses: ["ITM111", "CSE210"], interest: "Product design", color: "gold" },
  { id: "olivia", name: "Olivia Martin", initials: "OM", courses: ["CSE111", "CSE341"], interest: "Web accessibility", color: "pink" },
];

const emmanuelStudent: Student = {
  id: "emmanuel-ndogo",
  name: studentProfile.name,
  initials: studentProfile.initials,
  courses: studentProfile.courses,
  program: studentProfile.program,
  interest: "Software development",
  color: "blue",
};

export const studyGroups: StudyGroup[] = [
  { id: "cse341", name: "CSE341 Study Group", course: "CSE341", memberIds: ["emmanuel-ndogo", "taeg-dayley", "sarah", "david", "michael", "olivia"], activity: "Active now", color: "blue", icon: "code", joined: true, createdByMe: true },
  { id: "web-dev", name: "Web Development Club", course: "CSE210", memberIds: ["emmanuel-ndogo", "taeg-dayley", "sarah", "grace", "jessica", "olivia"], activity: "2h ago", color: "purple", icon: "book", joined: true },
  { id: "database", name: "Database Learners", course: "CSE340", memberIds: ["emmanuel-ndogo", "david", "grace", "michael"], activity: "1 day ago", color: "cyan", icon: "database", joined: true },
  { id: "itm-study", name: "ITM111 Study Circle", course: "ITM111", memberIds: ["emmanuel-ndogo", "david", "jessica"], activity: "Yesterday", color: "orange", icon: "book" },
  { id: "algo-lab", name: "Algorithms Lab", course: "CSE210", memberIds: ["emmanuel-ndogo", "taeg-dayley", "michael", "olivia"], activity: "3h ago", color: "green", icon: "code" },
  { id: "tech-talk", name: "Tech & Tea", course: "CSE111", memberIds: ["sarah", "grace", "jessica"], activity: "Monday", color: "pink", icon: "database" },
];

export const connections = [students[0], students[2], students[3], students[4], students[5]];
export const invitations = [students[3], students[4]];

const groupMemberDirectory = new Map(
  [emmanuelStudent, ...students].map((student) => [student.id, student]),
);

export function getStudyGroupMembers(groupId: string): Student[] {
  const group = studyGroups.find((item) => item.id === groupId);
  if (!group) return [];

  return group.memberIds.flatMap((id) => {
    const student = groupMemberDirectory.get(id);
    return student ? [student] : [];
  });
}
