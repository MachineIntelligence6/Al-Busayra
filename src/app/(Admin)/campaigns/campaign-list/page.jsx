import EventCard from '@/components/Shared-components/EventCard'
import { eventData } from '@/utils/campaigns.data'
import { Box } from '@mui/material'
import React from 'react'

const page = () => {
    return (
        <Box component="div" >
            {eventData.length ? <Box component="div" sx={{ display: "flex", justifyContent: "space-evenly", gap: 4.5, alignItems: "center", flexWrap: "wrap", my: 2 }}>
                {eventData.map(event => <EventCard key={event.id} event={event} />)}
            </Box> : <CompaingEmptyScreen />}


        </Box>
    )
}

export default page
