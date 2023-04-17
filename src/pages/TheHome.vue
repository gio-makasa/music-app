<template>
  <main>
    <div id="genres">
      <div class="head">
        <h2>genres:</h2>
        <router-link to="/genres">show all</router-link>
      </div>
      <div id="genresBody">
        <router-link
          v-for="genre in genres"
          :key="genre"
          :to="'/playlists' + genre"
          >{{ genre }}</router-link
        >
      </div>
    </div>

    <div id="newReleases">
      <div class="head">
        <h2>new releases:</h2>
      </div>
      <div class="row" id="newReleasesBody">
        <div
          class="card"
          v-for="release in newReleases"
          :key="release.id"
          :title="release.name"
          @click="$store.commit('getPlayer', release.uri)"
        >
          <img :src="release.images[0].url" :alt="release.name" />
          <h3>{{ release.name }}</h3>
          <span v-for="artist in release.artists" :key="artist.id">
            {{ artist.name }}
          </span>
        </div>
      </div>
    </div>

    <div id="categories">
      <div class="head">
        <h2>categories:</h2>
      </div>
      <div class="row" id="newReleasesBody">
        <div
          class="card"
          v-for="category in categories"
          :key="category.id"
          :title="category.name"
        >
          <img :src="category.icons[0].url" :alt="category.name" />
          <h3>{{ category.name }}</h3>
        </div>
      </div>
    </div>

    <div id="thisYear">
      <div class="head">
        <h2>this year:</h2>
      </div>
      <div class="row" id="thisYearBody">
        <div
          class="card"
          v-for="year in thisYear"
          :key="year.id"
          :title="year.name"
          @click="$store.commit('getPlayer', year.uri)"
        >
          <img :src="year.images[0].url" :alt="year.name" />
          <h3>{{ year.name }}</h3>
          <span v-for="artist in year.artists" :key="artist.id">
            {{ artist.name }}
          </span>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      genres: [],
      newReleases: [],
      categories: [],
      thisYear: [],
    };
  },

  methods: {
    getData() {
      fetch(
        `https://api.spotify.com/v1/recommendations/available-genre-seeds`,
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
          this.showGenres(data.genres);
        });

      fetch(`https://api.spotify.com/v1/browse/new-releases`, {
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.newReleases = data.albums.items;
        });

      fetch(`https://api.spotify.com/v1/browse/categories`, {
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.categories = data.categories.items;
        });

      fetch(
        "https://api.spotify.com/v1/search?query=year%3A2023&type=album&locale=en-US%2Cen%3Bq%3D0.9%2Cka%3Bq%3D0.8&offset=0&limit=20",
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
          this.thisYear = data.albums.items;
        });
    },
    showGenres(genres) {
      for (let i = 0; i < 8; i++) {
        let r = Math.floor(Math.random() * genres.length);
        this.genres.push(genres[r]);
      }
    },
  },

  beforeCreate() {
    fetch("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials&client_id=aa5709451be04b3dbb0fbb268469fb5c&client_secret=a8d3033e4f6245dc9ff02aa084b0ac5c",
      method: "POST",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.$store.commit("getToken", data.access_token);
        this.getData();
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

  a {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
  }
}

.row {
  display: flex;
  overflow: auto;
  gap: 0.5rem;
  padding-bottom: 0.5rem;

  &::-webkit-scrollbar {
    width: 1rem;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0.5rem white;
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--silver);
    border-radius: 1rem;
  }
}

.card {
  position: relative;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  min-width: 12rem;
  height: 17rem;
  overflow: hidden;
  padding-bottom: 0.5rem;
  cursor: pointer;

  img {
    width: 100%;
    height: 70%;
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

#categories {
  .card {
    min-width: 10rem;
    height: 10rem;
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
    width: 20%;
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