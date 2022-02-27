import React from 'react';
import Box from '@mui/material/Box';
import TopBar from './components/TopBar';
import islandBackground from "../../images/Island.jpg";

const TopLayout = ({ width, temp }) => {

     return (
          <Box
               sx={{
                    // background: `linear-gradient(#e66465, #9198e5);`,
                    height: "100%",
                    backgroundColor: '#2D4889',

                    // backgroundImage: `url(${islandBackground})`,
                    backgroundImage: `linear-gradient(to bottom, rgba(46, 73, 120, 0), rgba(46, 73, 120, 1)), 
                    url(${islandBackground})`,
                    backgroundSize: "cover",


               }}
          >
               <TopBar width={width} temp={temp} />
          </Box>
     );
}

export default TopLayout;
