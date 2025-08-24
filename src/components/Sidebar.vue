
<script setup lang="ts">
    import router from '@/router';
</script>
<template>
<div class="sidebar">
    <h1>mololo</h1>
    <nav>
        <RouterLink to="/"><img src="../img/game-icons--skills.png" alt=""> <span>skills we</span></RouterLink>
        <a href=""><img src="../img/game-icons--skills.png" alt=""> <span>skills we</span></a>
        <a href=""><img src="../img/game-icons--skills.png" alt=""> <span>skills we</span></a>
        <a href=""><img src="../img/game-icons--skills.png" alt=""> <span>skills we</span></a>
        <a href=""><img src="../img/game-icons--skills.png" alt=""> <span>skills we</span></a>
        <a href=""><img src="../img/game-icons--skills.png" alt=""> <span>skills we</span></a>
        <a href=""><img src="../img/game-icons--skills.png" alt=""> <span>skills we</span></a>
    </nav>
</div>
</template>
<style scoped>
img{
    height: 2rem;
}
.sidebar{
    display: flex;
    gap: 3rem;
    background-color: rgb(48, 141, 223);
    position: fixed;
    left: 0;
    bottom: 0;
    width: 20rem;
    height: 55rem;
    flex-direction: column;
    border-top-right-radius: 7rem;
    padding-left: 2rem;
    padding-top: 4rem;
}
.sidebar nav{
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}
.sidebar nav a{
    display: flex;
    align-items: center;
    gap: 1rem;
    color: aliceblue;
    font-weight: bold;
}
.sidebar nav a:hover{
    color: rgb(176, 216, 250);
}
.sidebar h1{
    background-color: rgb(255, 255, 255);
    padding: 0.6rem;
    border-radius: 10rem;
    margin-right: 3rem;
    color: rgb(48, 141, 223);
    text-align: center;
}
</style>