import styled from 'styled-components';

export const Container = styled.section`
  width: 1380px !important;
  max-width: 100%;
  justify-content: center;
  display: flex;
  margin: 0 auto;
  align-items: center;
  height: 100vh;
  .sub-container {
    width: 850px;
    height: 400px;
    display: flex;
    justify-content: space-around;
  }
  .loginForm {
    flex: 2;
    margin-left: 30px;
    .title {
      margin-bottom: 40px;
      h1 {
        margin-top: 10px;
        font-size: 28px;
        font-weight: bold;
      }
      p {
        margin-top: 10px;
        font-size: 16px;
        color: #aaa;
        font-weight: bold;
        a {
          text-decoration: none;
          font-size: 16px;
          color: ${({ theme }) => theme.colors.secundary};
          font-weight: bold;
        }
      }
    }

    input {
      padding: 15px;

      border: 2px solid rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      outline: none;
      &:focus {
        outline: none;
      }
      &::placeholder {
        font-weight: bold;
        color: #bbb;
      }
    }
    .senha {
      display: flex;
      input {
        margin-bottom: 0px !important;
        flex: 1;
      }
      button {
        margin-left: 20px;
        border: none;
        font-size: 18px;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.colors.secundary};
        color: #fff;
        width: 70px;
        &[disabled] {
          background: #ccc;
          cursor: default;
        }
      }
    }
  }
  img {
    width: 400px;
    height: 445px;
  }
  .lostPasswordText {
    a {
      text-decoration: none;
      color: #fb1;
      font-size: 16px;
      font-weight: bold;
    }

    margin-top: 25px;
  }
  .or-login-form {
    display: flex;
    margin-top: 30px;
    align-items: center;
    margin-bottom: 40px;
    p {
      color: #aaa;
      padding: 0px 40px;
    }
    .or-login-form--line {
      display: flex;
      align-items: center;
      height: 1px;
      width: 100%;
      border: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
`;

export const LoginAuth = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 40px;
  img {
    margin-right: 40px;
    width: 20px;
    height: auto;
  }
  p {
    margin-top: 3px;
  }
`;
export const Form = styled.form``;
