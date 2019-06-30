const Model = require('../models/users.model')

module.exports = {
    list: (req, res) => {
        Model.listUser((err, users) => {
            if (err) throw err
            res.json({ result: users })
        })
    },
    create: (req, res) => {
        const new_user = new Model(req.body)

        if (! new_user.username || ! new_user.password) {
            res.status(400).send({
                error: true,
                message: 'Please provide user/password'
            })
        } else {
            Model.createUser(new_user, (err, user) => {
                if (err) throw err
                res.json({ result: user })
            })
        }
    },
    edit: (req, res) => {
        Model.findUser(req.params.id, (err, user) => {
            if (err) throw err
            res.json({ result: user })
        })
    },
    update: (req, res) => {
        const update_user = new Model(req.body)

        Model.updateUser(req.params.id, update_user, (err, user) => {
            if (err) throw err
            res.json(user)
        })
    },
    delete: (req, res) => {
        Model.deleteUser(req.params.id, (err, user) => {
            if (err) throw err
            res.json({ result: "Delete Successfully." })
        })
    }
}