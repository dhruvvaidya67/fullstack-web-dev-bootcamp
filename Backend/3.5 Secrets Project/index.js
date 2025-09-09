//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // for form data

app.get("/", (req, res) => {
  res.send(`
    <form method="POST" action="/check">
      <input type="text" name="password" placeholder="Enter password"/>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post("/check", (req, res) => {
  const userPassword = req.body.password;
  if (userPassword === "ILoveProgramming") {
    res.send("Access granted");
  } else {
    res.send("Wrong password");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
