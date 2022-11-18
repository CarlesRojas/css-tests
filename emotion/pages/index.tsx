/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import Button, { ButtonType } from '../components/Button/Button';

const style = {
  home: css({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  }),

  section: css({
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 0 0 1px black, 0 6px 0 0 black',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    padding: '4rem 6rem',
    gap: '2rem'
  }),

  title: css({
    fontSize: '1.7rem',
    fontWeight: 600,
    letterSpacing: '0.2rem',
    textTransform: 'uppercase'
  }),

  text: css({
    opacity: 0.7,
    fontSize: '1.2rem'
  }),

  buttons: css({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    gap: '1.5rem'
  })
};

const Home = () => {
  const [message, setMessage] = useState('Do you like Emotion?');

  return (
    <main css={style.home}>
      <section css={style.section}>
        <h1 css={style.title}>Emotion</h1>

        <p css={style.text}>{message}</p>

        <div css={style.buttons}>
          <Button
            title="Nope"
            buttonType={ButtonType.SECONDARY}
            type="button"
            onClick={() => setMessage('You hate Emotion')}
          />

          <Button
            title="Love it"
            buttonType={ButtonType.PRIMARY}
            type="button"
            onClick={() => setMessage('You love Emotion')}
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
