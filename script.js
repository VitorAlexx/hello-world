const container = document.getElementById("container");

const button = document.createElement("button");
button.textContent = "Click Me!";
button.style.position = "absolute";
button.style.top = "50%";
button.style.left = "50%";
button.style.transform = "translate(-50%, -50%)";
button.style.padding = "15px 30px";
button.style.fontSize = "2rem";
button.style.backgroundColor = "#000";
button.style.color = "#fff";
button.style.fontFamily = "verdana";
button.style.fontWeight = "700";
button.style.border = "none";
button.style.cursor = "pointer";

container.appendChild(button);


button.addEventListener("click", () => {
  const helloWorldMessage = document.createElement("div");
  helloWorldMessage.textContent = "Hello World!";
  helloWorldMessage.style.position = "fixed";
  helloWorldMessage.style.top = "0";
  helloWorldMessage.style.left = "0";
  helloWorldMessage.style.width = "100%";
  helloWorldMessage.style.height = "100%";
  helloWorldMessage.style.display = "flex";
  helloWorldMessage.style.justifyContent = "center";
  helloWorldMessage.style.alignItems = "center";
  helloWorldMessage.style.fontSize = "50px";
  helloWorldMessage.style.fontFamily = "verdana";
  helloWorldMessage.style.fontWeight = "900";
  helloWorldMessage.style.backgroundColor = "#000";
  helloWorldMessage.style.color = "#fff";
  helloWorldMessage.style.zIndex = "1000";
  helloWorldMessage.style.margin = "0";

  container.appendChild(helloWorldMessage);

  button.remove();
});
