import { useState } from 'react';
import Button, { ButtonType } from '../components/Button/Button';
import s from './index.module.scss';

const Home = () => {
  const [message, setMessage] = useState('Do you like CSS Modules?');

  return (
    <main className={s.home}>
      <section>
        <h1>CSS Modules</h1>

        <p>{message}</p>

        <div>
          <Button
            title="Nope"
            buttonType={ButtonType.SECONDARY}
            type="button"
            onClick={() => setMessage('You hate CSS modules')}
          />

          <Button
            title="Love it"
            buttonType={ButtonType.PRIMARY}
            type="button"
            onClick={() => setMessage('You love CSS modules')}
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
