import { prisma } from "../prisma";
import crypto from "crypto";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const sha256 = crypto.createHash("sha256");

  const passwordHash = sha256.update(body.password).digest("hex");

  const loginUser = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (!loginUser) return 404;
  else if (loginUser.password !== passwordHash) return 401;

  return loginUser;
});
