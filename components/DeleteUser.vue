<script setup lang=ts>
const email = ref("")

const deleteUser = async () => {
    $fetch("/api/deleteUser", {
        method: "POST",
        body: JSON.stringify({
            email: email.value
        })
    })
}
</script>

<template>
    <form @submit="deleteUser">
        <h2>Slett bruker med å skrive inn email</h2>
        <input type="text" v-model="email">
    </form>
</template>

<style scoped lang=scss>
form {
    h2 {
        color: #fff;
    }
}
</style>