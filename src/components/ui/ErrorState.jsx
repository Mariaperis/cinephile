function ErrorState({
  message,
  onRetry,
}) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        py-20
      "
    >
      <p className="text-red-400 mb-6">
        {message}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="
            bg-lime-400
            text-black
            px-5
            py-3
            rounded-xl
            font-semibold
          "
        >
          Retry
        </button>
      )}
    </div>
  );
}

export default ErrorState;