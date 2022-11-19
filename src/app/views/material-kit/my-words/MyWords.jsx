import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { Breadcrumb, SimpleCard } from 'app/components';

const MyWords = () => {
  const [state, setState] = useState({ date: new Date() });

  const {
    palavra,
    significado
  } = state;

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    
    <Container>
      <Box className="breadcrumb" sx={{mt: 4, mb: 2}}>
        <Breadcrumb
          routeSegments={[{ name: 'palavras', path: '/my-words' }, { name: 'Minhas Palavras Favoritas' }]}
        />
      </Box>

      <SimpleCard title="Cadastrar Palavras Favoritas" sx={{mt: 10}}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={6}>
            <Grid item lg={6} md={6} sm={6} xs={6} sx={{ mt: 2 }}>
              <TextField
                type="text"
                name="palavra"
                id="standard-basic"
                value={palavra || ""}
                fullWidth
                onChange={handleChange}
                errorMessages={["this field is required"]}
                label="Palavra"
                validators={["required"]}
              />
            </Grid>

            <Grid item lg={6} md={6} sm={6} xs={6} sx={{ mt: 2 }}>
              <TextField
                type="text"
                name="significado"
                label="Significado"
                fullWidth
                onChange={handleChange}
                value={significado || ""}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
            </Grid>
          </Grid>
        </Box>
      </SimpleCard>

      <SimpleCard title="Listagem de Palavras Favoritas" sx={{mt: 20}}>
        <Box sx={{ flexGrow: 1, mt: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}  md={12} p={2}>
              <Chip sx={{mr: 1, ml: 0, mt: 2}} onDelete label="Display" variant="outlined" />
              <Chip sx={{mr: 1, ml: 0, mt: 2}} onDelete label="World" variant="filled" />
              <Chip sx={{mr: 1, ml: 0, mt: 2}} onDelete label="Personal" variant="outlined" />
              <Chip sx={{mr: 1, ml: 0, mt: 2}} onDelete label="Magic" variant="outlined" />
              <Chip sx={{mr: 1, ml: 0, mt: 2}} onDelete label="Good Morning" variant="outlined" />
              <Chip sx={{mr: 1, ml: 0, mt: 2}} onDelete label="Favorite" variant="outlined" />
              <Chip sx={{mr: 1, ml: 0, mt: 2}} onDelete label="Transictions" variant="outlined" />
              <Chip sx={{mr: 1, ml: 0, mt: 2}} onDelete label="Somebody" variant="outlined" />
              <Chip sx={{mr: 1, ml: 0, mt: 2}} onDelete label="Cards" variant="outlined" />
              <Chip sx={{mr: 1, ml: 0, mt: 2}} onDelete label="Direction" variant="outlined" />
            </Grid>

            <Grid item xs={4} md={12}>
            
            </Grid>
          </Grid>
        </Box>
      </SimpleCard>
    </Container>
  );
};

export default MyWords;