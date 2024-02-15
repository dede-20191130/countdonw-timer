import { useEffect, useState } from "react";
import { ONE_MINIYE, ONE_SECOND } from "../util/datetime/units";
import TimerDisplay from "./timer-display";
import TimerStart from "./timer-start";
import TimerStop from "./timer-stop";
import TimerReset from "./timer-reset";
import TimeNotifier from "./time-notifier";



const CountdownTimer = () => {
    // const [timerVal, setTimerVal] = useState<number>(ONE_MINIYE * 5);
    const [timerVal, setTimerVal] = useState<number>(2000);
    const [isRun, setIsRun] = useState(false);
    const [intervalId, setIntervalId] = useState(0);
    useEffect(() => {
        // cancel starting if timer is pointing zero
        if (!timerVal) {
            setIsRun(false);
            return;
        }
        // start timer if running flag is true and intervalId is not set
        if (isRun && intervalId === 0) {
            setIntervalId(window.setInterval(() => {
                // stop when timeout.
                if (!timerVal) { clearInterval(intervalId); setIntervalId(0); }
                // advance the clock one second
                setTimerVal(tv => {
                    const newTime = tv - ONE_SECOND;
                    return newTime <= 0 ? 0 : newTime;
                })
            }, ONE_SECOND));

        }
        // stop timer if running flag is false and interval Id is set
        if (!isRun && intervalId !== 0) { clearInterval(intervalId); setIntervalId(0); }

    }, [isRun, intervalId])

    return (
        <div>
            <div>
                <TimerDisplay tv={timerVal}></TimerDisplay>
                <div>
                    <TimerStart setIsRun={setIsRun}></TimerStart>
                    <TimerStop setIsRun={setIsRun}></TimerStop>
                    <TimerReset setIsRun={setIsRun} setTimerVal={setTimerVal}></TimerReset>

                </div>
            </div>
            <TimeNotifier isTimeout={!timerVal}></TimeNotifier>

        </div>
    )
};

export default CountdownTimer;
