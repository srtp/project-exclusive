import React from 'react';
import LayoutLogin from '@/features/login/layout/LayoutLogin';
import FormLogin from '@/features/login/components/formLogin/FormLogin';
import ButtonLoginGoogle from '@/features/login/ui/ButtonLoginGoogle';

function index() {
  return (
    <>
      <LayoutLogin
        formLogin={<FormLogin />}
        buttonLoginGoogle={<ButtonLoginGoogle />}
      />
    </>
  );
}

export default index;
