import { useState } from 'react';
import Button, { ButtonType } from '../components/Button/Button';

const Home = () => {
  const [message, setMessage] = useState('Do you like Stitches?');

  return (
    <main>
      <section>
        <h1>Stitches</h1>

        <p>{message}</p>

        <div>
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
        </div>
      </section>
    </main>
  );
};

export default Home;
