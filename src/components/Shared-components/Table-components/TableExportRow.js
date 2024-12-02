"Use Client";

import { useMemo, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, Button, TextField } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import ActionMenu from "../ActionMenu";
import AddIcon from '@mui/icons-material/Add';


const TableExportRow = () => {
  const [entries, setEntries] = useState(10);
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleChange = (event) => {
    setEntries(event.target.value);
  };
  const MenuItems = useMemo(() => {
    return [
      { label: "Edit Details", action: "edit" },
      { label: "Change Status", action: "change status" },
    ];
  }, []);
  const handleMenuClick = (value) => {
    console.log("clicked menu", value);
    setShowPopup(true);
  };

  const onButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
        marginBottom: 1,
        padding: 1,
      }}
    >
      <div>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          {/* <InputLabel id="demo-simple-select-autowidth-label">Entries</InputLabel> */}
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={entries}
            onChange={handleChange}
            autoWidth
            sx={{
              width: 70,
              height: 40,
              fontSize: 15,
              borderRadius: "6px",
            }}
            //   label={entries}
          >
            {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
            <MenuItem value={10} defaultChecked>
              10
            </MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: 2,
          alignItems: "center",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Search"
          type="text"
          required
          error={false} // Set to true for error state
          onChange={(e) => console.log(e.target.value)}
          sx={{
            borderRadius: "6px",
            padding: "0px",
            "& .MuiOutlinedInput-input": {
              paddingY: "8px",
              borderRadius: "6px",
            },
          }}
        />

        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<FileUploadIcon />}
          sx={{
            backgroundColor: "#80839029", // Set background color
            "&:hover": {
              backgroundColor: "#80839029", // Set hover color if needed (slightly darker)
            },
            color: "#808390",
          }}
        >
          Export
        </Button>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          onClick={onButtonClick}
          endIcon={<AddIcon/>}
          sx={{
            backgroundColor: "#104774", // Set background color
            "&:hover": {
              backgroundColor: "#80839029", // Set hover color if needed (slightly darker)
            },
            color: "white",
          }}
        >
          Add New
        </Button>
        <Box
          sx={{
            backgroundColor: "#80839029",
            textAlign: "center",
            borderRadius: "5px",
          }}
        >
          <ActionMenu menuItems={MenuItems} onMenuItemClick={handleMenuClick} />
        </Box>
      </Box>
    </Box>
  );
};
export default TableExportRow;
