//requisito 1
let status

//requisito 2
switch(status) {
    case 'aprovada':
        console.log('Parabéns, você passou!!')
        break;
    case 'lista':
        console.log('Atenção, você está na lista de espera.')
        break;
    case 'reprovada':
        console.log('VOcê não passou.')
        break;
    default:
        console.log('Não se aplica.')
}