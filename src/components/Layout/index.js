import React from 'react';
import Box from '@mui/material/Box';

const Layout = ({ children }) => {

     return (
          <Box
               sx={{
                    height: "100vh",
                    backgroundColor: '#006999'
               }}
          >
               {children}
          </Box>
     );
}

export default Layout;
