const getRepos = require('./getRepos');

describe('Verifica a função getRepos', () => {
  it('verifica se o repositório sd-01-week4-5-project-todo-list está contido no retorno de getRepos', async () => {
    await expect(getRepos('https://api.github.com/orgs/tryber/repos'))
      .resolves.toContain('sd-01-week4-5-project-todo-list')
  });

  it('verifica se o repositório sd-01-week4-5-project-meme-generator está contido no retorno de getRepos', async () => {
    await expect(getRepos('https://api.github.com/orgs/tryber/repos'))
      .resolves.toContain('sd-01-week4-5-project-meme-generator')
  });
});