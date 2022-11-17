<template>
    <div class="auth-wrapper">
        <div class="auth-inner">
            <img src="../assets/loods_logo.png" alt="de loods" style="width:100%;">
            <form action="/">
                <div class="form-group">
                    <h4>Voor- en achternaam</h4>
                    <h5 class="borderexample" style="color:black">{{$store.state.name}}</h5>
                </div>

                <div class="form-group">
                    <h4>E-mailadres</h4>
                    <h5 class="borderexample" style="color:black">{{$store.state.email}}</h5>
                </div>

                <div class="form-group">
                    <h4>Kenteken</h4>
                    <h5 class="borderexample" style="color:black">{{$store.state.licenseplate}}</h5>
                </div>

                <div class="form-group">
                    <h4>Type auto</h4>
                    <h5 class="borderexample" style="color:black">Tesla Model 3</h5>
                </div>

                <button class="btn btn-primary btn-block">Home</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'ReservationScreen',
        data: function () {
            return {
                cars: []
            }
        },

        mounted: function() {
            axios.get('https://opendata.rdw.nl/resource/m9d7-ebf2.json')
                .then((r) => {
                    this.cars = r.data
                    // for (let i = 0; i < r.data.length; i++) {
                    //     console.log(r.data[i]["kenteken"])
                    //     // if (r.data[i]["kenteken"] = "84TRSP") {
                    //     //     console.log(r.data[i]["kenteken"], r.data[i]["merk"], r.data[i]["handelsbenaming"],)
                    //     //     break
                    //     // }
                    // }
                    const todo = this.cars.find(t => t.kenteken === "84TRSP");
                    console.log(todo)
                    //{id: 1, title: "Task 1"}
                })
        },
    }
</script>

<style>
    @import '../style/Information.css';
</style>