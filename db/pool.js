const { Pool } = require("pg");
require("dotenv").config();

module.exports = new Pool({
  connectionString:
    "postgres://minimessageboard-top-main-db-056fc097540a84396:rd5ejJqbFrDPhXTn3KqyNp5R4ud65V@user-prod-us-east-2-1.cluster-cfi5vnucvv3w.us-east-2.rds.amazonaws.com:5432/minimessageboard-top-main-db-056fc097540a84396",
});
