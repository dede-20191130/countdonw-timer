const TimerStart = ({ setIsRun }: { setIsRun: React.Dispatch<React.SetStateAction<boolean>> }) => (
    <button onClick={() => { setIsRun(true) }}>START</button>
);

export default TimerStart;