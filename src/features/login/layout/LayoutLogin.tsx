import React from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';

type Props = {
  formLogin: React.ReactNode;
  buttonLoginGoogle: React.ReactNode
};

function LayoutLogin({ formLogin, buttonLoginGoogle }: Props) {
  return (
    <main>
      <Sheet
        sx={{
          width: 300,
          mx: 'auto', // margin left & right
          my: 4, // margin top & botom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h4" component="h1">
            <b>Welcome!</b>
          </Typography>
          <Typography level="body2">Sign in to continue.</Typography>
        </div>
        {formLogin || null}
        {buttonLoginGoogle || null}
        <Typography
          endDecorator={<Link href="/sign-up">Sign up</Link>}
          fontSize="sm"
          sx={{ alignSelf: 'center' }}
        >
          Don&apos;t have an account?
        </Typography>
      </Sheet>
    </main>
  );
}

export default LayoutLogin;
