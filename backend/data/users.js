import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Monirul",
    email: "monirul@gmail.com",
    password: bcrypt.hashSync("monirul123", 10),
  },
  {
    name: "Kamru",
    email: "kamru@gmail.com",
    password: bcrypt.hashSync("kamru69", 10),
  },
  {
    name: "Captain Levi",
    email: "caplevi@yahoo.com",
    password: bcrypt.hashSync("levi1234", 10),
  },
];

export default users;
