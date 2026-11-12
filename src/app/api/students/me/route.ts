import { placeholderResponse } from "@/app/api/_placeholder";

export function GET() { return placeholderResponse("GET", "/api/students/me"); }
export function PATCH() { return placeholderResponse("PATCH", "/api/students/me"); }
