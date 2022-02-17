const fs = require("fs").promises;

const readAllCharacters = () => {
  return fs
    .readFile("./exercicio-04/simpsons.json", "utf-8")
    .then((data) => JSON.parse(data))
    .catch((error) => console.log(error));
};

const printAllCharacters = () => {
  readAllCharacters()
    .then((simpsons) =>
      simpsons.map(({ id, name }) => console.log(`${id} - ${name}`))
    )
    .catch((error) => console.log(error.message));
};

const findCharacter = async (idToCharacter) => {
  const characters = await readAllCharacters();
  const character = characters.find(({ id }) => parseInt(id) === idToCharacter);
  if (character) {
    return console.log(`${character.id} - ${character.name}`);
  } else {
    throw new Error("id não encontrado");
  }
};

const deleteCharacter = (idsToDelete) => {
  readAllCharacters()
    .then((characters) =>
      characters.filter(({ id }) => !idsToDelete.includes(parseInt(id)))
    )
    .then((updateCharacters) =>
      fs.writeFile(
        "./exercicio-04/simpsons.json",
        JSON.stringify(updateCharacters)
      )
    )
    .then(() => console.log("Updated!"))
    .catch((err) => console.log(err.message));
};

const createFileByCharacters = (idsToAdd, fileCreate) => {
  readAllCharacters()
    .then((characters) =>
      characters.filter(({ id }) => idsToAdd.includes(parseInt(id)))
    )
    .then((arrayCharacters) =>
      fs.appendFile(
        `./exercicio-04/${fileCreate}`,
        JSON.stringify(arrayCharacters)
      )
    )
    .then(() => console.log("File created!"))
    .catch((err) => console.log(err.message));
};

const addNewCharacter = (nameToAdd, fileToAdd) => {
  readAllCharacters()
    .then((characters) => characters.filter(({ name }) => name === nameToAdd))
    .then((character) => {
      fs.readFile(`./exercicio-04/${fileToAdd}`, "utf-8")
        .then((data) => JSON.parse(data))
        .then((result) => result.concat(character[0]))
        .then((characterUpdated) =>
          fs.writeFile(
            `./exercicio-04/${fileToAdd}`,
            JSON.stringify(characterUpdated)
          )
        );
    })
    .then(() => console.log("File updated!"))
    .catch((err) => console.log(err.message));
};

const renameCharacter = (nameToRename, NewName, fileToUpdate) => {
  fs.readFile(`./exercicio-04/${fileToUpdate}`, "utf-8")
    .then((data) => JSON.parse(data))
    .then((characters) =>
      characters.map((character) => {
        if (character.name === nameToRename) {
          return { id: character.id, name: NewName };
        }
        return character;
      })
    )
    .then((charactersUpdated) =>
      fs.writeFile(
        `./exercicio-04/${fileToUpdate}`,
        JSON.stringify(charactersUpdated)
      )
    )
    .then(() => console.log("File updated!"))
    .catch((err) => console.log(err.message));
};

renameCharacter("Nelson Muntz", "Maggie Simpson", "simpsonFamily.json");
