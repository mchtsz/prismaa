import crypto from "crypto";
import { prisma } from "../prisma";

export async function userLogin(user: { email: string; password: string }) {
  const sha256 = crypto.createHash("sha256");

  const passwordHash = sha256.update(user.password).digest("hex");

  const loginUser = await prisma.user.findUnique({
    where: {
      email: user.email,
    },
  });

  if (!loginUser) return 404;
  else if (loginUser.password !== passwordHash) return 401;

  return loginUser;
}

export async function userVerify(token: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(token),
    },
  });

  if (!user) return 404;

  return user;
}
