const express = require('express');
const routes = require('./routes')
// supported google apis
const PORT = process.env.PORT || 3001;

const app = express();
require("dotenv").config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.use(routes);

// app.get("/api/roster", async (req, res) => {

    
// });

app.listen(PORT, (req, res) => console.log(`Redshift-Guild is listening on PORT ${PORT}`));