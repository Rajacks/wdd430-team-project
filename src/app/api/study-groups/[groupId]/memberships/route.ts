import { placeholderResponse } from "@/app/api/_placeholder";

export function POST() { return placeholderResponse("POST", "/api/study-groups/{groupId}/memberships"); }
export function DELETE() { return placeholderResponse("DELETE", "/api/study-groups/{groupId}/memberships"); }
