import { useState } from 'react';

export const ButtonToggle = () => {
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <div className="relative flex overflow-hidden whitespace-nowrap rounded-lg border border-primary/50 bg-secondary px-7 py-2">
      <div
        className={`absolute left-0 top-0 h-full w-1/2 rounded-lg border border-primary bg-primary transition-all duration-300 ${
          isEnabled ? 'translate-x-0' : 'translate-x-full'
        }`}
      ></div>

      <button
        className={`z-10 flex-1 whitespace-nowrap pr-5 text-center font-bold transition ${
          isEnabled ? 'text-white' : 'text-primary hover:text-white'
        }`}
        onClick={() => setIsEnabled(true)}
      >
        Enable Event
      </button>

      <button
        className={`z-10 flex-1 whitespace-nowrap pl-5 text-center font-bold transition ${
          !isEnabled ? 'text-white' : 'text-primary hover:text-white'
        }`}
        onClick={() => setIsEnabled(false)}
      >
        Disable Event
      </button>
    </div>
  );
};
