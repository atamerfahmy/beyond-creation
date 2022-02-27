import React from 'react';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import SimpleImageSlider from 'react-simple-image-slider';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SportsTennisOutlinedIcon from '@mui/icons-material/SportsTennisOutlined';
import ChildFriendlyOutlinedIcon from '@mui/icons-material/ChildFriendlyOutlined';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import ParkIcon from '@mui/icons-material/Park';
import HotelIcon from '@mui/icons-material/Hotel';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const images = [
     { url: require('../../images/Mall.jpg') },
     { url: require('../../images/Sports.jpg') },
     { url: require('../../images/Kids-area.jpg') },
     { url: require('../../images/Central-Park.jpg') },
     { url: require('../../images/hotels.jpg') },
     { url: require('../../images/medical.jpg') },


]
const BottomLayout = ({ width }) => {

     return (

          <Box
               p={{
                    xs: "15px",
                    sm: "15px",
                    md: "70px",
                    lg: "70px",
                    xl: "70px"

               }}

               // pt={"10px"}
               // backgroundColor: '#2E4978'
               sx={{
                    backgroundColor: '#FFF'
               }}
          >
               <Grid container sx={{ height: '100%' }} spacing={8}>
                    {/* <Grid item xs={12} sm={12} md={6} lg={6} xl={6} px={'auto'}>
                         <img src={require('../../images/fam.PNG')} style={{ width: '80%', height: '80%', margin: 'auto', }} />
                    </Grid> */}
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{}}>
                         <Typography fontSize={35} style={{ color: "#2E4978", marginTop: '0px' }}>
                              Discover Lifestyle
                         </Typography>
                         <b>
                              <p style={{ color: "#2E4978", margin: '0px', fontSize: '62px', marginTop: '-25px' }}>
                                   Amentities
                              </p>
                         </b>
                         <Typography style={{ color: "#2E4978" }}>
                              Occupying a land area of 33,000 square meters,
                              Makadi Heights' stunning club house
                         </Typography>

                         <Box m={'auto'} pt={'35px'}>
                              <Grid container sx={{ margin: 'auto' }}>
                                   <Grid item xs={6} sm={6} md={6} lg={6} xl={6} sx={{
                                        borderRightWidth: 1,
                                        borderRightStyle: 'dotted',
                                   }}>
                                        <Box sx={{
                                             borderBottomWidth: 1,
                                             borderBottomStyle: 'dotted',
                                             marginRight: '25px',
                                             marginLeft: '25px',
                                             paddingBottom: '25px',
                                        }}>
                                             <Box sx={{ flex: 1, textAlign: 'center' }}>
                                                  <LocalMallIcon style={{
                                                       color: '#2E4978'
                                                  }} />
                                                  <Typography fontSize={'13px'} style={{ color: "#2E4978" }}>
                                                       COMMERCIAL AREAS
                                                  </Typography>
                                                  <Typography fontSize={'11px'} style={{ color: "gray", whiteSpace: 'pre-line' }}>
                                                       Downtown {'\n'}
                                                       Makadi Heights Mall
                                                  </Typography>
                                             </Box>
                                        </Box>

                                        <Box sx={{
                                             borderBottomWidth: 1,
                                             borderBottomStyle: 'dotted',
                                             margin: '25px',
                                             paddingBottom: '25px'
                                        }}>
                                             <Box sx={{ flex: 1, textAlign: 'center' }}>
                                                  <ChildFriendlyIcon style={{
                                                       color: '#2E4978'
                                                  }} />
                                                  <Typography fontSize={'13px'} style={{ color: "#2E4978" }}>
                                                       KIDS FRIENDLY AREAS
                                                  </Typography>
                                                  <Typography fontSize={'11px'} style={{ color: "gray" }}>
                                                       Kids Aqua Park
                                                       Kids Area
                                                  </Typography>
                                             </Box>
                                        </Box>

                                        <Box sx={{
                                             // borderBottomWidth: 1,
                                             // borderBottomStyle: 'dotted',
                                             margin: '25px',
                                             paddingBottom: '25px'
                                        }}>
                                             <Box sx={{ flex: 1, textAlign: 'center' }}>
                                                  <HotelIcon style={{
                                                       color: '#2E4978'
                                                  }} />
                                                  <Typography fontSize={'13px'} style={{ color: "#2E4978" }}>
                                                       HOTELS
                                                  </Typography>
                                                  <Typography fontSize={'11px'} style={{ color: "gray" }}>
                                                       Far far away, behind the word mountains
                                                  </Typography>
                                             </Box>
                                        </Box>
                                   </Grid>
                                   <Grid item xs={6} sm={6} md={6} lg={6} xl={6} sx={{
                                        borderRightWidth: 1,
                                        borderRightStyle: 'dotted',
                                        borderRightColor: 'white'
                                   }}>
                                        <Box sx={{
                                             borderBottomWidth: 1,
                                             borderBottomStyle: 'dotted',
                                             marginRight: '25px',
                                             marginLeft: '25px',
                                             paddingBottom: '25px'
                                        }}>
                                             <Box sx={{ flex: 1, textAlign: 'center' }}>
                                                  <SportsTennisOutlinedIcon style={{
                                                       color: '#2E4978'
                                                  }} />
                                                  <Typography fontSize={'13px'} style={{ color: "#2E4978" }}>
                                                       SPORTS FACILITIES
                                                  </Typography>
                                                  <Typography fontSize={'11px'} style={{ color: "gray" }}>
                                                       Sports Courts, Fitness Center,
                                                       Water Sport Activities
                                                  </Typography>
                                             </Box>
                                        </Box>

                                        <Box sx={{
                                             borderBottomWidth: 1,
                                             borderBottomStyle: 'dotted',
                                             margin: '25px',
                                             paddingBottom: '25px'
                                        }}>
                                             <Box sx={{ flex: 1, textAlign: 'center' }}>
                                                  <ParkIcon style={{
                                                       color: '#2E4978'
                                                  }} />
                                                  <Typography fontSize={'13px'} style={{ color: "#2E4978" }}>
                                                       CENTRAL PARK
                                                  </Typography>
                                                  <Typography fontSize={'11px'} style={{ color: "gray" }}>
                                                       Far far away, behind the word mountains
                                                  </Typography>
                                             </Box>
                                        </Box>

                                        <Box sx={{
                                             // borderBottomWidth: 1,
                                             // borderBottomStyle: 'dotted',
                                             margin: '25px',
                                             paddingBottom: '25px'
                                        }}>
                                             <Box sx={{ flex: 1, textAlign: 'center' }}>
                                                  <LocalHospitalIcon style={{
                                                       color: '#2E4978'
                                                  }} />
                                                  <Typography fontSize={'13px'} style={{ color: "#2E4978" }}>
                                                       MEDICAL FACILITIES
                                                  </Typography>
                                                  <Typography fontSize={'11px'} style={{ color: "gray" }}>
                                                       Far far away, behind the word mountains
                                                  </Typography>
                                             </Box>
                                        </Box>
                                   </Grid>
                              </Grid>
                         </Box>

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{
                         // width: 'auto'
                    }} >
                         <Box sx={{
                              // width: '100%',
                              // height: '100%',
                         }}>
                              <SimpleImageSlider
                                   width={330}
                                   height={480}
                                   style={{
                                        margin: 'auto',
                                        marginTop: width >= 900? '80px': '0px'
                                   }}
                                   images={images}
                                   showBullets={true}
                              />
                         </Box>
                    </Grid>
               </Grid>
          </Box>
     );
}

export default BottomLayout;
