import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (val) => {
    setInput((prev) => prev + val);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculate = () => {
    try {
      // simple safe eval fallback
      const result = Function(`return ${input}`)();
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">

      <div className="scale-[3] origin-center">
        
        <h2 className="text-center text-xl font-bold mb-3">
          Calculator
        </h2>

        {/* Display */}
        <input
          type="text"
          value={input}
          readOnly
          placeholder="0"
          className="w-max-width h-10 mb-3 text-right px-2 border rounded"
        />

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-2">
          
          {/* Numbers */}
          {[7,8,9].map(n => (
            <button key={n} onClick={() => handleClick(n)} className="bg-gray-100 p-2 rounded">{n}</button>
          ))}
          <button onClick={() => handleClick("/")} className="bg-orange-300 p-2 rounded">/</button>

          {[4,5,6].map(n => (
            <button key={n} onClick={() => handleClick(n)} className="bg-gray-100 p-2 rounded">{n}</button>
          ))}
          <button onClick={() => handleClick("*")} className="bg-orange-300 p-2 rounded">*</button>

          {[1,2,3].map(n => (
            <button key={n} onClick={() => handleClick(n)} className="bg-gray-100 p-2 rounded">{n}</button>
          ))}
          <button onClick={() => handleClick("-")} className="bg-orange-300 p-2 rounded">-</button>

          <button onClick={() => handleClick("0")} className="bg-gray-100 p-2 rounded col-span-2">0</button>
          <button onClick={() => handleClick(".")} className="bg-gray-100 p-2 rounded">.</button>
          <button onClick={() => handleClick("+")} className="bg-orange-300 p-2 rounded">+</button>

          {/* Actions */}
          <button onClick={clearInput} className="bg-red-400 text-white p-2 rounded col-span-2">
            Clear
          </button>
          <button onClick={calculate} className="bg-green-400 text-white p-2 rounded col-span-2">
            =
          </button>

        </div>
      </div>
    </div>
  );
}

export default App;