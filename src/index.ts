import { UserList } from "./views/UserList";
import { Collection } from "./models/Collection";
import { UserProps, User } from "./models/User";

const rootUrl = "http://localhost:3000/users";
const users = new Collection(rootUrl, (json: UserProps) => {
  return User.buildUser(json);
});

users.on("change", () => {
  const root = document.querySelector("#root");
  if (root) {
    const userList = new UserList(root, users);
    userList.render();
  }
});

users.fetch();
