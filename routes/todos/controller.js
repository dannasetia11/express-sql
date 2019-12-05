const { connection } = require("../../config");

module.exports = {
  getAll: (req, res) => {
    console.log(req.params.name);

    connection.query(
      `select * from todo WHERE name='${req.params.name}'`,
      (error, results, fields) => {
        if (error) {
          res.status(500).send({ msg: "have error" });
        } else {
          res.status(200).send({
            msg: "show data",
            data: results
          });
        }
      }
    );
  },
  addOne: (req, res) => {
    connection.query(
      `INSERT INTO todo SET ?`,
      req.body,
      (error, results, field) => {
        if (error) {
          console.log(error);
          res.status(500).send({ message: "there is something wrong" });
        } else {
          res.status(200).send({
            message: "Add one data",
            data: results
          });
        }
      }
    );
  },

  updateOne: (req, res) => {
    connection.query(
      `UPDATE todo SET ? WHERE id =?`,
      [req.body, `${req.params.id}`],
      (error, results, field) => {
        if (error) {
          console.log(error);
          res.status(300).send({ message: "there is something wrong" });
        } else {
          res.status(200).send({
            message: "Update one data",
            data: results
          });
        }
      }
    );
  },

  deleteOne: (req, res) => {
    connection.query(
      `DELETE FROM todo WHERE id =?`,
      [req.params.id],
      (error, results, field) => {
        if (error) {
          console.log(error);
          res.status(300).send({ message: "there is something wrong" });
        } else {
          res.status(200).send({
            message: "Delete one data",
            data: results
          });
        }
      }
    );
  }
};
