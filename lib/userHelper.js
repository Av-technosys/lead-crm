import { userTable } from "../db/schema";

export async function insertUser({
  name = "",
  email = "",
  password = "",
  isPasswordByAdmin = false,
  role = "",
}) {
  return await db
    .insert(userTable)
    .values({
      name,
      email,
      password,
      isPasswordByAdmin,
      role,
      lastActiveAt: new Date(),
    });
}
