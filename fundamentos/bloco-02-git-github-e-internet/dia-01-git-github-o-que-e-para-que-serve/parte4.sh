#adicionar o arquivo trybe_skills.txt
cat > trybe_skills.txt
O que eu vou aprender na Trybe:

- Unix
- Bash
- Git

#transformar a pasta em repositório Git e criar um arquivo README.md
git init
touch README.md

#fazer o commit das alterações
git add .
git commit -m 'primeiro commit'

#crie um repositório no GitHub e cole o URL do repositório da opção SSH

#adicione o URL ao repositório local
git remote add origin 'url do repositório'

#faça o primeiro push
git push -u origin master
