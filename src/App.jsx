import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const handleClick = (val) => {
    setInput((prev) => prev + val);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculate = () => {
    try {
      const result = Function(`return ${input}`)();

      if (result > 1000) {
        setInput("Too Big");
      } else {
        setHistory((prev) => [...prev, `${input} = ${result}`]);
        setInput(result.toString());
      }
    } catch {
      setInput("Error");
    }
  };

  const handleKeyDown = (e) => {
    if (!isNaN(e.key) || "+-*/.".includes(e.key)) {
      handleClick(e.key);
    } else if (e.key === "Enter") {
      calculate();
    } else if (e.key === "Backspace") {
      setInput((prev) => prev.slice(0, -1));
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [input]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="scale-[3] origin-center">
        
        <h2 className="text-center text-xl font-bold mb-3">
          Smart Calculator
        </h2>

        <input
          type="text"
          value={input}
          readOnly
          placeholder="0"
          className="w-max-width h-10 mb-3 text-right px-2 border rounded"
        />

        <div className="grid grid-cols-4 gap-3">
          
          {[7,8,9].map(n => (
            <button key={n} onClick={() => handleClick(n)} className="bg-gray-100 p-3 rounded hover:bg-gray-300">
              {n}
            </button>
          ))}
          <button onClick={() => handleClick("/")} className="bg-orange-300 p-3 rounded">/</button>

          {[4,5,6].map(n => (
            <button key={n} onClick={() => handleClick(n)} className="bg-gray-100 p-3 rounded hover:bg-gray-300">
              {n}
            </button>
          ))}
          <button onClick={() => handleClick("*")} className="bg-orange-300 p-3 rounded">*</button>

          {[1,2,3].map(n => (
            <button key={n} onClick={() => handleClick(n)} className="bg-gray-100 p-3 rounded hover:bg-gray-300">
              {n}
            </button>
          ))}
          <button onClick={() => handleClick("-")} className="bg-orange-300 p-3 rounded">-</button>

          <button onClick={() => handleClick("0")} className="bg-gray-100 p-3 rounded col-span-2">0</button>
          <button onClick={() => handleClick(".")} className="bg-gray-100 p-3 rounded">.</button>
          <button onClick={() => handleClick("+")} className="bg-orange-300 p-3 rounded">+</button>

          <button onClick={clearInput} className="bg-red-400 text-white p-3 rounded col-span-2">
            Clear
          </button>
          <button onClick={calculate} className="bg-green-400 text-white p-3 rounded col-span-2">
            =
          </button>
        </div>

        <div className="mt-3">
          <h3 className="text-sm font-semibold">History</h3>
          <ul>
            {history.map((item, index) => (
              <li key={index} className="text-xs">{item}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default App;