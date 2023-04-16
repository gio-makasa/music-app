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
            token:
                'BQATfgRlHgLaJl32Ag_-QM9_CHtNIuy7E-ktkfmJ6tWVWq3-tgzJ7SyER4QeQWO8HAjwLHfpp-I4bGtADRIYEd4xuwO3Fm7WCKDz5A1O7jcNC5mz5fIPPBu5pdhrUMUaSVW3R9ngglCofhI6f22Kq1LVmOm6HQBuvpX3XJdeJcOt4qJ98Q0Yb31NU7KRB-ruujl03G-c5XckDD_v1MaZNnODYWGKLMFVsR5SdlQoR4Uc3VRnGbAn4dAT2Zu_ek8k_Y521brGxnL0Qr70-3xOlHxNm-tksLhSVvcd69bRrSS-RatqQezFH5Xf3rLdUeEesFjQaUYbfsImUU8pweFV8xl2olHP-BNFT6guB8-_6rXK7t8',
            PremiumModal: null,
        }
    },
    mutations: {
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