const PrintTestButton = () => {
  const handlePrintTest = () => {
    // Create a test print preview
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>Print Test - Recipe Website</title>
          <style>
            body { font-family: Georgia, serif; font-size: 11pt; margin: 0.5in; }
            h1 { font-size: 18pt; }
            h2 { font-size: 14pt; }
            .recipe { border: 1px solid black; padding: 8pt; margin-bottom: 10pt; }
            .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12pt; }
          </style>
        </head>
        <body>
          <h1>Recipe Website Print Test</h1>
          <div class="recipe">
            <h2>Sample Recipe - Meatloaf</h2>
            <div class="grid">
              <div>
                <h3>Ingredients:</h3>
                <ul>
                  <li>3 lbs. ground beef</li>
                  <li>1 cup celery, diced</li>
                  <li>1 cup onion, diced</li>
                  <li>3 eggs</li>
                </ul>
              </div>
              <div>
                <h3>Instructions:</h3>
                <ol>
                  <li>Mix ingredients</li>
                  <li>Divide mixture in half</li>
                  <li>Fill two loaf pans</li>
                  <li>Cook at 375°F for 1 hour 30 minutes</li>
                </ol>
              </div>
            </div>
          </div>
          <p><em>This is a print test. Close this window when done.</em></p>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <button
      onClick={handlePrintTest}
      className="fixed bottom-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-purple-700 transition-colors no-print text-sm"
      title="Test print formatting"
    >
      📄 Print Test
    </button>
  );
};

export default PrintTestButton;
