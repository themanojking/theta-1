import React from 'react'
import Carousel from '../Component/Carousel '
import Brands from '../Component/Brands'
import { Box, Divider } from '@mui/material'
import TitleWithDescription from '../Component/TitleWithDescription '
import Faq from '../Component/Faq'
import Navbar from '../Component/Navbar'
import Clusters from '../Component/Clusters'
import Review from '../Component/Review'
import Footer from '../Component/Footer'
const Cluster = () => {
    return (
        <>
        
         <Box sx={{ bgcolor: "#000212", py: 10 }}>
            
         <Navbar color="#fff" />
                <TitleWithDescription
                    title="Visit our Clusters"
                />
                <Clusters />
            </Box>
        </>
    );
};
export default Cluster;