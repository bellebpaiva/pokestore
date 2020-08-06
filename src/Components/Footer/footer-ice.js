import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png'

import styled from 'styled-components';


const FooterWrapper = styled.footer`
  background: var(--primary);
  border-top: 2px solid var(--grayLight);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 20px;
  padding-bottom: 10px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;


function FooterIce() {
  return (
    <FooterWrapper>
      <Link to="/">
                <img className="Logo" src={Logo} alt="Myflix logo"/>
      </Link>
      <p>
        Criado por
        {' '}
        <a href="https://www.linkedin/in/bellebpaiva">
          Belle Paiva
        </a>
      </p>
    </FooterWrapper>
  );
}

export default FooterIce;
