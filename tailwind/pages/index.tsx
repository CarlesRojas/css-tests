import { useState } from 'react';
import Button, { ButtonType } from '../components/Button/Button';

const Home = () => {
  const [message, setMessage] = useState('Click any button');

  return (
    <main>
      <section>
        <h1>Tailwind</h1>

        <p>{message}</p>

        <div>
          <Button
            title="Cancel"
            buttonType={ButtonType.SECONDARY}
            type="button"
            onClick={() => setMessage('You clicked Cancel')}
          />

          <Button
            title="Continue"
            buttonType={ButtonType.PRIMARY}
            type="button"
            onClick={() => setMessage('You clicked Continue')}
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
