export const getDolar = async () => {
    const url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
  
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };