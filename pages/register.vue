<script setup lang=ts>
import { ref } from "vue"

const name = ref("")
const email = ref("")
const password = ref("")

async function register() {
    $fetch("/api/createUser", {
        method: "POST",
        body: {
            name: name.value,
            email: email.value,
            password: password.value
        }
    }).then((res) => {
        console.log(res)
        window.location.href = "/login"
    })
}
</script>

<template>
    <input type="text" v-model="name" placeholder="Name">
    <input type="email" v-model="email" placeholder="Email">
    <input type="password" v-model="password" placeholder="Password">
    <input type="submit" @click="register" value="Register">
</template>

<style scoped lang=scss></style>