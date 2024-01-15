<script setup lang=ts>
const name = ref("")
const email = ref("")
const password = ref("")

async function createAdmin() {
    $fetch("/api/createAdmin", {
        method: "POST",
        body: {
            name: name.value,
            email: email.value,
            password: password.value,
            admin: true
        }
    }).then((res) => {
        console.log(res)
        window.location.href = "/admin"
    })
}
</script>

<template>
    <input type="email" v-model="email" placeholder="Email">
    <input type="password" v-model="password" placeholder="Password">
    <input type="submit" @click="createAdmin" value="Register">
</template>

<style scoped lang=scss></style>