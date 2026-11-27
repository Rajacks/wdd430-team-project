import { ProfileView } from "@/components/ProfileView";
import { taegProfile } from "@/lib/sample-data";

export default function TaegDayleyProfilePage() {
  return <ProfileView profile={taegProfile} />;
}
