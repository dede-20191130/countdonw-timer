import { useEffect, useState } from "react"

const TimeNotifier = ({ isTimeout }: { isTimeout: boolean }) => {
    const [showTimeout, setShowTimeout] = useState(false);
    useEffect(() => {
        if (isTimeout) {
            setShowTimeout(true);
            setTimeout(() => {
                setShowTimeout(false);

            }, 3000);
        }

    }, [isTimeout])
    return <div>
        {showTimeout && <span>TIMEOUT!</span>}
    </div>
}

export default TimeNotifier