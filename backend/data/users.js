import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    passsword: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Monirul",
    email: "monirul@gmail.com",
    passsword: bcrypt.hashSync("monirul123", 10),
  },
  {
    name: "Kamru",
    email: "kamru@gmail.com",
    passsword: bcrypt.hashSync("kamru69", 10),
  },
  {
    name: "Captain Levi",
    email: "caplevi@yahoo.com",
    passsword: bcrypt.hashSync("levi1234", 10),
  },
];

export default users;
