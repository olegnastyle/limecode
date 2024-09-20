<template>
    <nav>
        <ul>
            <li><nuxt-link to='/'>Главная</nuxt-link></li>
            <li><strong>{{ post.title }}</strong></li>
        </ul>
    </nav>
    <main>
        <div>
            <img src="https://blog.mann-ivanov-ferber.ru/wp-content/uploads/2017/11/untit.jpg" alt="Нет обложки">
            <h1>{{ post.title }}</h1>
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
    nav ul {
        display: flex;
        gap: 10px;
        list-style: none;
        padding: 0;
    }

    nav li {
        display: flex;
        gap: 10px;
    }

    nav li:first-child::before {
        display: none;
    }

    nav li::before {
        content: "»";
    }

    img {
        width: 100%;
        height: 240px;
        object-fit: cover;
        border-radius: 10px;
    }
</style>