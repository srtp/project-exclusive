import { useColorScheme } from '@mui/joy';
import React, { useEffect, useState } from 'react';

type Props = {
    status:boolean
}

function useSwitchMode({ status }: Props) {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return { mode, setMode };
}
