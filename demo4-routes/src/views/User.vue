
<style lang="scss" scoped>
    .user {
        border: solid 1px red;
        height: 90vh;
        .info-user {
            border: solid 1px green;
        }
        .link{
            color: green;
        }
    }
</style>


<template>
    <div class="user">
        <router-link to="/user/profile">Profile</router-link>    |
        <router-link class="link" to="/user/edit">Edit</router-link>
        <br/>
        <router-view class="info-user"/>
    </div>
</template>
