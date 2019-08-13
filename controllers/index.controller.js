const Model = require('../models/index.model')

module.exports = {
    login: (req, res) => {
        const data_user = new Model(req.body)

        if (! data_user.username) {
            data_user.username = null
        }
        if (! data_user.password) {
            data_user.password = null
        }

        // console.log(data_user)

        Model.checkUser(data_user, (err, users) => {
            if (err) throw err
            res.json({ result: users })
        })
    }
}