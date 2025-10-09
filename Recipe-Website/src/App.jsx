import Header from "./components/Header";
import RecipeBook from "./components/RecipeBook";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 print:bg-white">
      <Header />

      <main className="max-w-6xl mx-auto px-4 pb-8 print:max-w-none print:px-0">
        <RecipeBook />
      </main>

      {/* Print-only footer */}
      <footer className="hidden print:block print:fixed print:bottom-0 print:w-full print:text-center print:text-xs print:border-t print:border-black print:pt-2 print:bg-white">
        <p>Recipe Collection - Printed on {new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  );
}

export default App;
