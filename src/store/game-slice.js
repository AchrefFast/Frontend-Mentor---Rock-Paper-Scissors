import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    player: null,
    opponent: null,
    ready: false,
    score: localStorage.getItem("score-original") || 0,
    winner: null,
};

const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        setPlayer(state, action) {
            state.player = action.payload;
        },
        setReady(state) {
            state.ready = true;
        },
        setOpponent(state) {
            const choices = ["paper", "scissors", "rock"];
            const choice = Math.round(Math.random() * 2);
            state.opponent = choices[choice];
        },
        roundResult(state) {
            const { player, opponent } = state;
            if (player === opponent) {
                state.winner = 'draw';
                return;
            }
            if (player === "paper" && opponent === "rock") {
                state.winner = 'player';
                state.score++;
                localStorage.setItem('score-original', state.score);
                return;
            } else if (player === "rock" && opponent === "scissors") {
                state.winner = 'player';
                state.score++;
                localStorage.setItem('score-original', state.score);
                return;
            } else if (player === "scissors" && opponent === "paper") {
                state.winner = 'player';
                state.score++;
                localStorage.setItem('score-original', state.score);
                return;
            } else {
                state.winner = 'opponent';
                state.score--;
                localStorage.setItem('score-original', state.score);
                return;
            }
        },
        reset(state) {
            state.player = null;
            state.opponent = null;
            state.ready = false;
            state.winner = null;
        },
        resetScore(state) {
            localStorage.removeItem("score-orginal");
            state.score = 0;
        },
    },
});

export const gameActions = gameSlice.actions;

export { gameSlice };
