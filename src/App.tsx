import React, { useState, useEffect, useCallback } from "react";
import Boards from "./components/Boards";
import Header from "./components/Header";
import Home from "./components/Home";
import useInterval from "./hooks/useInterval";
import { gameService } from "./service/gameService";
import { gameInfoType } from "./types";

const initialGameInfo = {
  time: 15,
  point: 0,
  stage: 1
};
function App() {
  const [{ stage, time, point }, setGameInfo] =
    useState<gameInfoType>(initialGameInfo);

  useEffect(() => {
    const subscription = gameService.onService().subscribe(gameInfo => {
      setGameInfo({ ...gameInfo });
    });

    return () => subscription.unsubscribe();
  }, []);

  useInterval(() => {
    gameService.deletTime({ stage, point, time });
  }, 1000);

  useEffect(() => {
    gameService.pullGameInfo({ time, point, stage });
  }, [time, point, stage]);

  useEffect(() => {
    if (time <= 0) {
      gameService.reset();
    }
  }, [time]);

  return (
    <main>
      <Header>
        스테이지: {stage}, 남은 시간: {time}, 점수: {point}
      </Header>
      <Boards />
    </main>
  );
}

export { App };
