const express = require("express");

const expressLayouts = require("express-ejs-layouts");
const app = express();

const port = 8000;

// gunakan ejs

app.set("view engine", "ejs");
app.use(expressLayouts);


app.get("/index", (req, res) => {
  const mahasiswa = [
    {
      nama: "Rangga Ahmad Madani",
      email: "ranggam48@gmail.com",
    },
    {
      nama: "Shandika Galih",
      email: "shandika@gmail.com",
    },
  ];
  res.render("index", {
    nama: "rangga",
    title: "Halaman Index",
    mahasiswa: mahasiswa,
    layout: "layouts/main-layout",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: "Halaman About",
  });
});

app.get("/contacts", (req, res) => {
  res.render("contacts", {
    layout: "layouts/main-layout",
    title: "Halaman Contact",
  });
});

app.get("/user/:id", (req, res) => {
  res.send(
    `user id : ${
      req.params.id
    } <br> Category : ${req.query.category.toString()}`
  );
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("404");
});

app.listen(port, () => {
  console.log(`Server berjalan pada port ${port}...`);
});
