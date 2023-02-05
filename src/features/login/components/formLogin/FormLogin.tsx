import React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

function FormLogin() {
  return (
    <>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          // html input attribute
          name="email"
          type="email"
          placeholder="johndoe@email.com"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          // html input attribute
          name="password"
          type="password"
          placeholder="password"
        />
      </FormControl>
      <Button sx={{ mt: 1 /* margin top */ }}>Log in</Button>
    </>
  );
}

export default FormLogin;
