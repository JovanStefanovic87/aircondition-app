interface PrimaryButtonProps {
  onClick: (event: React.FormEvent) => void;
  value?: string;
  isDisabled?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onClick,
  value = 'Speichern',
  isDisabled = false,
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-md text-xl ${
        isDisabled
          ? 'bg-gray-300 text-black cursor-not-allowed opacity-50'
          : 'bg-blueLight text-white hover:bg-blueDark'
      }`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {value}
    </button>
  );
};

export default PrimaryButton;
