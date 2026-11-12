import { ProfileView } from "@/components/ProfileView";
import { studentProfile } from "@/lib/sample-data";

export default function ProfilePage() {
  return <ProfileView profile={studentProfile} isOwner />;
}
