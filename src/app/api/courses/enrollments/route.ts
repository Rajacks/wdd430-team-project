import { placeholderResponse } from "@/app/api/_placeholder";

export function POST() { return placeholderResponse("POST", "/api/courses/enrollments"); }
export function DELETE() { return placeholderResponse("DELETE", "/api/courses/enrollments"); }
