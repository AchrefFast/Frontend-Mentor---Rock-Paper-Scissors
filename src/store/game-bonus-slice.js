import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    player: null,
    opponent: null,
    ready: false,
    score: localStorage.getItem("score-bonus") || 0,
    winner: null,
};

const gameBonusSlice = createSlice({
    name: "gameBonus",
    initialState,
    reducers: {
        setPlayer(state, action) {
            state.player = action.payload;
        },
        setReady(state) {
            state.ready = true;
        },
        setOpponent(state) {
            const choices = ["paper", "scissors", "rock", "lizard", "spock"];
            const choice = Math.round(Math.random() * 4);
            state.opponent = choices[choice];
        },
        roundResult(state) {
            const { player, opponent } = state;

            if (player === opponent) {
                state.winner = "draw";
                return;
            }
            if (player === "paper" && (opponent === "rock" || opponent === "spock")) {
                state.winner = "player";
                state.score++;
                localStorage.setItem('score-bonus', state.score);
                return;
            } else if (
                player === "rock" &&
                (opponent === "scissors" || opponent === "lizard")
            ) {
                state.winner = "player";
                state.score++;
                localStorage.setItem('score-bonus', state.score);
                return;
            } else if (
                player === "scissors" &&
                (opponent === "paper" || opponent === "lizard")
            ) {
                state.winner = "player";
                state.score++;
                localStorage.setItem('score-bonus', state.score);
                return;
            } else if (
                player === "lizard" &&
                (opponent === "spock" || opponent === "paper")
            ) {
                state.winner = "player";
                state.score++;
                localStorage.setItem('score-bonus', state.score);
                return;
            } else if (
                player === "spock" &&
                (opponent === "rock" || opponent === "scissors")
            ) {
                state.winner = "player";
                state.score++;
                localStorage.setItem('score-bonus', state.score);
                return;
            } else {
                state.winner = "opponent";
                state.score--;
                localStorage.setItem('score-bonus', state.score);
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
            localStorage.removeItem("score-bonus");
            state.score = 0;
        },
    },
});

export const gameBonusActions = gameBonusSlice.actions;

export { gameBonusSlice };
