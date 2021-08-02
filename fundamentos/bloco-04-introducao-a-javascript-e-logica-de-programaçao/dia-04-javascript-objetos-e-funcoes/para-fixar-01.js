//requisito 01
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
}

console.table(player)


//requisito 02
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.')


//requisito 03
player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018]
console.table(player)




