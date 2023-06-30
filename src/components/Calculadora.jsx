/* eslint-disable react/prop-types */
import DivizaSelector from "./DivizaSelector";
import { useState } from "react";

const Calculadora = ({
  input,
  setInput,
  diviza,
  setDiviza,
  dolarOficial,
  setResultado,
  setSinImp,
  setImpG,
  setImpP,
}) => {
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleButton = (e) => {
    setInput(input + e.target.value);
  };

  const handleReset = () => {
    setInput("");
    setResultado(0);
    setSinImp(0);
    setImpG(0);
    setImpP(0);
  };

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    if (input === "") {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 3000);
      setErrorMessage("El campo no puede estar vacio");
    } else if (input < 0) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      setErrorMessage("El campo no puede ser negativo");
    } else {
      setError(false);
      setErrorMessage("");
      if (diviza === "USD") {
        calculoDolares();
      } else {
        calculoPesos();
      }
    }
  };

  const calculoDolares = () => {
    const montoDolar = parseFloat(input) * dolarOficial;
    const impuestoGanancias = montoDolar * 0.45;
    const impuestoPais = montoDolar * 0.3;

    const total = montoDolar + impuestoGanancias + impuestoPais;

    setImpG(impuestoGanancias);
    setImpP(impuestoPais);
    setSinImp(montoDolar);
    setResultado(total);
  };

  const calculoPesos = () => {
    const monto = parseFloat(input);

    const impuestoGanancias = monto * 0.45;
    const impuestoPais = monto * 0.3;

    const total = monto + impuestoGanancias + impuestoPais;

    setImpG(impuestoGanancias);
    setImpP(impuestoPais);
    setSinImp(monto);
    setResultado(total);
  };

  return (
    <div className="flex flex-col gap-2">
      <DivizaSelector setDiviza={setDiviza} diviza={diviza} />

      <input
        type="number"
        className="p-2 border-[#526484] border bg-transparent  rounded-md text-white font-semibold  "
        value={input}
        onChange={handleInput}
        min={1}
      />

      <div className="grid grid-cols-3 gap-2 text-white">
        <button
          className="btn bg-[#526484] border-none text-white text-xl font-bold shadow-md"
          onClick={handleButton}
          value="1"
        >
          1
        </button>
        <button
          className="btn bg-[#526484] border-none text-white text-xl font-bold shadow-md"
          onClick={handleButton}
          value="2"
        >
          2
        </button>
        <button
          className="btn bg-[#526484] border-none text-white text-xl font-bold shadow-md
        
        "
          onClick={handleButton}
          value="3"
        >
          3
        </button>
        <button
          className="btn bg-[#526484] border-none text-white text-xl font-bold shadow-md"
          onClick={handleButton}
          value="4"
        >
          4
        </button>
        <button
          className="btn bg-[#526484] border-none text-white text-xl font-bold shadow-md"
          onClick={handleButton}
          value="5"
        >
          5
        </button>
        <button
          className="btn bg-[#526484] border-none text-white text-xl font-bold shadow-md"
          onClick={handleButton}
          value="6"
        >
          6
        </button>
        <button
          className="btn bg-[#526484] border-none text-white text-xl font-bold shadow-md"
          onClick={handleButton}
          value="7"
        >
          7
        </button>
        <button
          className="btn bg-[#526484] border-none text-white text-xl font-bold shadow-md"
          onClick={handleButton}
          value="8"
        >
          8
        </button>
        <button
          className="btn bg-[#526484] border-none text-white text-xl font-bold shadow-md"
          onClick={handleButton}
          value="9"
        >
          9
        </button>
        <button
          className="btn bg-[#526484] border-none text-white text-xl font-bold shadow-md"
          onClick={handleReset}
        >
          C
        </button>
        <button
          className="btn bg-[#526484] border-none text-white text-xl font-bold shadow-md"
          onClick={handleButton}
          value="0"
        >
          0
        </button>

        <button
          className="btn bg-[#526484] border-none text-white text-xl font-bold shadow-md"
          onClick={handleSubmit}
        >
          Cotizar
        </button>
      </div>

      {error && (
        <div className="toast toast-top toast-center">
          <div className="alert bg-red-500 text-white">
            <span>{errorMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calculadora;
