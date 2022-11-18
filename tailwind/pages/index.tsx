import { useState } from 'react';
import Button, { ButtonType } from '../components/Button/Button';

const Home = () => {
  const [message, setMessage] = useState('Do you like Tailwind?');

  return (
    <main className="relative flex items-center justify-center h-full w-full">
      <section className="flex flex-col shadow-[0_0_0_1px_black,_0_6px_0_0_black] px-24 py-16 gap-[2rem]">
        <h1 className="text-[1.7rem] font-semibold tracking-[0.2rem] uppercase">Tailwind</h1>

        <p className="opacity-70 text-[1.2rem]">{message}</p>

        <div className="flex w-full gap-[1.5rem]">
          <Button
            title="Nope"
            buttonType={ButtonType.SECONDARY}
            type="button"
            onClick={() => setMessage('You hate Tailwind')}
          />

          <Button
            title="Love it"
            buttonType={ButtonType.PRIMARY}
            type="button"
            onClick={() => setMessage('You love Tailwind')}
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
