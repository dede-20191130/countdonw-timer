const TimerStop = ({ setIsRun }: { setIsRun: React.Dispatch<React.SetStateAction<boolean>> }) => (
    <button onClick={() => { setIsRun(false) }}>STOP</button>
);

export default TimerStop;