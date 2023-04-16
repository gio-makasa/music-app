<template>
  <div id="player"></div>
</template>

<script>
export default {
  created() {
    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      IFrameAPI.createController(
        document.getElementById("player"),
        {
          width: "100%",
          height: "155",
          uri: "spotify:album:7I0tjwFtxUwBC1vgyeMAax",
        },
      );
    };
  },
};
</script>