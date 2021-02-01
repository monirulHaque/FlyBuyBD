import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    passsword: bcrypte.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Monirul",
    email: "monirul@gmail.com",
    passsword: bcrypte.hashSync("monirul123", 10),
  },
  {
    name: "Kamru",
    email: "kamru@gmail.com",
    passsword: bcrypte.hashSync("kamru69", 10),
  },
  {
    name: "Captain Levi",
    email: "caplevi@yahoo.com",
    passsword: bcrypte.hashSync("levi1234", 10),
  },
];

export default users;
