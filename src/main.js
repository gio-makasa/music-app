import { createApp } from 'vue'
import { createStore } from 'vuex'
import { createRouter, createWebHistory } from 'vue-router'

import TheHome from './pages/TheHome.vue'
// import TheAudiobooks from './pages/TheAudiobooks.vue'
// import ThePodcasts from './pages/ThePodcasts.vue'
import LikedSongs from './pages/LikedSongs.vue'
import YourLibrary from './pages/YourLibrary.vue'
import TheGenres from './pages/TheGenres.vue'
import ThePlaylists from './pages/ThePlaylists.vue'

import App from './App.vue'

const store = createStore({
    state() {
        return {
            token: '',
            PremiumModal: null,
        }
    },
    mutations: {
        getToken(state, token) {
            state.token = token;
        },
        showModal(state, payload) {
            state.PremiumModal = payload;
        },
        getPlayer(_, payload) {
            let url = payload.split(':');
            document.getElementsByTagName('iframe')[0].src = "https://open.spotify.com/embed/" + url[1] + "/" + url[2];
        }
    }
});

const route = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: TheHome },
        // { path: '/audiobooks', component: TheAudiobooks },
        // { path: '/podcasts', component: ThePodcasts },
        { path: '/liked', component: LikedSongs },
        { path: '/library', component: YourLibrary },
        { path: '/genres', component: TheGenres },
        { path: '/playlists:genre', component: ThePlaylists },
    ]
})

const app = createApp(App);
app.use(store);
app.use(route);
app.mount('#app');