import { meRequest } from "../api";
import { setAuthSession, clearAuthSession } from "../authSession";

export async function checkAuth(): Promise<boolean> {
  try {
    const data = await meRequest();

    if (data.data?.user) {
      setAuthSession(data.data.user);
      return true;
    }

    clearAuthSession();
    return false;
  } catch {
    clearAuthSession();
    return false;
  }
}