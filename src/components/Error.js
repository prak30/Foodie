const Error = () => {
  return (
    <div className="text-center mx-auto p-4 md:w-8/12 lg:w-6/12 xl:w-4/12">
      <h1 className="font-bold text-2xl md:text-3xl mb-4">Oops!!!</h1>
      <h2 className="text-xl md:text-2xl mb-2">Something went wrong</h2>
      <h3 className="text-lg md:text-xl">
        {/* Display additional error information if available */}
        {error && (
          <>
            {error.status && <span className="font-bold">{error.status}:</span>}{" "}
            {error.statusText}
          </>
        )}
      </h3>
    </div>
  );
};

export default Error;
