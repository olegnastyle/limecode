<template>
    <header>
        <h2>Главная страница</h2>
    </header>
    <main>
        <article v-for="(post, index) in posts" :key="post.id">
            <h3>{{ post.attributes.title }}</h3>
            <img :src=home_url+post.attributes.cover.data.attributes.formats.thumbnail.url alt="Обложка статьи">
            <p>{{ post.attributes.desc }}</p>
            <!-- <ul>
                <li v-for="tag in post.tags" :key="tag.id">
                    {{ tag }}
                </li>
            </ul> -->
            <nuxt-link :to="'/post/' + post.id">Подробнее</nuxt-link>
        </article>
    </main>
</template>

<style scoped>
    main {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
    }

    article {
        border-radius: 10px;
        background-color: brown;
        color: wheat;
        padding: 10px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    } 

    article h3 {
        height: -webkit-fill-available;
    }

    article img {
        width: 100%;
        height: 180px;
        object-fit: cover;
        border-radius: 5px;
    }

    article a {
        padding: 10px;
        background-color: wheat;
        color: brown;
        text-decoration: none;
        text-align: center;
        display: block;
        border-radius: 5px;
    }
</style>

<script setup>
  const json = await $fetch('http://localhost:1337/api/posts?populate=*')
  const posts = json.data

  const home_url = "http://localhost:1337"
</script>