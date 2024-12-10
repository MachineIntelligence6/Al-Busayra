import DynamicBreadcrumb from '@/components/Shared-components/BreadCrumb'
import CustomButton from '@/components/Shared-components/CustomButton'
import { Box, Divider, Icon } from '@mui/material'
import { Bike, ChevronDown, CircleCheck, CircleX, HandCoins, Network, UsersRound } from 'lucide-react'
import React from 'react'
import DashboardCard from './DashboardCard';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import DashboardTable from './DashboardTable'

const InventoryDashboard = () => {
    return (
        <Box>
            <Box sx={{ px: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <DynamicBreadcrumb />
                <CustomButton endIcon={<ChevronDown />}>SIM Invertory</CustomButton>
            </Box>
            <Divider sx={{ mt: 2 }} />
            <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <DashboardCard bgColor="#23567F" data={{ icon: <Bike size={24} color='#23567F' />, text: "Total Bikes", count: "50" }} />
                <DashboardCard bgColor="#338BE3" data={{ icon: <Network style={{ transform: "rotate(180deg)" }} size={24} color='#338BE3' />, text: "Allocated", count: "50" }} />
                <DashboardCard bgColor="#01AB9C" data={{ icon: <CircleCheck size={24} color='#01AB9C' />, text: "Available Inventory", count: "40" }} />
                <DashboardCard bgColor="#EA5359" data={{ icon: <CircleX size={24} color='#EA5359' />, text: "Inactive Inventory", count: "10" }} />
                <DashboardCard bgColor="#CA4F8E" data={{ icon: <Bike size={24} color='#CA4F8E' />, text: "Own Bikes", count: "50" }} />
                <DashboardCard bgColor="#FFAC30" data={{ icon: <HandCoins size={24} color='#FFAC30' />, text: "Rental Bikes", count: "50" }} />
                <DashboardCard bgColor="#EF8B88" data={{ icon: <UsersRound size={24} color='#EF8B88' />, text: "Vendors", count: "50" }} />
                <DashboardCard bgColor="#9747FF" data={{ icon: <PersonOffIcon sx={{ color: '#9747FF' }} />, text: "Unassigned Vendors", count: "50" }} />
            </Box>
            <DashboardTable />

        </Box>
    )
}

export default InventoryDashboard
