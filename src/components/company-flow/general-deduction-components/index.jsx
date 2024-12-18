"use client"
import React, { useState } from 'react'
import CompanyEmpty from '../CompanyEmpty';
import EmptyScreenView from '@/components/Shared-components/EmptyScreenView';

const GereralDeduction = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [showTable, setShowTable] = useState(false);


    return (
        <>
            {showTable ? null : <CompanyEmpty heading="General Deduction" >
                <EmptyScreenView
                    image="/company/icons/general-deduction.svg"
                    buttonText="General Deduction"
                    icon={null}
                    onButtonClick={() => setModalOpen(true)}
                />
            </CompanyEmpty >}
        </>
    )
}

export default GereralDeduction
