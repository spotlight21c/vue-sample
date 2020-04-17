<template>
    <div id="helloworld">
        <span>{{ word1 }} {{ word2 }}</span>
    </div>
</template>

<script>
export default {
    name: "app",
    data: () => {
        return {
            word1: "Hello",
            word2: "User"
        };
    }
};
</script>
