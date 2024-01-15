<script setup lang=ts>
import { prisma } from "../server/prisma"

const login = async () => {
    const user = await prisma.user.findUnique({
        where: {
            email: `${input.email}`
        }
    })
}

const input = {
    email: "",
    password: ""
}
</script>

<template>
    <form action="
    ">
    <input type="text" :value="input.email">
    </form>
</template>

<style scoped lang=scss></style>