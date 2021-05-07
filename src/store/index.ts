import { createStore } from 'vuex';

const token = localStorage.getItem("token") || '';

export default createStore({
  state: {
    tracks: [],
    artists: []
  },
  mutations: {
    SET_TRACKS(state, tracks) {
      state.tracks = tracks
    },
    SET_ARTISTS(state, artists) {
      state.artists = artists
    }
  },
  actions: {
    async getTracks({ commit }) {
        const tracks = await fetch(`${process.env.VUE_APP_SERVER_URL}/spotify/me/top/tracks?limit=50`, {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            Authorization: token,
            },
        });

        const json = await tracks.json();
        commit('SET_TRACKS', json.items)
    },
    async getArtists({ commit }) {
        const tracks = await fetch(`${process.env.VUE_APP_SERVER_URL}/spotify/me/top/artists?limit=50`, {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            Authorization: token,
            },
        });

        const json = await tracks.json();
        commit('SET_ARTISTS', json.items)
    },
  },
});