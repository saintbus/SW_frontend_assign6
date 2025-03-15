import DateReserve from "@/components/DateReserve";
import { TextField } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Button } from "@mui/material";

export default function Booking() {
    return (
        <main className="w-[100%] flex flex-col items-center">
            <h1 className="mt-8 text-2xl font-medium">Booking Venue</h1>
            <TextField variant="standard" name="Name-Lastname" label="Name-Lastname" sx={{ height: '2em', width: '200px', marginTop: '1rem' }}/>
            <TextField variant="standard" name="Contact-number" label="Contact-number" sx={{ height: '2em', width: '200px', marginTop: '1rem' }}/>
            <Select variant="standard" id="venue" sx={{ height: '2em', width: '200px', marginTop: '2rem' }}>
                <MenuItem value='Bloom'>The Bloom Pavilion</MenuItem>
                <MenuItem value='Spark'>Spark Space</MenuItem>
                <MenuItem value='GrandTable'>The Grand Table</MenuItem>
            </Select>
            <DateReserve/>
            <Button variant="outlined" name="Book Venue" sx = {{ marginTop:"1.5rem" }}>Book Venue</Button>
        </main>
    );
}