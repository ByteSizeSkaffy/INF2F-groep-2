<template>
    <div class="hello">
        <div class="menu">
            <div class="menu-item">
                <div class="menu-text" @click="$router.push('information')">
                    Information
                </div>
            </div>
            <div class="menu-item menu-center">
                <img src="../assets/loods_logo_transparent.png" alt="de loods" style="width:50%;">
            </div>
            <div class="menu-item">
                <div class="menu-text" @click="$router.push('reservation')">
                    Reservation
                </div>
            </div>
        </div>
        <div class="dashboard">
            <div class="map">
                <!-- <fa icon="car" />
                <fa icon="car" />
                <fa icon="car" />
                <fa icon="car" />
                <fa icon="car" />
                <fa icon="car" /> -->
            </div>
            <Map id="map"/>
        </div>
    </div>
</template>

<script>
import Map from '../components/Map.vue';

    export default {
        name: 'Home',
        components: {
            Map
        }
    }
</script>

<style>
    @import '../style/Home.css';
</style>