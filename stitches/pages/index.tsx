import { useState } from 'react';
import Button, { ButtonType } from '../components/Button/Button';
import { styled } from '../styles/theme';

const Main = styled('main', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%'
});

const Section = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 0 0 1px black, 0 6px 0 0 black',
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  padding: '4rem 6rem',
  gap: '2rem'
});

const Title = styled('h1', {
  fontSize: '1.7rem',
  fontWeight: 600,
  letterSpacing: '0.2rem',
  textTransform: 'uppercase'
});

const Text = styled('p', {
  opacity: 0.7,
  fontSize: '1.2rem'
});

const Buttons = styled('div', {
  display: 'flex',
  width: '100%',
  gap: '1.5rem'
});

const Home = () => {
  const [message, setMessage] = useState('Do you like Stitches?');

  return (
    <Main>
      <Section>
        <Title>Stitches</Title>

        <Text>{message}</Text>

        <Buttons>
          <Button
            title="Nope"
            buttonType={ButtonType.SECONDARY}
            type="button"
            onClick={() => setMessage('You hate Stitches')}
          />

          <Button
            title="Love it"
            buttonType={ButtonType.PRIMARY}
            type="button"
            onClick={() => setMessage('You love Stitches')}
          />
        </Buttons>
      </Section>
    </Main>
  );
};

export default Home;
