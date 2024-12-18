"use client"
import React, { useState } from 'react'
import CompanyEmpty from '../CompanyEmpty';
import EmptyScreenView from '@/components/Shared-components/EmptyScreenView';
import { Box } from '@mui/material';
import CompanyHeader from '@/components/Shared-components/CompanyHeader';

const GereralDeduction = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [showTable, setShowTable] = useState(true);


    return (
        <>
            {showTable ? <Box>
                <CompanyHeader heading="General Deduction" />
                <Box sx={{ p: 2 }}>
                    <h1>hello</h1>
                </Box>
            </Box> : <CompanyEmpty heading="General Deduction" >
                <EmptyScreenView
                    image="/company/icons/general-deduction.svg"
                    buttonText="General Deduction"
                    icon={null}
                    onButtonClick={() => setModalOpen(true)}
                />
            </CompanyEmpty >
            }
        </>
    )
}

export default GereralDeduction
