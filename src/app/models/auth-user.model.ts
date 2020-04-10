export interface AuthUser {
  userId: string;
  phoneNo: string;
  email?: string;
  fullName: string;
  avatarUrl?: string;
  accessToken: string;
  refreshToken: string;
}
