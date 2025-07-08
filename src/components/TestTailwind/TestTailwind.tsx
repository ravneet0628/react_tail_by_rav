export function TestTailwind() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <div className="h-48 w-full object-cover md:h-full md:w-48 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Tailwind CSS Test
          </div>
          <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
            Testing Tailwind Styles
          </h2>
          <p className="mt-2 text-slate-500">
            This component tests various Tailwind classes including colors, spacing, typography, and responsive design.
          </p>
          <div className="mt-4 flex gap-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Primary Button
            </button>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Secondary Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 