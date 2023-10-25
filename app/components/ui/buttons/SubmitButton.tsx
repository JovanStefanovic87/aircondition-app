const SubmitButton = ({ value = '', isDisabled = true }) => {
  return (
    <button
      type='submit'
      className={`mt-4 px-4 py-2 rounded-md ${
        isDisabled
          ? 'bg-gray-300 text-black cursor-not-allowed opacity-50'
          : 'bg-blueLight text-white'
      }`}
      disabled={isDisabled}
    >
      {value}
    </button>
  );
};

export default SubmitButton;
