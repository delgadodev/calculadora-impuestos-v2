export const formatearDivizaARS = (diviza) => {
    return diviza.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
    });
  };