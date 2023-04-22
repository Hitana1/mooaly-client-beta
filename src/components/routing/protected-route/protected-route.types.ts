import type { Route } from "@/utils/types";

export type ProtectedRouteProps = Pick<Route, "title" | "element" | "meta">;
