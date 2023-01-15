const fs = require("fs")
const chalk = require("chalk")

global.available = true
global.autoReadGc = true
global.autoReadAll = false
global.antitags = true


global.Owner = ['4917662927731','491777062822']
global.OwnerNumber = ['4917662927731','491777062822']
global.ownertag = ['4917662927731','491777062822']
global.BotName = "Mika"
global.packname = "Erstellt Für M&K Inc."
global.author = "Für: M&K Inc."
global.OwnerName = "M&K Inc."
global.BotSourceCode = "https://github.com/Kai0071"
global.SupportGroupLink = "https://chat.whatsapp.com/C4UvfSXyYZoDSV3gJDyCm3"
global.sessionName = "session"



global.prefa = ['#']


global.location = "West Berlin, Germany"
global.reactmoji = "❤️"
global.themeemoji = "💖"
global.vidmenu = { url: 'https://c.tenor.com/YGuLegQWubwAAAPo/miku-nakano-gotoubun-no-hanayome.mp4' }
global.websitex = "https://github.com/txmx3/Miku-MD_9"
global.lolhuman = "M&K Inc."


global.BotLogo = fs.readFileSync("./Assets/pic1.jpg")
global.Thumb = fs.readFileSync("./Assets/pic9.jpg")
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg")
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg")


global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


global.mess = {
    jobdone: 'Job erledigt...',
    useradmin: 'Entschuldigung,nur *Gruppen Admins* können diesen Befehl benutzen *Baka*!',
    botadmin: 'Entschuldigung, Ich kann diesen Befehl nicht ausführen, ohne ein *Admin* dieser Gruppe zu sein. ',
    botowner: 'Nur mein *Eigentümer* kann diesen Befehl verwenden,  Baka!',
    grouponly: 'Dieser Befehl ist nur für *Gruppen* gemacht, *Baka*!',
    privateonly: 'Dieser Befehl ist nur für *Private Chat* gemacht, , *Baka*!',
    botonly: 'Nur der *Bot selbst* kann diesen Befehl verwenden! ',
    waiting: 'Bitte warten ...',
    nolink: 'Bitte gib mir *link* , Baka!',
    error: 'Ein Fehler ist aufgetreten !',
    banned: 'Sie sind für die Verwendung von Befehlen , bei diesem Bot *gesperrt*! ',
    bangc: 'Diese Gruppe ist von der Verwendung von Befehlen , bei diesem Bot *gesperrt*! ',
    nonsfw: 'Sei kein perverser *Baka*! Dies ist keine NSFW-aktivierte Gruppe! '
    
}


global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}


global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': '5d1197db351b',
}


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
