
const fs = require('fs')
const chalk = require('chalk')


global.owner = ['6285732912895']
global.packname = 'Rengga'
global.author = 'Rengga'
global.sessionName = 'Rengga'
global.prefa = ['','!','.','#']
global.ownername = 'Rengga'
global.sp = '>'
global.mess = {
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: '_SOK ASIK, FITUR KHUSUS ADMIN DECK_',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '_Data In Process, Please Wait A Minute.._',
}
global.thumb = fs.readFileSync('./lib/assets/logo.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
