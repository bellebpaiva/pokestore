import React from 'react';
import styled from 'styled-components';
import Menu from '../../Components/Menu';
import App from '../../App';
import Footer from '../../Components/Footer';
import Sidebar from '../../Components/Sidebar';


const HomeWrapper = styled.div`
  background: var(--grayLight);
  padding-top: 40px;
`


function Home() {
  return (
    <HomeWrapper>
      <Menu />
      <Sidebar />
      <App />
      <Footer />
    </HomeWrapper>
  );
}

export default Home;
