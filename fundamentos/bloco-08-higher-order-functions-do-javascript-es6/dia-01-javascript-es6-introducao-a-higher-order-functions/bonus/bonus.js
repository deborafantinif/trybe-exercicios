const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Bônus 01
const damageDragon = (maxDamage) => {
  return Math.floor((Math.random() * (maxDamage - 15)) + 16)
}

// Bônus 02
const damageWarrior = (maxDamage, minDamage) => {
  return Math.floor((Math.random() * (maxDamage - minDamage)) + (minDamage + 1))
}

// Bônus 03
const damageMage = (minDamage, mana) => {
  if (mana < 15) {
    return "Não possui mana suficiente";
  } else {
    mana -= 15;
  }
  return Math.floor((Math.random() * ((minDamage * 2) - minDamage)) + (minDamage + 1))
}

const warriorActions = (funcDamage, healthDragon, damageWarrior) => {
  const damage = funcDamage;
  healthDragon -= damage;
  damageWarrior += damage;
}

const gameActions = {
  warriorActions: (funcDamage) => {
    const damage = funcDamage((dragon.strength * dragon.weaponDmg), dragon.strength);
    dragon.healthPoints -= damage;
    warrior.damage = damage;
  },
  mageActions: (funcDamage) => {
    const damage = funcDamage(mage.intelligence, mage.mana);
    dragon.healthPoints -= damage;
    mage.damage = damage;
  },
  dragonActions: (funcDamage) => {
    const damage = funcDamage(dragon.strength);
    mage.healthPoints -= damage;
    warrior.healthPoints -= damage;
    dragon.damage = damage;
  },
  upDate: () => console.log(battleMembers),
};

gameActions.warriorActions(damageWarrior);
gameActions.mageActions(damageMage);
gameActions.dragonActions(damageDragon);
gameActions.upDate(battleMembers);