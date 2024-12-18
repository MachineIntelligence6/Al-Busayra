"use client"
import React, { useState } from 'react'
import CompanyEmpty from '../CompanyEmpty';
import EmptyScreenView from '@/components/Shared-components/EmptyScreenView';
import { Box } from '@mui/material';
import CompanyHeader from '@/components/Shared-components/CompanyHeader';
import DescriptiveText from '@/components/Shared-components/DescriptiveText';
import { custom } from '@/app/theme';

const GereralDeduction = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [showTable, setShowTable] = useState(false);


    return (
        <>
            {showTable ? <Box>
                <CompanyHeader>
                    <DescriptiveText
                        text={"General Deduction"}
                        fontSize={18}
                        fontWeight={500}
                        color={custom.dreadcrumbText}
                    />
                </CompanyHeader>
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
