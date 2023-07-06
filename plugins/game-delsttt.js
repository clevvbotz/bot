
let handler = async (m, { conn, text }) => {
	let room = Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (room == undefined) return conn.reply(m.chat,`Kamu tidak sedang berada dalam permainan TicTacToe 🎮 `, m)
delete conn.game[room.id]
await conn.reply(m.chat, `Berhasil menghapus sesi *Tictactoe 🎮*`, m)
}
handler.help = ['delttt']
handler.tags = ['game']
handler.command = ['delttc', 'delttt', 'delxo','tictactoe','ttt']

export default handler
