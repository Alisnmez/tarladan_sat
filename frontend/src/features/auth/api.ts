import type {
  LoginResponse,
  LoginPayload,
  RegisterPayload,
  RegisterResponse,
} from "./types";

const BACKEND_ORIGIN = `${window.location.protocol}//${window.location.hostname}:8000`;
const API_BASE_URL = `${BACKEND_ORIGIN}/api`;


function getCookie(name: string) {
  const value = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));

  return value ? decodeURIComponent(value.split("=")[1]) : null;
}


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
  await csrfCookieRequest();

  const xsrfToken = getCookie("XSRF-TOKEN");

  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-XSRF-TOKEN": xsrfToken ?? "",
    },
    body: JSON.stringify(payload),
  });

  const data = (await response.json()) as LoginResponse;

  if (!response.ok) {
    throw data;
  }

  return data;
}

export async function meRequest() {
  const response = await fetch(`${API_BASE_URL}/me`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw data;
  }

  return data;
}
export async function csrfCookieRequest() {
  await fetch(`${BACKEND_ORIGIN}/sanctum/csrf-cookie`, {
    method: "GET",
    credentials: "include",
  });
}
