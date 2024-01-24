import Button from '@mui/material/Button';
import React from "react";

function convertTimestamp(timestamp) {
    const dateObject = new Date(timestamp);

    const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
    };

    const formattedDate = dateObject.toLocaleString('en-IN', options);

    return formattedDate;
}

const MyIcon = () => {
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
        <path d="M18.5859 20H4.00016C3.72401 20 3.50016 19.7762 3.50016 19.5C3.50016 19.3918 3.53525 19.2866 3.60016 19.2L4.00016 18.6667V10C4.00016 8.67022 4.32462 7.41619 4.8987 6.31279L1.39355 2.80765L2.80777 1.39343L22.6068 21.1924L21.1925 22.6066L18.5859 20ZM20.0002 15.7858L7.55919 3.34486C8.8297 2.49537 10.3571 2.00003 12.0002 2.00003C16.4184 2.00003 20.0002 5.58176 20.0002 10V15.7858ZM9.50016 21H14.5002C14.5002 22.3807 13.3809 23.5 12.0002 23.5C10.6194 23.5 9.50016 22.3807 9.50016 21Z" fill="currentColor">
        </path>
    </svg>)
}

const Card = ({ item }) => {
    return (
        <div style={{ display: 'flex', backgroundColor: 'white', height: 80, paddingLeft: 20 }}>
            <div style={{ flex: 1 }}>
                <div style={{ marginTop: 10, display: 'flex' }}>
                    <div style={{ fontSize: 22, fontWeight: 'bold', marginRight: 10 }}>
                        {item.alert_type}
                    </div>
                    <div style={{ fontSize: 12, display: 'flex', alignItems: 'center' }}>
                        ⬤ {convertTimestamp(item.timestamp)}
                    </div>
                </div>

                <div>
                    <b>Driver:</b> {item.driver_friendly_name} / {item.vehicle_friendly_name}
                </div>
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                <Button sx={{ textTransform: 'capitalize' }} variant="outlined" startIcon={<MyIcon />} style={{ marginLeft: "auto", marginRight: 50 }}>
                    Mark As False Alarm
                </Button>
            </div>
        </div>

    )
}


export default Card;