<template>
    <main>
        <div>
            <img src="https://blog.mann-ivanov-ferber.ru/wp-content/uploads/2017/11/untit.jpg" alt="Нет обложки">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
            <ul v-for="tag in  post.tags" :key="tag.id">
                <li>{{ tag }}</li>
            </ul>
        </div>
    </main>
</template>

<script setup>
    const { id } = useRoute().params
    const post = await $fetch(`https://dummyjson.com/post/${id}`)
</script>

<style scoped>
    img {
        width: 100%;
        height: 240px;
        object-fit: cover;
    }
</style>