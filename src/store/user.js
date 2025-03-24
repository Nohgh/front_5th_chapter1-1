// export const getUser = () => {
//   let user = JSON.parse(localStorage.getItem("user"));

//   let username = user?.username;
//   let email = user?.email;
//   let bio = user?.bio;

//   return { username, email, bio };
// };

// export const setUser = ({ username = "", email = "", bio = "" }) => {
//   localStorage.setItem("user", JSON.stringify({ username, email, bio }));
// };

// export const clearUser = () => {
//   localStorage.removeItem("user");
// };

//class로 관리 테스트

export default class User {
  constructor() {
    this.user = JSON.parse(localStorage.getItem("user")) || {};
  }

  set({ username = "", email = "", bio = "" }) {
    this.user = {
      username,
      email,
      bio,
    };
  }

  get() {
    return this.user;
  }

  save() {
    localStorage.setItem("user", JSON.stringify(this.user));
  }
  clear() {
    localStorage.removeItem("user");
  }
}
