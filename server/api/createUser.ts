import { prisma } from "../prisma";
import crypto from "crypto";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const sha256 = crypto.createHash("sha256");
  const createPassword = sha256.update(body.password).digest("hex");

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: createPassword
    },
  });

  setCookie(event, "token", user.token, {
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 365 * 10, // 10 years
  })

  // Include the token in the response
  return user;
});