<script setup lang=ts>
function GetUser() {
    $fetch("/api/verify", {
        method: "GET",
    }).then((data) => {
        console.log(data)
    })
}

GetUser()
</script>

<template>

</template>

<style scoped lang=scss>

</style>