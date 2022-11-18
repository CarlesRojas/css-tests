import { useState } from 'react';
import styled from 'styled-components';
import Button, { ButtonType } from '../components/Button/Button';

const Main = styled.main`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0 1px black, 0 6px 0 0 black;
  background-color: rgba(255, 255, 255, 0.03);
  padding: 4rem 6rem;
  gap: 2rem;
`;

const Title = styled.h1`
  font-size: 1.7rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
`;

const Text = styled.p`
  opacity: 0.7;
  font-size: 1.2rem;
`;

const Buttons = styled.div`
  display: flex;
  width: 100%;
  gap: 1.5rem;
`;

const Home = () => {
  const [message, setMessage] = useState('Do you like Styled Components?');

  return (
    <Main>
      <Section>
        <Title>Styled Components</Title>

        <Text>{message}</Text>

        <Buttons>
          <Button
            title="Nope"
            buttonType={ButtonType.SECONDARY}
            type="button"
            onClick={() => setMessage('You hate Styled Components')}
          />

          <Button
            title="Love it"
            buttonType={ButtonType.PRIMARY}
            type="button"
            onClick={() => setMessage('You love Styled Components')}
          />
        </Buttons>
      </Section>
    </Main>
  );
};

export default Home;
