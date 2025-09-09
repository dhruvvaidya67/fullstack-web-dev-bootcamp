import express from 'express';
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
  const today = new Date("June 24, 2023 11:13:00");
  const day = today.getDay(); // 0 = Sunday, 6 = Saturday

  let daytype;
  let advice;

  if (day === 0 || day === 6) {
    daytype = "Weekend";
    advice = "relax";
  } else {
    daytype = "Weekday";
    advice = "work hard";
  }

  // MATCHES EJS VARIABLE NAMES EXACTLY
  res.render("index.ejs", { 
    daytype,
    advice
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
