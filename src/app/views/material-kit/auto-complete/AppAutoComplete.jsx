import { Box, styled } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
import AsyncAutocomplete from './AsyncAutocomplete';
import AutocompleteCombo from './AutocompleteCombo';
import BadgeAutocomplete from './BadgeAutocomplete';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const AppAutoComplete = () => {
  return (
    <Container>
      Teste
    </Container>
  );
};

export default AppAutoComplete;