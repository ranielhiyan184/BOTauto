module.exports.config = {
	name: "goadmin",
	version: "1.0.0",
	role: 0,
	credits: "Raniel",
	description: "Bot will rep ng tag admin or rep ng tagbot",
	usages: "goadmin",
	hasPrefix: false,
	cooldown: 5
};

module.exports.handleEvent = function({ api, event, admin }) {
	if (event.senderID !== admin && event.mentions) {
		var aid = [admin];
		for (const id of aid) {
			if (event.mentions[id]) {
				var msg = [
					"Babe nalang iatawag niya bigaon manang nag create nako",
					"Stop mentioning my creator, he's busy 😗",
					"My Creator is currently offline 😢",
					"𝖠𝗇𝗈𝗍𝗁𝖾𝗋 𝗍𝖺𝗀 𝗂𝗇 𝗆𝗒 𝖺𝖽𝗆𝗂𝗇, 𝗂 𝗐𝗂𝗅𝗅 𝗉𝗎𝗇𝖼𝗁 𝗒𝗈𝗎 🙂",
					"NAg o-overthink pa intayin mo",
					"Sorry, nag mml pa ata 🙄",
					"Do you like my creator thats why your tagging him? Why dont you add him https://www.facebook.com/RanielHiyanBigdick 😏",
					" Another tag in my Creator, i will kick your fucking ass"
				];
				api.setMessageReaction("😍", event.messageID, (err) => {}, true);
				return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
			}
		}
	}
};

module.exports.run = async function({ admin }) {
};
