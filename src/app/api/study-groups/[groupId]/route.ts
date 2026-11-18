import { placeholderResponse } from "@/app/api/_placeholder";

export function GET() { return placeholderResponse("GET", "/api/study-groups/{groupId}"); }
export function PATCH() { return placeholderResponse("PATCH", "/api/study-groups/{groupId}"); }
export function DELETE() { return placeholderResponse("DELETE", "/api/study-groups/{groupId}"); }
