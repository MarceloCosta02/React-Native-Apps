// myscript.js
// This example uses Node 8's async/await syntax.

const oracledb = require('oracledb');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function run() {

  let connection;

  try {
    connection = await oracledb.getConnection(  {
      user          : "bomes",
      password      : "bomes01",
      connectString : "10.44.34.68:1522/MESBR"
    });

    const result = await connection.execute(
      `SELECT SYSDATE FROM DUAL;`,
      [103],  // bind value for :id
    );
    console.log(result.rows);

  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

run();