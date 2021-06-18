const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')
nunjucks.configure('views', {
    express: server
})


// ==== ROTAS ==== //
const infos = {
    name: "Wellington Pereira",
    role: "Web Developer",
    description: "um desenvolvedor web freelancer, apaixonado por criação e desenvolvimento de interfaces web. Amo passar horas na frente do computador codando e aprendendo coisas novas enquanto tomo meu café.",
    image: "/src/images/profile-git.png"
}

server.get('/', (req, res) => {
    res.render('sobre', {about: infos})
})

server.get('/projetos', (req, res) => {
    const data = [
        {
            title: "Pokedex",
            description: "Pikachu é uma espécie fictícia pertencente à franquia de mídia Pokémon da Nintendo.",
            language: "Javascript",
            status: false,
            image: "https://images.unsplash.com/photo-1623849778517-668dffe703fb?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        },
        {
            title: "Naruto",
            description: "Naruto é uma série de mangá escrita e ilustrada por Masashi Kishimoto, que conta a história de Naruto Uzumaki.",
            language: "Javascript",
            status: true,
            image: "https://images.unsplash.com/photo-1622495505483-2b724490cca8?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        },
        {
            title: "Pokedex",
            description: "Sasuke Uchiha é um personagem fictício da série de anime e mangá Naruto criado por Masashi Kishimoto. Na história fictícia da série. ",
            language: "Javascript",
            status: false,
            image: "https://images.unsplash.com/photo-1623909939592-ac6c591a814c?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        },
        {
            title: "Pokedex",
            description: "Sasuke Uchiha é um personagem fictício da série de anime e mangá Naruto criado por Masashi Kishimoto. Na história fictícia da série. ",
            language: "Javascript",
            status: false,
            image: "https://images.unsplash.com/photo-1623945414830-765a28fb68c8?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        }
    ]
    res.render('projetos', {cards: data, about: infos})
})


server.listen(9999, () => {
    console.log('Serve is running')
})