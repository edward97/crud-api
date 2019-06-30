const sql = require('../config/config.db')

const User = function (user) {
    this.email = user.email,
    this.username = user.username,
    this.salary = user.salary,
    this.description = user.description
    this.password = user.password
}

User.listUser = (result) => {
    sql.query("SELECT * FROM tbl_user", (err, res) => {
        if (err) throw err
        result(null, res)
    })
}
User.createUser = (newUser, result) => {
    sql.query("INSERT INTO tbl_user set ?", newUser, (err, res) => {
        if (err) throw err
        result(null, res.insertId)
    })
}
User.findUser = (id, result) => {
    sql.query("SELECT * FROM tbl_user WHERE id=?", id, (err, res) => {
        if (err) throw err
        result(null, res)
    })
}
User.updateUser = (id, user, result) => {
    sql.query("UPDATE tbl_user SET email=?, username=?, salary=?, description=?, password=? WHERE id=?", [user.email, user.username, user.salary, user.description, user.password, id], (err, res) => {
        if (err) throw err
        result(null, res)
    })
}
User.deleteUser = (id, result) => {
    sql.query("DELETE FROM tbl_user WHERE id=?", id, (err, res) => {
        if (err) throw err
        result(null, res)
    })
}

module.exports = User