import { prisma } from "../prisma"

export default defineEventHandler(async(event) => {
    const token:any = window.localStorage.getItem("token");

    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(token),
      },
    });
  
    if (!user) return 404;
  
    return user;
})
