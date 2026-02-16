require("dotenv").config();
const app = require("./app");

const PORT = process.env.MYSQLPORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`http://localhost:${PORT}`);
});
