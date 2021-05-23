const { Client, MessageEmbed } = require('discord.js');
const bot = new Client();//cuando instanciamos un objeto nos devuelve un objeto

bot.on('message', async message =>{
    //receiving the message
    
   
    
    const mc = message.content;
    const mcs = (s)=>message.channel.send(s);
    const messageDelete = message.delete({timeout: 60000})

    // if(message.content === 'que son las kyu?'){
    //     const embed = new MessageEmbed()
    //         .addField('')
    // }
    
    switch (mc){
        case 'A-1 que son las kyu?':
            messageDelete
            const embed = new MessageEmbed()
            .setTitle(`𝕼𝖚𝖊 𝖇𝖚𝖊𝖓𝖔 𝖖𝖚𝖊 𝖙𝖊 𝖎𝖓𝖙𝖊𝖗𝖊𝖘𝖊𝖓 𝖑𝖆𝖘 𝖐𝖞𝖚 𝖒𝖎𝖗𝖆 💬..`)
            .setColor(0xff0000)
            .addField('kyū (級 )𓀃 es un vocablo japonés utilizado tanto en las artes marciales japonesas como en otras prácticas tradicionales japonesas🎎 como son el ikebana,')
            .addField(' el juego del go o la ceremonia del té para designar las diferentes etapas en la progresión de un debutante antes de la obtención del nivel de dan.⛩ , ')
            .addField('hacer los kates de tu lenguaje para obtener los kyu de bajo dejo una lista de los lenguajes que acepta la pagina codewars.[Loading...]')
            mcs(embed)
            // mcs(`kyū (級 ) es un vocablo japonés utilizado tanto en las artes marciales japonesas como en otras prácticas tradicionales japonesas como son el ikebana, el juego del go o la ceremonia del té para designar las diferentes etapas en la progresión de un debutante antes de la obtención del nivel de dan. , hacer los kates de tu lenguaje para obtener los kyu de bajo dejo una lista de los lenguajes que acepta la pagina codewars.[Loading...]`)
            break
        case 'A-1 como obtengo rol kiu?':
            messageDelete
            mcs(`en lo que te logueas a la pagina el rango por defecto es 8 kyu, entonces escribes en algun canal papelera 🗑 [obtener kyu] y algun admin se contactara contigo`)
            break
        case 'A-1 que es codewars?':
            messageDelete
            mcs('https://www.codewars.com ve a la url y descubrelo tu mismo')
            break
        case 'A-1':
            messageDelete
            mcs('eh comido ...')
            break
        case 'A-1 info':
            messageDelete
            const embed2 = new MessageEmbed()
            .setTitle(`𝐬𝐨𝐥𝐨 𝐩𝐮𝐞𝐝𝐞𝐧 𝐯𝐞𝐫 𝐦𝐢 𝐢𝐧𝐟𝐨 𝐥𝐨𝐬 𝐫𝐨𝐥𝐞𝐬 𝐝𝐞 𝟖𝐤𝐢𝐮 𝐬𝐢 𝐚𝐜𝐭𝐢𝐯𝐚𝐬𝐭𝐞 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐟𝐞𝐥𝐢𝐜𝐢𝐭𝐚𝐜𝐢𝐨𝐧𝐞𝐬 𝐚𝐡𝐨𝐫𝐚 𝐭𝐢𝐞𝐧𝐞𝐬 𝐫𝐞𝐬𝐩𝐨𝐧𝐬𝐚𝐛𝐢𝐥𝐢𝐝𝐚𝐝 𝐎𝐤𝐮 𝐢𝐫𝐢`)
            .setColor(0xff0000)
            .addField('const { Client, MessageEmbed } = require(discord.js);')
            .addField('const bot = new Client();')
            .addField('bot.on(message, async message =>{')
            .addField('const mc = message.content;')
            .addField('const mcs = (s)=>message.channel.send(s);')
            .addField('switch (mc){')
            .addField('case A-1 que son las kyu?:')
            .addField('const embed2 = new MessageEmbed()')
            .addField('.setTitle()')
            .addField('.setColor(WHITE)')
            .addField('.addField(tu texto)')
            .addField('mcs(embed)')
            .addField('break')
            .addField('default:')
            .addField('message.delete({timeout: 10000})')
            .addField('}')
            .addField('})')
            .addField('bot.login(token)')
            mcs(embed2)
            break


        default:
            messageDelete
            
            
    }
    
})


bot.login('');