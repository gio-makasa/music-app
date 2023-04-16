<template>
  <NavBar />
  <TheHeader />
  <router-view></router-view>
  <ThePlayer />
  <BuyPremium v-if="$store.state.PremiumModal" />
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import NavBar from "./components/NavBar.vue";
import BuyPremium from "./components/BuyPremium.vue";
import ThePlayer from "./components/ThePlayer.vue";

export default {
  components: {
    NavBar,
    TheHeader,
    BuyPremium,
    ThePlayer,
  },
};
</script>

<style>
@font-face {
  font-family: "dancing";
  src: url(./assets/fonts/Dancing_Script/DancingScript-VariableFont_wght.ttf)
    format("truetype");
  font-display: swap;
}

:root {
  --backgroundColor: linear-gradient(#777, #666, #555, #444, #333);
  --navBackColor: #222;
  --silver: #edebf8;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  color: var(--silver);
  background: var(--backgroundColor);
  height: 100vh;
  display: grid;
  grid-template:
    "nav header header header header header header header header header header"
    "nav main main main main main main main main main main"
    "player player player player player player player player player player player";
  grid-template-columns: 20% 1fr;
  grid-template-rows: 15% 1fr auto;
}
header {
  grid-area: header;
}
nav {
  background-color: var(--navBackColor);
  grid-area: nav;
}
main {
  grid-area: main;
  padding: 0 1rem 1rem;
  overflow-y: scroll;
}
main::-webkit-scrollbar {
  display: none;
}
iframe {
  grid-area: player;
}
</style>