const connection = new WebSocket("ws://localhost:3000")
const logWindow = document.querySelector("#log-window")
connection.onopen = () => {
    connection.send("Hello from the client!");
}

connection.onmessage = (event) => {
  const logs = event.data
  logWindow.innerHTML = logs
}

