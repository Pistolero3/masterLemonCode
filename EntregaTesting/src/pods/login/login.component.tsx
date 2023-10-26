import React from 'react';
import { ContainerComponent, LoginFormComponent } from './components';
import { Login } from './login.vm';
import { ConfirmationDialogComponent } from 'common/components/confirmation-dialog';

interface Props {
  onLogin: (login: Login) => void;
}

export const LoginComponent: React.FunctionComponent<Props> = ({ onLogin }) => {
  return (
    <ContainerComponent title="Login">
      <LoginFormComponent onLogin={onLogin} />
    </ContainerComponent>
  );
};
