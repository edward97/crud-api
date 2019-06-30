const sql = require('../config/config.db')

const User = function (user) {
    this.id = user.id
    this.email = user.email,
    this.username = user.username,
    this.password = user.password
}

User.checkUser = (user, result) => {
    sql.query("SELECT id, email, username FROM tbl_user WHERE username=? AND password=?", [user.username, user.password], (err, res) => {
        if (err) throw err
        result(null, res)
    })
}

module.exports = User