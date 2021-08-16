const Eclipse = require('./core/Eclipse')

const pt = require('./languages/pt')
const en = require('./languages/en')

const client = new Eclipse()

pt(client)
en(client)

client.start()
