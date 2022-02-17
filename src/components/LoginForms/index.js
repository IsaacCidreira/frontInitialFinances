import React, { useState } from 'react';
import FormsContainer from '../formsContainer';
import { Container, Form, LoginAuth } from './style';
import imagem from '../assets/images/login.jpg';
import google from '../assets/images/google.png';
import apple from '../assets/images/logotipo-da-apple-em-formato-preto-com-um-orificio-de-mordida.png';
import { Link } from 'react-router-dom';
import { useErros } from '../hooks/useErros';
import isEmailValid from '../../utils/isEmailValid';

const LoginForms = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setError, errors, getErrorMessageByFieldName, removeError } =
    useErros();
  const isFormValid = email && password && errors.length === 0;
  function handleChangeEmail({ target }) {
    setEmail(target.value);
    if (!isEmailValid(target.value)) {
      setError({ field: 'email', message: 'Digite um e-mail válido.' });
    } else {
      removeError('email');
    }
  }

  function handleChangePassword({ target }) {
    setPassword(target.value);

    if (!target.value) {
      setError({ field: 'senha', message: 'Digite sua senha.' });
    } else {
      removeError('senha');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <Container>
      <div className="sub-container">
        <div>
          <img src={imagem} alt="" />
        </div>
        <div className="loginForm">
          <div className="title">
            <h1>Entrar na minha conta</h1>
            <p>
              É novo por aqui? <Link to="/">Crie uma conta.</Link>
            </p>
          </div>
          <Form onSubmit={handleSubmit}>
            <FormsContainer error={getErrorMessageByFieldName('email')}>
              <input
                type="text"
                placeholder="E-mail:"
                value={email}
                onChange={handleChangeEmail}
              />
            </FormsContainer>

            <FormsContainer error={getErrorMessageByFieldName('senha')}>
              <div className="senha">
                <input
                  type="password"
                  placeholder="Senha:"
                  value={password}
                  onChange={handleChangePassword}
                />
                <button disabled={!isFormValid}>Entrar</button>
              </div>
            </FormsContainer>
            <div className="lostPasswordText">
              <Link to="/">Esqueci minha senha</Link>
            </div>
            <div className="or-login-form">
              <div className="or-login-form--line"></div>
              <div>
                <p>ou</p>
              </div>
              <div className="or-login-form--line"></div>
            </div>
          </Form>

          <LoginAuth>
            <img src={google} alt="" />

            <p>Entrar com minha conta do Google</p>
          </LoginAuth>
          <LoginAuth>
            <img src={apple} alt="" />
            <p>Entrar com minha conta da Apple</p>
          </LoginAuth>
        </div>
      </div>
    </Container>
  );
};

export default LoginForms;
