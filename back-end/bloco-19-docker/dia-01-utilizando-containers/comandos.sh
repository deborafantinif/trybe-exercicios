# Instalação da imagem Debian
docker pull debian

# Instalação da imagem Debian com a versão stable-slim
docker pull debian:stable-slim

# Criar um contêiner no modo interativo com a tag específica
docker container run -it debian:stable-slim

# Dentro do mesmo contêiner, retornar os dados da distribuição Debian
cat /etc/*-release

# Encerrando o terminal do contêiner
exit

# Inicializar o contêiner novamente
docker container start <name || id>

# Executando o contêiner ascii-patrol com o modo Cleanup
docker run -ti --rm andrius/ascii-patrol
