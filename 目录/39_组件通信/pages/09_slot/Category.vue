<template>
    <div class="category">
        <h2>{{ title }}</h2>
        <slot></slot>
    </div>
</template>

<script setup lang="ts" name="Category">
    import { ref,reactive } from 'vue'

    
    defineProps(['title'])
</script>

<style scoped>
.category {
    background-color: skyblue;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    padding: 10px;
    width: 200px;
    height: 300px;
}
h2{
    background-color: orange;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
}
</style>