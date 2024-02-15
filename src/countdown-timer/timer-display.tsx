const formatDateMinSec = (d: Date) => {
    return String(d.getMinutes()).padStart(2, "0") + ":" + String(d.getSeconds()).padStart(2, "0");
}

const TimerDisplay = ({ tv }: { tv: number }) => {
    return <div>{formatDateMinSec(new Date(tv))}</div>
}

export default TimerDisplay