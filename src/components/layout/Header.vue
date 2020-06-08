<template>
    <header class="header">
        <h1>to-do task list</h1>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
    </header>

</template>

<script>
    export default  {
        name: "Header"
    }

</script>

<style scoped>
    .header {
        background: #333;
        color: #fff;
        text-align: center;
        padding: 10px;
    }
    .header a {
        color: #ffffff;
        padding-right: 5px;
        text-decoration: none;
    }

    .header div > a{
        color: #fff;
    }

    .router-link-exact-active router-link-active {
        color: red;
    }
</style>