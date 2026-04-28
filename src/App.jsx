import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (val) => {
    setInput(input + val);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-5 rounded-lg shadow-lg w-64">
        <h2 className="text-center text-xl font-semibold mb-4">
          React Calculator App
        </h2>

      <input
  type="text"
  value={input}
  readOnly
  placeholder="Enter calculation..."
  className="w-full h-10 mb-4 text-right px-2 border rounded"
/>

        <div className="grid grid-cols-4 gap-2">
          <button onClick={() => handleClick("7")} className="btn">7</button>
          <button onClick={() => handleClick("8")} className="btn">8</button>
          <button onClick={() => handleClick("9")} className="btn">9</button>
          <button onClick={() => handleClick("/")} className="btn bg-orange-400">/</button>

          <button onClick={() => handleClick("4")} className="btn">4</button>
          <button onClick={() => handleClick("5")} className="btn">5</button>
          <button onClick={() => handleClick("6")} className="btn">6</button>
          <button onClick={() => handleClick("*")} className="btn bg-orange-400">*</button>

          <button onClick={() => handleClick("1")} className="btn">1</button>
          <button onClick={() => handleClick("2")} className="btn">2</button>
          <button onClick={() => handleClick("3")} className="btn">3</button>
          <button onClick={() => handleClick("-")} className="btn bg-orange-400">-</button>

          <button onClick={() => handleClick("0")} className="btn">0</button>
          <button onClick={() => handleClick(".")} className="btn">.</button>
          <button onClick={calculate} className="btn bg-green-400">=</button>
          <button onClick={() => handleClick("+")} className="btn bg-orange-400">+</button>
        </div>

        <button
          onClick={clearInput}
          className="w-full mt-3 bg-red-400 text-white py-1 rounded"
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;