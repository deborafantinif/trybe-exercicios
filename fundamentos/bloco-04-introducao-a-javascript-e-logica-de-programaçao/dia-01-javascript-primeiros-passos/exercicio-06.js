//source: https://www.soxadrez.com.br/conteudos/movimentos/
let pecaXadrez = 'Peão'

if(pecaXadrez.toLowerCase() == 'rei') {
    console.log('Pode mover-se em qualquer direção, porém apenas uma casa.')
}
else if(pecaXadrez.toLowerCase() == 'dama') {
    console.log('Pode mover-se em qualquer direção (vertical, horizontal e diagonal), quantas casas quiser, desde que estejam livres.')
}
else if(pecaXadrez.toLowerCase() == 'torre') {
    console.log('Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.')
}
else if(pecaXadrez.toLowerCase() == 'bispo') {
    console.log('Move-se na diagonal, quantas casas quiser.')
}
else if(pecaXadrez.toLowerCase() == 'cavalo') {
    console.log('Pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas, conhecida como L.')
}
else if(pecaXadrez.toLowerCase() == 'peão') {
    console.log('Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.')
}
else {
    console.log('Valor inserido inválido!')
}