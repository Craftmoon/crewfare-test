import { useState } from 'react';

interface ButtonToggleProps {
  onToggle?: (enabled: boolean) => void;
  enabledText?: string;
  disabledText?: string;
}

export default function ButtonToggle({
  onToggle,
  enabledText = 'Enable Event',
  disabledText = 'Disable Event',
}: ButtonToggleProps) {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleEnable = () => {
    setIsEnabled(true);
    onToggle?.(true);
  };

  const handleDisable = () => {
    setIsEnabled(false);
    onToggle?.(false);
  };

  return (
    <div className="relative flex overflow-hidden whitespace-nowrap rounded-lg border border-primary/50 bg-secondary px-7 py-2">
      <div
        className={`absolute left-0 top-0 h-full w-1/2 rounded-lg border border-primary bg-primary transition-all duration-300 ${
          isEnabled ? 'translate-x-0' : 'translate-x-full'
        }`}
      ></div>

      <button
        className={`z-10 flex-1 whitespace-nowrap pr-5 text-center font-bold transition ${
          isEnabled
            ? 'hover:animate-subtle-ping text-white'
            : 'text-primary hover:text-white'
        }`}
        onClick={handleEnable}
      >
        {enabledText}
      </button>

      <button
        className={`z-10 flex-1 whitespace-nowrap pl-5 text-center font-bold transition ${
          !isEnabled ? 'text-white' : 'text-primary hover:text-white'
        }`}
        onClick={handleDisable}
      >
        {disabledText}
      </button>
    </div>
  );
}
