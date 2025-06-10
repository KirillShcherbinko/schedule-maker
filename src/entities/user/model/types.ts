export type TUser = {
  id: number;
  email: string;
  refreshToken: string;
  accessToken: string;
};

export type TStoreState = {
  user: TUser | null;
};

export type TStoreAction = {
  setUser: (user: TUser) => void;
};
