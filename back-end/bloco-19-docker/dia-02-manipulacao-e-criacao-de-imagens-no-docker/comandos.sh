# Buildar o arquivo Dockerfile criado para utilizar a imagem chuanwen/cowsay
docker build -t cowsay .

# Criar um container a partir da imagem criada do cowsay
docker container run --name mycowsay

# Opção para listar os tipos de vacas disponíveis
docker container run cowsay -l