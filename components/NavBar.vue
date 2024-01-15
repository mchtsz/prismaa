<script setup lang=ts>

</script>

<template>
    <nav>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/register">register</NuxtLink>
        <NuxtLink to="/login">login</NuxtLink>
    </nav>
</template>

<style scoped lang=scss>
    nav {
        background-color: #d1482a;
        height: 4rem;
        align-items: center;
        justify-content: space-evenly;

        a {
            transition: 0.2s ease-in-out;
            text-transform: uppercase;

            &:hover {
                transform: scale(1.2);
            }
        }
    }
</style>