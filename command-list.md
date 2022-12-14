* docker images => lista de imagenes
* docker pull {image-name} => descarga del repositorio la imagen indicada
* docker image rm {image-name} => borra la imagen indicada
* docker create {image-name} => crea el contenedor usando la imagen indicada
    * --name {nombre} => puedes indicarle el nombre a mano
    * -p {port-machine}:{port-container}
    * -e {ENV_VAR_NAME}={ENV_VAR_VALUE} => te permite configurar las variables de entorno del contenedor
    * --network {net-name} => crea el contenedor dentro de una red de docker
* docker start {id-container|name} => inicia el contenedor pasandole el id del mismo
* docker stop {id-container|name} => detiene el contenedor indicado
* docker ps => devuelve el listado de contenedores corrienbdo
* docker ps -a => devuelve el listado de contenedores creados
* docker rm {id-container|name} => elimina el contenedor
* docker logs {id-container|name} => despliega la salida de logs del contenedor por comando
    * --follow => se queda escuchando y monstrando
* docker run => Descarga la imagen de no tenerla, Crea el contenedor usando la imagen, y finalmente la despliega (Es pull, create y start en un solo comando)
    * -d => el comando run usa --follow en el start lo que es un problema ya que si cancelas la ejecucion se apaga el contenedor. Esta opcion desactiva el --follow
* docker network ls => lista las redes dedocker
* docker network create {net-name} => crea una red de docker
* docker build {PATH}=> crea la imagen basado en Dockerfile
    -t {IMAGE-NAME:IMAGE-TAG} => le da un nombre y tag a la imagen a construir
* docker compose up => Usa el docker-compose.yml para crear varios contenedores que pueden interactuar entre ellos
* docker compose down => borra los contenedores generados por el docker-compose.yml, no borra volumenes ni imagenes