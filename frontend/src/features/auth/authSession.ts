import type { AuthUser } from "./types";

const AUTH_STORAGE_KEY = "tarladan_sat_auth";

function normalizeAuthUser(user: AuthUser): AuthUser {
  return {
    ...user,
    role: user.role === "seller" || user.role === "admin" ? user.role : "buyer",
  };
}

export function setAuthSession(user: AuthUser): void {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(normalizeAuthUser(user)));
}

export function getAuthSession(): AuthUser | null {
  const raw = localStorage.getItem(AUTH_STORAGE_KEY);

  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw) as Omit<AuthUser, "role"> & { role?: string };

    return normalizeAuthUser({
      ...parsed,
      role:
        parsed.role === "producer"
          ? "seller"
          : (parsed.role as AuthUser["role"]),
    });
  } catch {
    return null;
  }
}

export function clearAuthSession(): void {
  localStorage.removeItem(AUTH_STORAGE_KEY);
}

export function isAuthenticated(): boolean {
  return getAuthSession() !== null;
}

export function getAuthRole(): string | null {
  const user = getAuthSession();

  return user?.role ?? null;
}
