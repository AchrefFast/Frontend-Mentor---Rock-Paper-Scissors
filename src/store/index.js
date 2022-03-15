import { configureStore } from "@reduxjs/toolkit";
import { gameSlice } from "./game-slice";
import { gameBonusSlice } from "./game-bonus-slice";

const store = configureStore({
    reducer: { game: gameSlice.reducer, gameBonus: gameBonusSlice.reducer },
});

export default store;
