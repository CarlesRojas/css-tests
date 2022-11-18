import { useState } from 'react';
import Button, { ButtonType } from '../components/Button/Button';

const Home = () => {
  const [message, setMessage] = useState('Do you like Styled Components?');

  return (
    <main>
      <section>
        <h1>Styled Components</h1>

        <p>{message}</p>

        <div>
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
        </div>
      </section>
    </main>
  );
};

export default Home;
