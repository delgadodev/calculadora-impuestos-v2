import { getDolar } from "./api/dolarsiApi";
import Calculadora from "./components/Calculadora";
import { useEffect, useState } from "react";
import { formatearDivizaARS } from "./utils/formato";
import "./assets/loaders/loader.css";

function App() {
  const [input, setInput] = useState("");
  const [diviza, setDiviza] = useState("USD");
  const [cotizaciones, setCotizaciones] = useState([]);
  const [resultado, setResultado] = useState(0);
  const [impG, setImpG] = useState(0);
  const [impP, setImpP] = useState(0);
  const [sinImp, setSinImp] = useState(0);

  useEffect(() => {
    getDolar().then((data) => {
      setCotizaciones(data);
    });
  }, []);

  const ArrayDolarOficial = cotizaciones.slice(0, 1);
  const dolarOficial = parseFloat(ArrayDolarOficial[0]?.casa?.venta);

  console.log(dolarOficial);

  return (
    <>
      <div className="grid place-content-center h-screen w-screen">
        <h1 className="text-white font-bold text-2xl text-center py-5">
          Calculadora de Impuestos
        </h1>

        <div className="flex flex-col bg-[#2d3748]  gap-5 rounded-md max-w-5xl w-full p-5">
          <div className="grid md:grid-cols-2 w-full gap-5">
            <Calculadora
              input={input}
              setInput={setInput}
              diviza={diviza}
              setDiviza={setDiviza}
              dolarOficial={dolarOficial}
              resultado={resultado}
              setResultado={setResultado}
              setImpG={setImpG}
              setImpP={setImpP}
              setSinImp={setSinImp}
            />

            <div className="p-2 w-full rounded-md ">
              <h1 className="font-bold text-white mb-4 text-Fcenter text-xl">
                Cotizaciones
              </h1>

              <div className="text-white flex flex-col gap-3">
                <div className="font-semibold text-lg">
                  <p>
                    Sin impuestos: <span>{formatearDivizaARS(sinImp)}</span>
                  </p>
                </div>
                <div className="font-semibold text-lg">
                  <p>
                    Impuesto a las ganancias (45%):
                    {formatearDivizaARS(impG)}
                  </p>
                </div>
                <div className="font-semibold text-lg">
                  <p>
                    Impuestos PAIS (30%):
                    {formatearDivizaARS(impP)}
                  </p>
                </div>
                <div className="font-semibold text-lg bg-[#3f5359] shadow-sm rounded-md p-1">
                  <p className="text-[#9ae6b4] uppercase font-bold">
                    Total:
                    {formatearDivizaARS(resultado)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {diviza === "USD" && (
            <>
              {dolarOficial ? (
                <>
                  <div className="border border-[#526484]"></div>
                  <div className="text-white w-full text-center flex flex-col gap-2">
                    <h2 className="font-semibold text-xl">
                      Cotizacion del dolar oficial
                    </h2>
                    <p className="font-semibold uppercase">
                      1 USD ={" "}
                      <span className="font-bold text-lg  text-green-400">
                        {" "}
                        {formatearDivizaARS(dolarOficial)}
                      </span>{" "}
                      ARS
                    </p>
                    <p>
                      Cotizaciones por:{" "}
                      <span className="font-bold">Dolarsi</span>
                    </p>
                  </div>
                </>
              ) : (
                <div className="flex justify-center">
                  <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
