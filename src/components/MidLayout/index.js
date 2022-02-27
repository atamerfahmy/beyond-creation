import React from 'react';
import Box from '@mui/material/Box';
import TopBar from '../TopLayout/components/TopBar';
import islandBackground from "../../images/Island.jpg";
import { Grid, Typography, Button } from '@mui/material';
import { Image } from '@mui/icons-material';

const MidLayout = ({ children, temp }) => {

     return (
          <Box
               p={{
                    xs: "15px",
                    sm: "15px",
                    md: "70px",
                    lg: "70px",
                    xl: "70px"

               }}

               // pb={"50px"}
               sx={{ backgroundColor: '#2E4978' }}
          >
               <Grid container sx={{  }} spacing={8}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} px={'auto'}>
                         <img src={require('../../images/fam.PNG')} style={{ width: '100%', height: '100%', margin: 'auto',  }} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ }}>
                         <Typography fontSize={'60px'} style={{color: "#FFF", marginTop: '0px'}}>
                              The place
                         </Typography>
                         <b>
                         <Typography fontSize={'60px'} style={{color: "#FFF", fontWeight: 'bold', marginTop: '-25px'}}>
                              we call home
                         </Typography>
                         </b>
                         <Typography fontSize={'20px'} style={{color: "#FFF", marginTop: '10px', marginRight: '25px'}}>
                              Makadi Heights is a town buit over 3.4 million suqre meters planned for development, with an elevation reaching 78 meters above sea levels guaranteeing magnificent panoramic sea views residential units. Envisioned as a comprehensive town.
                         </Typography>
                         <Box py={'35px'}>
                              <Button variant='primary' style={{ backgroundColor: '#FFF', borderRadius: '0px', width: '160px', height: '35px', margin: 'auto', fontSize: '10px'}}>
                                   DOWNLOAD BROCHURE
                              </Button>
                              <Button variant='primary' style={{ backgroundColor: '#FFF', borderRadius: '0px', width: '160px', height: '35px', margin: 'auto', marginLeft: '20px', fontSize: '10px'}}>
                                   SHOW MASTER PLAN
                              </Button>
                         </Box>
                    </Grid>
               </Grid>
          </Box>
     );
}

export default MidLayout;
