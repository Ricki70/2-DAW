const url = "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=E8229E4A394CB109E6980AFE3F89905C&steamids=76561198127147075";

fetch(url)
  .then(response => response.json())
  .then(data => {
    const respuesta = document.getElementById("respuesta");
    respuesta.innerHTML = JSON.stringify(data);
  })
  .catch(error => console.error(error));
s