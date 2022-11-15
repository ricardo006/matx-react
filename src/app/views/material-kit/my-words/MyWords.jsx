import { Box, styled } from '@mui/material';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const Download = () => {
  return (
    <Container>
      Minhas palavras favoritas
    </Container>
  );
};

export default Download;