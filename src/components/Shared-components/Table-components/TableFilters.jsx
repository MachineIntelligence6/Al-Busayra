import { Box, Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import CustomDropdown from '../CustomDropDown';


const options = ["A", "B", "C", "D"]
const TableFilters = () => {
    const [dropdown1Value, setDropdown1Value] = useState("");
    const [dropdown2Value, setDropdown2Value] = useState("");
    const [dropdown3Value, setDropdown3Value] = useState("");

    const options = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
    ];


    return (
        <Box component="div" sx={{ width: "100%", m: 2, "& .MuiInputBase-root": { width: "80%" }, }}>
            <Typography variant='caption' sx={{ fontSize: 16 }}>Advance Filters</Typography>

            <Box
                component="div"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    my: 2
                }}
            >
                <CustomDropdown
                    sx={{ flex: 1, placeItems: "start" }}
                    label="Campaign Name"
                    placeholder="Please Select"
                    options={options}
                    value={dropdown1Value}
                    onChange={(e) => setDropdown1Value(e.target.value)}
                />
                <CustomDropdown
                    sx={{ flex: 1, placeItems: "start", }}
                    label="Resident Country"
                    placeholder="Pakistan"
                    options={options}
                    value={dropdown2Value}
                    onChange={(e) => setDropdown2Value(e.target.value)}
                />
                <CustomDropdown
                    sx={{ flex: 1, placeItems: "start" }}
                    label="Resident City"
                    placeholder="Islamabad"
                    options={options}
                    value={dropdown3Value}
                    onChange={(e) => setDropdown3Value(e.target.value)}
                />
            </Box>
            <Divider />
        </Box>
    )
}

export default TableFilters



// import { Box, Divider, Typography } from '@mui/material';
// import React, { useState } from 'react';
// import CustomDropdown from '../CustomDropDown';

// const TableFilters = ({ filters = [], title = "Advance Filters" }) => {
//     const [values, setValues] = useState(
//         filters.reduce((acc, filter) => ({ ...acc, [filter.name]: "" }), {})
//     );

//     const handleChange = (name, value) => {
//         setValues((prevValues) => ({
//             ...prevValues,
//             [name]: value,
//         }));
//     };

//     return (
//         <Box
//             component="div"
//             sx={{
//                 width: "100%",
//                 m: 2,
//                 "& .MuiInputBase-root": { width: "80%" },
//             }}
//         >
//             <Typography variant="caption" sx={{ fontSize: 16 }}>
//                 {title}
//             </Typography>

//             <Box
//                 component="div"
//                 sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                     flexWrap: "wrap",
//                     my: 2,
//                 }}
//             >
//                 {filters.map((filter) => (
//                     <CustomDropdown
//                         key={filter.name}
//                         sx={{ flex: 1, placeItems: "start" }}
//                         label={filter.label}
//                         placeholder={filter.placeholder}
//                         options={filter.options}
//                         value={values[filter.name]}
//                         onChange={(e) => handleChange(filter.name, e.target.value)}
//                     />
//                 ))}
//             </Box>
//             <Divider />
//         </Box>
//     );
// };

// export default TableFilters;

