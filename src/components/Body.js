import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Autocomplete } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { DateRangePicker, SingleInputDateRangeField } from '@mui/x-date-pickers-pro';
import { alerts, vehicles } from './api'
import Card from './Card';


const Body = () => {
    const [searchValue, setSearchValue] = useState('');
    const [vehicleSearch, setVehicleSearch] = useState(null);
    const [inputValue, setInputValue] = React.useState('');
    const [value, setValue] = React.useState(() => [
        dayjs('2022-12-17'),
        dayjs('2022-12-18'),]);

    var vehiclesList = [];
    vehicles.forEach((item) => (vehiclesList.push(item.friendly_name)));
    return (
        < div id='background' style={{ backgroundColor: 'rgb(240, 240, 240)', minHeight: '100vh', padding: 100 }
        }>

            <Box >
                <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={2}
                >
                    <TextField
                        style={{ backgroundColor: "white" }}
                        sx={{ width: 250 }}
                        id="outlined-controlled"
                        label="Search"
                        value={searchValue}
                        onChange={(event) => {
                            setSearchValue(event.target.value);
                        }}
                    />
                    <Autocomplete
                        disablePortal
                        style={{ backgroundColor: "white" }}
                        options={vehiclesList}
                        value={vehicleSearch}
                        onChange={(event, newValue) => {
                            setVehicleSearch(newValue);
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                            setInputValue(newInputValue);
                        }}
                        sx={{ width: 250 }}
                        renderInput={(params) => <TextField {...params} label="Vehicle #" />}
                    />
                    <div style={{ backgroundColor: "white" }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateRangePicker
                                sx={{ width: 250 }}
                                slots={{ field: SingleInputDateRangeField }}
                                onChange={(newValue) => setValue(newValue)}
                                value={value}
                            />
                        </LocalizationProvider>
                    </div>
                </Stack>
            </Box>
            <Box>
                <div style={{ backgroundColor: "white", height: 60, marginTop: 20, marginBottom: 5, fontSize: 24, paddingLeft: 20, fontWeight: 'bold', display: 'flex', alignItems: 'center', borderTopLeftRadius: 5, borderTopRightRadius: 5 }}>
                    Alerts
                </div>
                <Stack
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    spacing={0.5}
                >
                    {
                        alerts.filter((alert) => {
                            if (searchValue.toLowerCase() === '' && vehicleSearch === null)
                                return true;
                            else if (vehicleSearch === null)
                                return (
                                    alert.driver_friendly_name.toLowerCase().includes(searchValue.toLowerCase()) ||
                                    alert.alert_type.toLowerCase().includes(searchValue.toLowerCase())
                                );
                            else
                                return(alert.vehicle_friendly_name.toLowerCase().includes(vehicleSearch.toLowerCase()))
                        }
                        ).map((alert) => (
                            <Card item={alert} />
                        ))
                    }
                </Stack>
            </Box>
        </div >
    )
}
export default Body;