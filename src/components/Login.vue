<template>
    <div class="auth-wrapper">
        <div class="auth-inner">
            <img src="../assets/loods_logo.png" alt="de loods" style="width:100%;">
            <form id="signup-form" action="#">
                <div class="form-group">
                    <h3 id="naam">Vul hier je naam in</h3>
                    <input type="text"
                        class="form-control"
                        placeholder="Naam"
                        v-model="$store.state.name"
                        required />
                </div>

                <div class="form-group">
                    <h3>Vul hier je kenteken in</h3>
                    <input type="text"
                        class="form-control"
                        placeholder="X-999-XX"
                        v-model="$store.state.licenseplate"
                        required />
                </div>

                <div class="form-group">
                    <h3>Vul hier je email in</h3>
                    <input type="email"
                        class="form-control"
                        placeholder="Email"
                        v-model="$store.state.email"
                        required />
                </div>
                <button class="btn btn-primary btn-block" @click="$router.push('information')">
                    Login
                </button>
            </form>
        </div>
    </div>
</template>

<style>
    @import '../style/Login.css';
</style>

<script>
    export default {
        name: 'LoginScreen'
    }
</script>