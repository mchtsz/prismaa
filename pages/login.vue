<script setup lang="ts">
const email = ref("");
const password = ref("");

const login = async () => {
    const user = await $fetch("/api/login", {
        method: "POST",
        body: {
            email: email.value,
            password: password.value
        }
    })

    if (typeof user == "number") {
        return
    }

    navigateTo("/")
};

const onSubmit = (event: Event) => {
    event.preventDefault();
    login();
};
</script>

<template>
    <form @submit="onSubmit">
        <input type="text" v-model="email" placeholder="Email">
        <input type="password" v-model="password" placeholder="Password">
        <input type="submit" value="Login">
    </form>
</template>

<style scoped lang="scss"></style>