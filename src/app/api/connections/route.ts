import { placeholderResponse } from "@/app/api/_placeholder";

export function GET() { return placeholderResponse("GET", "/api/connections"); }
export function POST() { return placeholderResponse("POST", "/api/connections"); }
