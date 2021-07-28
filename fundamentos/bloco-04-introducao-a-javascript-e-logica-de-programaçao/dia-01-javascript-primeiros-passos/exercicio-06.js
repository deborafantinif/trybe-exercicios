//source: https://www.soxadrez.com.br/conteudos/movimentos/
let pecaXadrez = 'BiSPo'

switch(pecaXadrez.toLowerCase()) {
    case 'rei':
        console.log('Pode mover-se em qualquer direção, porém apenas uma casa.')
        break;
    case 'dama':
        console.log('Pode mover-se em qualquer direção (vertical, horizontal e diagonal), quantas casas quiser, desde que estejam livres.')
        break;
    case 'torre':
        console.log('Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.')
        break;
    case 'bispo':
        console.log('Move-se na diagonal, quantas casas quiser.')
        break;
    case 'cavalo':
        console.log('Pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas, conhecida como L.')
        break;
    case 'peão':
        console.log('Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.')
        break;
    default:
        console.log('Valor inserido inválido!')
}