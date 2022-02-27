import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Typography } from '@mui/material';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';

const TopBar = ({ width, temp }) => {

     return (
          <Box
               sx={{
                    height: "40%",
                    // overflow: "hidden",
                    // width: "100%",
               }}

               pl={{
                    xs: "15px",
                    sm: "15px",
                    md: "70px",
                    lg: "70px",
                    xl: "70px"

               }}

               pr={{
                    xs: "15px",
                    sm: "15px",
                    md: "50px",
                    lg: "50px",
                    xl: "50px"

               }}

               pt={{
                    xs: "15px",
                    sm: "15px",
                    md: "30px",
                    lg: "30px",
                    xl: "30px"

               }}
          >
               <span style={{ float: 'left' }}>
                    <Typography fontSize={'36px'} style={{ margin: "auto", marginLeft: '0px', paddingTop: '10px', width: '150px', textAlign: 'left', color: "#FFFFFF" }}><b>MAKADI</b></Typography>
                    <Typography fontSize={'35px'} style={{ margin: "auto", marginLeft: '0px', marginTop: '-22px', width: '150px', textAlign: 'left', color: "#FFFFFF", fontWeight: '400' }}>HEIGHTS</Typography>
                    <Typography fontSize={'10px'} style={{ margin: "auto", marginTop: '-12px', width: '150px', textAlign: 'center', color: "#FFFFFF" }}>RED SEA</Typography>
               </span>
               <span style={{ float: 'right', display: 'flex', margin: 'auto', padding: '10px', height: '40%' }}>

                    {
                         width > 680 &&
                         <>
                              <CloudOutlinedIcon style={{ margin: 'auto', marginLeft: '10px', marginRight: '10px', color: '#FFF' }} />
                              <span style={{ color: '#FFF', margin: 'auto' }}>
                                   {temp.temperature}&deg;
                              </span>

                              <Avatar sx={{ backgroundColor: 'transparent', border: 1, borderColor: "#FFFFFF", margin: 'auto', marginLeft: '10px', marginRight: '10px', }}>
                                   <LocalPhoneIcon />
                              </Avatar>
                              <Button variant='primary' style={{ padding: '10px', backgroundColor: '#FFF', borderRadius: '0px', width: '150px', height: '50%', margin: 'auto', }}>
                                   BOOK NOW
                              </Button>
                         </>
                    }

                    <p style={{ margin: "auto", padding: '10px', paddingLeft: '30px', color: '#FFF' }}>MENU</p>


                    <MenuIcon fontSize="large" sx={{ color: '#FFF', margin: 'auto' }} />

               </span>
          </Box>
     );
}

export default TopBar;
