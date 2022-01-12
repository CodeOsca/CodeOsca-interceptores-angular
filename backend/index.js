const express = require('express')
const cors = require('cors')
const app = express()


app
    .use(cors())
    .get('/:id', (req, res) => {
        const { id } = req.params

        if (id === 'a') return res.json({ ok: true, data: [1, 2, 3, 4, 6, 7], pages: 8 })

        try {} catch (err) {
            console.log(err)
        }

        return res.status(400).json({ ok: false, message: 'Ha pasado un error' })

    })



console.clear()

app.listen(3000, () => console.log('Server Ready'))