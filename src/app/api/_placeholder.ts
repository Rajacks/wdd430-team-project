export type PlaceholderMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export function placeholderResponse(method: PlaceholderMethod, endpoint: string) {
  return Response.json({
    implemented: false,
    status: "not_connected",
    message: "This API endpoint is not implemented yet.",
    method,
    endpoint,
    data: null,
  }, { status: 501 });
}
