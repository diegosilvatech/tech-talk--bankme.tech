import { v4 as uuid } from 'uuid';

export type SignInQuerestProps = {
  email: string;
  password: string;
};

const responseDelay = (amount = 100) => {
  return new Promise((resolve) => setTimeout(resolve, amount));
};

const signInRequest = async ({}: SignInQuerestProps) => {
  await responseDelay();

  return {
    token: uuid(),
    user: {
      name: 'Diego Silva',
      email: 'diego.silva@bankme.tech',
      avatarUrl: 'https://github.com/diegosilvatech.png',
    },
  };
};

const recoverUserData = async () => {
  await responseDelay();

  return {
    token: uuid(),
    user: {
      name: 'Diego Silva',
      email: 'diego.silva@bankme.tech',
      avatarUrl: 'https://github.com/diegosilvatech.png',
    },
  };
};

export { signInRequest, recoverUserData };
