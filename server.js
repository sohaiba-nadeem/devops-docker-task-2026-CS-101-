const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head><title>DevOps Docker Task</title></head>
      <body style="font-family: Arial; text-align: center; margin-top: 80px;">
        <h1>DevOps Docker Task</h1>
        <p><b>Student Name:</b> Asma</p>
        <p><b>Student ID:</b> YOUR-ID-HERE</p>
        <p><b>Course:</b> DevOps</p>
        <h3>This application is running inside a Docker container.</h3>
      </body>
    </html>
  `);
});

app.listen(PORT, "0.0.0.0", () => console.log(`Running on port ${PORT}`));