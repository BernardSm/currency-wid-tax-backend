require('dotenv').config()

const api = require('./api/server')


// API CODE
const port = process.env.PORT || '3000'

api.listen(port, () => console.log(`Server is running on port ${port}`))
