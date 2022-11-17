<template>
    <div class="auth-wrapper">
        <div class="auth-inner">
            <img src="../assets/loods_logo.png" alt="de loods" style="width: 100%" />
            <form>
            <div class="form-group">
                <h4>Datum reservering</h4>
                <h5 class="borderexample" style="color: black">17/10/2022</h5>
            </div>

            <div class="form-group">
                <h4>Tijdstip reservering</h4>
                <h5 class="borderexample" style="color: black">16:30</h5>
            </div>

            <div class="form-group">
                <h4>Laadpaal</h4>
                <h5 class="borderexample" style="color: black">1</h5>
            </div>

            <button class="btn btn-primary btn-block" @click="$router.push('/')">
                Home
            </button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name: "InformationScreen",

    async mounted() {
        let result = axios.get('https://opendata.rdw.nl/resource/m9d7-ebf2.json');
    console.warn(result)
    }
};
</script>

<style>
@import "../style/Reservation.css";
</style>