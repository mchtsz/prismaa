import { prisma } from "../prisma";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const deleteUser = prisma.user.delete({
        where: {
            email: body.email
        }
    })

    if(!deleteUser) return 404;
    return deleteUser; 
});