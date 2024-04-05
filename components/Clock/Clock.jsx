import { Txt } from "../../components/Txt/Txt";
import { s } from "./Clock.style";
import { nowToHHMM } from "../../utils/date-time";
import { useEffect, useState } from "react";

export const Clock = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(nowToHHMM());
    }, 60000);
    return () => clearInterval(intervalId);
  }, []);
  const [time, setTime] = useState(nowToHHMM());
  return (
    <>
      <Txt style={s.time}>{time}</Txt>
    </>
  );
};
