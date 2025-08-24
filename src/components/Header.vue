<template>
    <header>
        <div class="logo">
            <img src="../img/guidance--bank.png" alt="">
            <h1>BCDC</h1>
        </div>
        <input type="search" placeholder="recherche ...">
        <div class="icon">
            <img src="../img/iconamoon--notification-bold.png" alt="">
            <img src="../img/material-symbols--help-outline-rounded.png" alt="">
            <img src="../img/tdesign--setting-1.png" alt="">
        </div>
        <div class="menu">
            <img src="../img/ri--menu-3-fill.png" alt="">
        </div>

    </header>
</template>
<style scoped>
img{
    height: 2rem;
}
header{
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0.5rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}
header .logo{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}
header .logo img{
    height: 3rem;
    width: 4rem;
}
header .logo h1{
    color: rgb(24, 126, 214);
    font-weight: bold;
    font-size: 3rem;
}
header input{
    padding: 1rem;
    width: 29rem;
    background-color: rgb(220, 223, 224);
    border-radius: 10rem    ;
    border: none;
    font-size: 1.1rem;
}
header .icon{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
}
</style>