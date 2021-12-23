import {useState} from 'react'

const StatusIcon = () => {
    const [connected, setConnected] = useState();
    return (
        <div>
            {/* <i class="icon" class="{ connected: connected }"></i> */}
            {(connected) ? "online" : "offline"}
        </div>
    )
}

export default StatusIcon
