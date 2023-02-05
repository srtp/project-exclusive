import { useColorScheme } from '@mui/joy';
import { useEffect, useState } from 'react';

function useSwitchMode() {
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

export default useSwitchMode;
