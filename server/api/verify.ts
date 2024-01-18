import { prisma } from "../prisma"

export default defineEventHandler(async(event) => {
  const token = getCookie(event, "token")
  const user = await prisma.user.findUnique({
    where: {
      token: token,
    },
  });

  if (!user) return 401;

  return user;
})