"use client"
import { useState } from 'react';
import PropTypes from 'prop-types';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import CustomTable from '@/components/Shared-components/Table-components/CustomTable';

export default function CustomizedAccordions({data,column, items, title}) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box height="500px" backgroundColor="#fff" sx={{borderRadius:"25px"}}>
<Typography sx={{ fontWeight: 500, fontSize: "18px" , color:"#4B465C", margin:"20px"}}>{title}</Typography>
      {items.map((item, index) => (
        <MuiAccordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          sx={{
            borderColor: 'divider',
            '&:last-child': { borderBottom: 0 },
            '&::before': { display: 'none' },
          }}
        >
          <MuiAccordionSummary
            aria-controls={`panel${index}d-content`}
            id={`panel${index}d-header`}
            expandIcon={
              <ArrowForwardIosSharpIcon />
            }
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.03)',
              paddingY:"10px",
              flexDirection: 'row',
              '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                transform: 'rotate(90deg)',
                m:0
              },
              '& .Mui-expanded': {
                m:0
              },
              '& .mui-8op8l8-MuiPaper-root-MuiAccordion-root.Mui-expanded ': {
                m:0
              },
              '& .MuiAccordionSummary-content': {
                ml: 1,
              },
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            <Typography sx={{ fontWeight: 600 }}>{item.title}</Typography>
          </MuiAccordionSummary>
          <MuiAccordionDetails
            sx={{
              borderTop: '1px solid rgba(0, 0, 0, 0.125)',
              padding: "0px",
              overflow:"auto",
              "&: .MuiAccordionDetails-root": {
              }
            }}
          >
           <Box sx={{ height: "100%" }}>
        <CustomTable
          columns={column}
          data={data}
          // onRowSelect={handleRowSelect}
          // handleFilterClick={handleFilterClick}
        />
      </Box>
          </MuiAccordionDetails>
        </MuiAccordion>
      ))}
    </Box>
  );
}

CustomizedAccordions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
      contentType: PropTypes.oneOf(['table', 'table']).isRequired,
      tableHeaders: PropTypes.arrayOf(PropTypes.string),
      tableData: PropTypes.arrayOf(PropTypes.array),
    })
  ).isRequired,
};
