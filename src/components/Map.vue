<template>
    <div class="map-wrap">
      <a href="https://www.maptiler.com" class="watermark"><img
          src="https://api.maptiler.com/resources/logo.svg" alt="MapTiler logo"/></a>
      <div class="map" ref="mapContainer"></div>
    </div>
  </template>
  
  <script>
  import { Map, NavigationControl, Marker } from 'maplibre-gl';
  import { shallowRef, onMounted, onUnmounted, markRaw } from 'vue';
  
  export default {
    name: "Map",
    setup () {
      const mapContainer = shallowRef(null);
      const map = shallowRef(null);
  
      onMounted(() => {
        const apiKey = 'Irtrt3eoh3P5bPWdv1Zl';
  
        const initialState = { lng: 4.328780, lat: 52.040230, zoom: 18.5 };
  
        map.value = markRaw(new Map({
          container: mapContainer.value,
          style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${apiKey}`,
          center: [initialState.lng, initialState.lat],
          zoom: initialState.zoom
        }));
        map.value.addControl(new NavigationControl(), 'top-right');
        new Marker({color: $store.state.marker_color})
            .setLngLat([4.328815,52.039943])
            .addTo(map.value);
        new Marker({color: "#00d80d"})
            .setLngLat([4.328674,52.040050])
            .addTo(map.value);
        new Marker({color: "#00d80d"})
            .setLngLat([4.328575,52.040170])
            .addTo(map.value);
        new Marker({color: "#00d80d"})
            .setLngLat([4.328443,52.040263])
            .addTo(map.value);
        new Marker({color: "#00d80d"})
            .setLngLat([4.328520,52.040435])
            .addTo(map.value);
        new Marker({color: "#00d80d"})
            .setLngLat([4.328611,52.040369]) 
            .addTo(map.value);
      }),
      onUnmounted(() => {
        map.value?.remove();
      })
  
      return {
        map, mapContainer
      };
    }
  };
  </script>
  
  
  <style scoped>
  @import '~maplibre-gl/dist/maplibre-gl.css';
  
  .map-wrap {
    position: relative;
    width: 100%;
    height: calc(100vh - 77px); /* calculate height of the screen minus the heading */
  }
  
  .map {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  
  .watermark {
    position: absolute;
    left: 10px;
    bottom: 10px;
    z-index: 999;
  }
  </style>