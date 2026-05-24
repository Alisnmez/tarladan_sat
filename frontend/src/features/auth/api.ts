import type {
  LoginResponse,
  LoginPayload,
  RegisterPayload,
  RegisterResponse,
} from "./types";

const API_BASE_URL = "http://127.0.0.1:8000/api";

export async function registerRequest(
  payload: RegisterPayload,
): Promise<RegisterResponse> {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await response.json()) as RegisterResponse;

  if (!response.ok) {
    throw data;
  }

  return data;
}

export async function loginRequest(
  payload: LoginPayload,
): Promise<LoginResponse> {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await response.json()) as LoginResponse;

  if (!response.ok) {
    throw data;
  }

  return data;
}
