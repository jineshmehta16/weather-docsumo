import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Box
            sx={{
              width: 150,
              height: 50,
            }}>
            <h2 style={{ marginTop: '10px' }}>DOCSUMO</h2>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
