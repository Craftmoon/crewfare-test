import crewfareLogo from '../../assets/crewfare-logo.svg';

export const Header = () => {
  return (
    <div className="w-screen py-4 flex justify-center bg-black">
      <img src={crewfareLogo} alt="Crewfare Logo" />
    </div>
  );
};
