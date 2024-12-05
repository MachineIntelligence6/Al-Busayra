'use client'

import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'

export default function CustomColoredDropdown({
  options,
  defaultValue,
  onChange,
  buttonColor = '#ED4545',
  buttonTextColor = 'white',
  leftIcon,
  rigthIcon
}) {
//   const [anchorEl, setAnchorEl] = useState(null)
//   const [selectedValue, setSelectedValue] = useState(defaultValue)
  const open = Boolean(anchorEl)

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget)
//   }

//   const handleClose = (value) => () => {
//     setAnchorEl(null)
//     if (value !== selectedValue) {
//       setSelectedValue(value)
//       onChange(value)
//     }
//   }

  const selectedOption = options.find(option => option.value === selectedValue) || options[0]

  return (
    <div>
      <Button
        id="custom-button"
        aria-controls={open ? 'custom-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        // onClick={handleClick}
        startIcon={leftIcon}
        endIcon={rigthIcon}
        style={{
          backgroundColor: buttonColor,
          color: buttonTextColor,
          borderRadius: '5px',
          padding: '8px 16px',
          textTransform: 'none',
        }}
      >
        {selectedOption.label}
      </Button>
      <Menu
        id="custom-menu"
        anchorEl={anchorEl}
        open={open}
        // onClose={handleClose(selectedValue)}
        MenuListProps={{
          'aria-labelledby': 'custom-button',
        }}
        PaperProps={{
          style: {
            borderRadius: '8px',
            marginTop: '4px',
            minWidth: 180,
            boxShadow: '0px 2px 8px rgba(0,0,0,0.15)',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            // onClick={handleClose(option.value)}
            style={{
              color: option.color,
              backgroundColor: option.backgroundColor,
            }}
          >
            {option.icon}
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

// ===============Usage Example===============
{/* <CustomDropdown
options={statusOptions}
defaultValue="not_qualified"
onChange={handleStatusChange}
buttonColor="#ED4545"
buttonTextColor="white"
leftIcon={AlertCircle}
/> */}

// const statusOptions = [
//     { label: 'Not Qualified', value: 'not_qualified', color: '#EF4444', backgroundColor: '#FEE2E2', icon: AlertCircle },
//     { label: 'Hold', value: 'hold', color: '#F59E0B', icon: Clock },
//     { label: 'Qualified', value: 'qualified', color: '#10B981', backgroundColor: '#D1FAE5', icon: CheckCircle },
//   ]