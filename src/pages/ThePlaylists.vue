<template>
  <main>
    <div class="head">
      <h2>{{ $route.params.genre }}:</h2>
    </div>
    <div id="playlistsBody">
      <div
        class="card"
        v-for="playlist in playlists"
        :key="playlist.id"
        :title="playlist.name"
        @click="$store.commit('getPlayer', playlist.uri)"
      >
        <img :src="playlist.images[0].url" :alt="playlist.name" />
        <h3>{{ playlist.name }}</h3>
        <span v-for="artist in playlist.artists" :key="artist.id">
          {{ artist.name }}
        </span>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      playlists: [],
    };
  },
  methods: {
    getId(playlist) {
      return playlist.href.slice(playlist.href.lastIndexOf("/") + 1);
    },
  },
  created() {
    fetch(
      `https://api.spotify.com/v1/search?query=genre%3D${this.$route.params.genre}&type=playlist&include_external=audio&locale=en-US%2Cen%3Bq%3D0.9%2Cka%3Bq%3D0.8&offset=0&limit=20`,
      {
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.playlists = data.playlists.items;
      });
  },
};
</script>

<style lang="scss" scoped>
main {
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0 1rem;
    text-transform: capitalize;

    h2 {
      font-family: dancing;
      font-size: 2.3rem;
    }
  }

  #playlistsBody {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;

    .card {
      position: relative;
      color: white;
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 0.5rem;
      width: 18%;
      height: fit-content;
      overflow: hidden;
      padding-bottom: 0.5rem;
      text-decoration: none;
      cursor: pointer;

      img {
        width: 100%;
        height: 10rem;
      }

      h3 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0.5rem;
        text-transform: capitalize;
      }

      span {
        color: rgba(255, 255, 255, 0.5);
        padding: 0.5rem;
      }
    }
  }
}
</style>