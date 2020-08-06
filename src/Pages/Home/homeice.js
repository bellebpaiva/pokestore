import React from 'react';
import styled from 'styled-components';
import MenuIce from '../../Components/Menu/menu-ice';
import App from '../../App';
import FooterIce from '../../Components/Footer/footer-ice';
import Sidebar from '../../Components/Sidebar';


const HomeWrapper = styled.div`
  background: var(--grayLight);
  padding-top: 40px;
`


function HomeIce() {
  return (
    <HomeWrapper>
      <MenuIce />
      <Sidebar />
      <App />
      <FooterIce />
    </HomeWrapper>
  );
}

export default HomeIce;
