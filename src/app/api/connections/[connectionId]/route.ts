import { placeholderResponse } from "@/app/api/_placeholder";

export function PATCH() { return placeholderResponse("PATCH", "/api/connections/{connectionId}"); }
export function DELETE() { return placeholderResponse("DELETE", "/api/connections/{connectionId}"); }
