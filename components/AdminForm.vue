<script setup lang=ts>
const name = ref("")
const email = ref("")
const password = ref("")

const createAdmin = async () => {
    $fetch("/api/createAdmin", {
        method: "POST",
        body: {
            name: name.value,
            email: email.value,
            password: password.value,
            admin: true
        }
    })
}
</script>

<template>
    <form @submit="createAdmin">
        <input type="email" v-model="email" placeholder="Email">
        <input type="password" v-model="password" placeholder="Password">
        <input type="submit" value="Register">
    </form>
</template>

<style scoped lang=scss></style>