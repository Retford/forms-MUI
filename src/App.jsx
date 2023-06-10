import Formulario from './components/Formulario';
import { Container, Typography } from '@mui/material';

function App() {
  const handleSubmit = (valores) => {
    console.log('appJS', valores);
  };
  return (
    <Container component='section' maxWidth='md'>
      <Typography variant='h3' align='center' component='h1'>
        Formulario Registro
      </Typography>
      <Formulario handleSubmit={handleSubmit} />
    </Container>
  );
}

export default App;
