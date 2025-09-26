const Instructions = () => {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 no-print">
      <h2 className="text-lg font-semibold text-blue-800 mb-2">
        📖 How to Use This Recipe Website
      </h2>
      <div className="text-sm text-blue-700 space-y-1">
        <p>
          • <strong>Browse:</strong> View all recipes in the main grid
        </p>
        <p>
          • <strong>Search:</strong> Find recipes by name or ingredient
        </p>
        <p>
          • <strong>Filter:</strong> Show only specific recipe types (Dinner,
          Dessert, etc.)
        </p>
        <p>
          • <strong>Sort:</strong> Organize recipes by name, type, or cook time
        </p>
        <p>
          • <strong>View Details:</strong> Click any recipe card to see full
          instructions
        </p>
        <p>
          • <strong>Print:</strong> Use the "Print Recipe" button for black &
          white printing
        </p>
      </div>
    </div>
  );
};

export default Instructions;
