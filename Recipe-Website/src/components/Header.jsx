const Header = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Screen Header */}
      <header className="bg-white border-b border-gray-300 shadow-sm mb-6 no-print">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Recipe Collection
            </h1>
            <p className="text-gray-600 mb-4">A printable recipe book</p>
            <button
              onClick={handlePrint}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              🖨️ Print Recipe Book
            </button>
          </div>
        </div>
      </header>

      {/* Print Header */}
      <header className="hidden print:block print:text-center print:mb-8">
        <h1 className="text-2xl font-bold text-black mb-2">
          Recipe Collection
        </h1>
        <p className="text-sm text-black">A collection of favorite recipes</p>
        <div className="border-b-2 border-black mt-4"></div>
      </header>
    </>
  );
};

export default Header;
