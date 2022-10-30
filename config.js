
const fs = require('fs')
const chalk = require('chalk')


global.owner = ['6285786211623']
global.packname = 'KrisHost'
global.author = 'KrisHosting'
global.sessionName = 'krisss'
global.prefa = ['','!','.','#']
global.ownername = 'KrisHosting'
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
