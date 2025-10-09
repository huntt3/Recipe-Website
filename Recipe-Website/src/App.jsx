import Header from "./components/Header";
import RecipeBook from "./components/RecipeBook";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 print:bg-white">
      <Header />

      <main className="max-w-6xl mx-auto px-4 pb-8 print:max-w-none print:px-0">
        <RecipeBook />
      </main>
    </div>
  );
}

export default App;
