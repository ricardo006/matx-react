import { Box, styled } from '@mui/material';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const Timeline = () => {
  return (
    <Container>
      Linha do Tempo
    </Container>
  );
};

export default Timeline;