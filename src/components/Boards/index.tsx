import React, { useCallback, useEffect, useMemo, useState } from "react";
import { gameService } from "../../service/gameService";
import { gameInfoType } from "../../types";
import { getColor, getNumbers, getRgba } from "../../utils";

const Boards: React.VFC = ({}) => {
  const [{ stage, point, time }, setGameInfo] = useState<gameInfoType>({
    stage: 1,
    point: 0,
    time: 15
  });
  const [color, setColor] = useState({ ...getRgba(), weight: 0 });
  const { col, answer, area } = useMemo(() => getNumbers(stage), [stage]);

  useEffect(() => {
    const subscription = gameService.onService().subscribe(gameInfo => {
      setGameInfo({ ...gameInfo });
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    setColor({ ...getRgba(), weight: 100 - stage ** 0.7 * 6 });
  }, [stage]);

  const onClickBoard = useCallback(
    (isAnswer: boolean) => {
      if (isAnswer) {
        gameService.clickAnswer({ stage, point, time });
      } else {
        gameService.clickWrong({ stage, point, time });
      }
    },
    [stage, point, time]
  );

  const boardStyle = useCallback(
    (isAnswer: boolean): React.CSSProperties => ({
      backgroundColor: isAnswer
        ? `${getColor(color)}`
        : `${getColor({ ...color, weight: 0 })}`
    }),
    [color]
  );

  const boardWrapperStyle = useMemo(
    (): React.CSSProperties => ({
      gridTemplateColumns: `repeat(${col}, 1fr)`
    }),
    [col]
  );

  return (
    <ul style={boardWrapperStyle} className="board-wrapper">
      {new Array(area).fill(null).map((v, i) => (
        <li
          className="board"
          key={`Board-${i}-${v}`}
          onClick={() => onClickBoard(i === answer)}
          style={boardStyle(i === answer)}
        />
      ))}
    </ul>
  );
};

export default React.memo(Boards);
