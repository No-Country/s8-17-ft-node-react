export interface UserAuth {
  email: string;
  password: string;
}

export interface UserRegister extends UserAuth {
  name: string;
}

export interface UserProfile {
  lastName: string;
  picture: string;
  nationality: string;
}
