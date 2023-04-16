<template>
  <main>
    <div class="head">
      <h2>genres:</h2>
    </div>
    <div id="genresBody">
      <router-link
        v-for="genre in genres"
        :key="genre"
        :to="'/playlists' + genre"
        >{{ genre }}</router-link
      >
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      genres: [],
    };
  },

  created() {
    fetch(`https://api.spotify.com/v1/recommendations/available-genre-seeds`, {
      headers: {
        Authorization: `Bearer ${this.$store.state.token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.genres = data.genres;
      });
  },
};
</script>

<style lang="scss" scoped>
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
#genresBody {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;

  a {
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 0.5rem;
    padding: 1rem 0;
    width: 18%;
    text-align: center;
    text-decoration: none;
    text-transform: capitalize;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background: var(--backgroundColor);
    }
  }
}
</style>