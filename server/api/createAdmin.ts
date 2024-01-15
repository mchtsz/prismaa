import { prisma } from "../prisma";
import crypto from "crypto";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const sha256 = crypto.createHash("sha256");
  const createPassword = sha256.update(body.password).digest("hex");

  return await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: createPassword,
      admin: body.admin
    },
  });
});
