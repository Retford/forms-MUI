import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const Formulario = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [promociones, setPromociones] = useState(true);
  const [novedades, setNovedades] = useState(false);

  const [errores, setErrores] = useState({
    name: {
      error: false,
      message: 'Mínimo de 3 caracteres',
    },
    lastName: {
      error: false,
      message: 'Apellido mínimo 3 caracteres',
    },
  });

  const validarNombre = (nombre) => {
    if (nombre.length >= 3) {
      return {
        name: {
          error: false,
          message: '',
        },
      };
    } else {
      return {
        name: {
          error: true,
          message: 'Mínimo 3 caracteres',
        },
      };
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({ name, lastName, email, promociones, novedades });
      }}
    >
      <TextField
        id='name'
        label='Nombre'
        variant='outlined'
        fullWidth
        margin='normal'
        onChange={(e) => setName(e.target.value)}
        value={name}
        error={errores.name.error}
        helperText={errores.name.error ? errores.name.message : ''}
        onBlur={(e) => setErrores(validarNombre(e.target.value))}
      />
      <TextField
        id='lastname'
        label='Apellidos'
        variant='outlined'
        fullWidth
        margin='normal'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <TextField
        id='email'
        label='Email'
        variant='outlined'
        fullWidth
        margin='normal'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={promociones}
              onChange={(e) => setPromociones(e.target.checked)}
            />
          }
          label='Promociones'
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={novedades}
              onChange={(e) => setNovedades(e.target.checked)}
            />
          }
          label='Novedades'
        />
      </FormGroup>
      <Button variant='contained' type='submit'>
        Registrarse
      </Button>
    </form>
  );
};

export default Formulario;
