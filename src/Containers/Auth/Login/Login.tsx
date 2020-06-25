import React from 'react';
import LoginForm from '../views/LoginForm';
import logo from '../../../assets/images/logo.svg';
import loginImage from '../../../assets/img/login_image.png';
import styled from 'styled-components';


interface State { }

class Login extends React.Component<State> {
   state: State = {};

   render() {
    return (
      <Container>
        <FirstHalf>
          <LightColumn>
            <div style={{ display: 'flex' }}>
              <img src={logo} alt="circle" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <LoginForm />
            </div>
            <div className="footer-text">
              By logging in, you agree to our{' '}
              <span onClick={() => window.open('https://onet.io/terms')}>
                {' '}
                Terms & Conditions{' '}
              </span>{' '}
              and{' '}
              <span onClick={() => window.open('https://onet.io/privacy')}>
                {' '}
                Privacy Policy{' '}
              </span>
            </div>
          </LightColumn>
        </FirstHalf>
        <FirstHalf>
          <Image>
            <img src={loginImage} alt="electro" />
          </Image>

        </FirstHalf>
      </Container>
    );
  }
}

const Container = styled.div`
display:flex;

`;
const FirstHalf = styled.div`
flex-basis:50%

`;

const Image = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
flex-wrap:nowrap;
align-content:stretch;
height:100%;
`;

const LightColumn = styled.div`
  /* min-height: 100vh; */
  padding: 2rem 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .logo-text {
    color: #1c2d41;
    font-family: "Poppins Semi Bold";
    font-size: 1.25rem;
    font-weight: 600;
    padding-left: 0.8rem;
  }

  .footer-text {
    color: #848ca3;
    font-family: "Poppins Medium";
    font-size: 0.75rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    padding-bottom: 1rem;

    span {
      color: #0aafff;
      margin: 0 0.2rem;
      cursor: pointer;
    }
  }
`;

export default Login;

