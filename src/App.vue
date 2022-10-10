<template>
    <div id="app">
        <!--<NavBar />-->
        <div class="auth-wrapper">
            <div class="auth-inner">
                <img src="https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-6/305768800_545012787385047_5264905314977368183_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=o58yXUPkO_MAX_AwtmK&_nc_ht=scontent-ams4-1.xx&oh=00_AT-yqyfySGj-rkhVrUZ-Hhd857Ho_FFRcW7RBA11Zl-wzA&oe=634444C8" alt="De Loods" style="width:350px;height:350px;">
                <LoginScreen />
            </div>
        </div>
    </div>
</template>

<script>
    //import NavBar from './components/Nav.vue'
    //import HomeScreen from './components/Home.vue'
    import LoginScreen from './components/Login.vue'

export default {
        name: 'App',
        components: {
            //NavBar,
            //HomeScreen,
            LoginScreen
        }
}
</script>
    
<style>
    @import url('https://fonts.googleapis.com/css?family=Fira+Sans:300,500,600,700,800');

    * {
        box-sizing: border-box;
    }

    body {
        background: #ffffff;
        min-height: 100vh;
        display: flex;
        font-weight: 400;
        font-family: 'Fira Sans', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, label, span {
        font-weight: 500;
        font-family: 'Fira Sans', sans-serif;
    }

    body, html, #app, #root, .auth-wrapper {
       width: 100%;
       height: 100%;
    }

    #app {
        text-align: center;
    }

    .navbar-light {
        background-color: #ffffff;
        box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    }

    .auth-wrapper {
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: left;
    }

    .auth-inner {
        width: 450px;
        margin: auto;
        background-color: #ffffff;
        box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
        padding: 40px 55px 45px 55px;
        border-radius: 15px;
        transition: all .3s;
    }

    .auth-wrapper .form-control:focus {
        border-color: #167bff;
        box-shadow: none;
    }

    .auth-wrapper h3 {
        text-align: center;
        margin: 0;
        line-height: 1;
        padding-bottom: 20px;
    }

    .auth-wrapper h5 {
        color: rgb(33,66,73);
        text-align: center;
        margin: 10px;
        line-height: 1;
        padding-top: 25px;
    }

    .btn-primary {
        border-color: rgb(33,66,73);
        border-width: 2px;
        background-color: rgb(65,107,128);
        text-align: center;
        margin-top: 50px;
        line-height: 2;
        width: 100%;
    }

    .btn-primary:hover {
        color: #ffffff;
        background-color: rgb(101,125,110);
        border-color: rgb(35,31,32)
    }

    .custom-control-label {
        font-weight: 400;
    }

    .forgot-password,
    .forgot-password a {
        text-align: right;
        font-size: 13px;
        padding-top: 10px;
        color: #7f7d7d;
        margin: 0;
    }

    .forgot-password a {
        color: #167bff;
    }
</style>
