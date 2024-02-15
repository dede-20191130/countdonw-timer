import { ONE_MINIYE } from "../util/datetime/units";

const TimerReset = ({ setIsRun, setTimerVal }: { setIsRun: React.Dispatch<React.SetStateAction<boolean>>, setTimerVal: React.Dispatch<React.SetStateAction<number>> }) => (
    <button onClick={() => { setIsRun(false); setTimerVal(ONE_MINIYE * 5); }}>RESET</button>
);

export default TimerReset;