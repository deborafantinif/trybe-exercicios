#criar uma nova chave SSH
ssh-keygen -t rsa -b 4096 -C "seuemail@gmail.com"

#aparecerá a seguinte mensagem, pressione enter para manter o diretório padrão
Enter a file in which to save the key (/home/you/.ssh/id_rsa): [Press enter]

#digite a senha da chave
Enter passphrase (empty for no passphrase): [Type a passphrase]
Enter same passphrase again: [Type passphrase again]

#inicie o ssh-agent em background
eval "$(ssh-agent -s)"

#adicione a sua chave privada SSH ao ssh-agent
ssh-add ~/.ssh/id_rsa

#copie a chave SSH para adicionar no GitHub
cat ~/.ssh/id_rsa.pub

#dentro do GitHub, vá em Settings

#clique em SSH and GPG keys e adicione uma chave SSH

#no título adicione uma descrição da chave (nome da máquina)

#cole a chave no campo key

#clique em add SSH key e insira sua senha se solicitar.

#chave adicionada com sucesso!