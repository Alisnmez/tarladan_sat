export type RegisterPayload = {
  first_name: string;
  last_name: string;
  email: string;
  city: string;
  role: "buyer" | "seller";
  password: string;
  password_confirmation: string;
};

export type LoginPayload = {
  email: string;
  password: string;
  remember?: boolean;
};

export type ForgotPasswordPayload = {
  email: string;
};

export type LoginResponse = {
  success: boolean;
  message: string;
  data?: {
    user: AuthUser;
  };
  errors?: {
    email?: string[];
    password?: string[];
  };
};

export type ForgotPasswordResponse = {
  success: boolean;
  message: string;
  errors?: {
    email?: string[];
  };
};

export type AuthUser = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role: "buyer" | "seller" | "admin";
  phone: string | null;
  city: string | null;
  status: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
};

export type RegisterResponse = {
  success: boolean;
  message: string;
  data?: {
    user: AuthUser;
  };
  errors?: {
    city?: string[];
    role?: string[];
    first_name?: string[];
    last_name?: string[];
    email?: string[];
    password?: string[];
    password_confirmation?: string[];
  };
};
