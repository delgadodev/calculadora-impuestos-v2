// eslint-disable-next-line react/prop-types
const DivizaSelector = ({ setDiviza, diviza }) => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-white font-semibold text-xl">Monto en {diviza}</h2>
      <div className="tooltip" data-tip="Cambiar tipo de cotizacion">
        <select
          className="bg-transparent font-semibold text-xl
 border-none text-white p-2
            appearance-none"
          name="diviza"
          id="diviza"
          onChange={(e) => setDiviza(e.target.value)}
        >
          <option className="text-black" value="USD">
            USD
          </option>
          <option className="text-black" value="ARS">
            ARS
          </option>
        </select>
      </div>
    </div>
  );
};

export default DivizaSelector;
