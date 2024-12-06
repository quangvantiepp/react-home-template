interface AuthDataType {
  accessToken: string | null;
  tokenType: "Bearer";
  userDto: {
    id: number;
    fullName: string;
    userName: string;
    roleSet: [] | null;
  };
}

export const handleLocalStorage = {
  setAuthInfo: (value: AuthDataType | null) => {
    localStorage.setItem("auth", JSON.stringify(value));
  },
  getAuthInfo: () => {
    let authValue = localStorage.getItem("auth") || "";
    let obj: AuthDataType = JSON.parse(authValue);
    return obj;
  },
};
