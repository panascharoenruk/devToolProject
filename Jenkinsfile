pipeline {
    agent any

    
    environment {
        DOCKER_CONTAINER_NAME = "devtoolproject-container"
        DOCKER_IMAGE_NAME     = "devtoolproject-image"
        PORT                  = "8090"
    }

    stages {
        stage('Initialize') {
            steps {
                echo 'Initial : Delete  containers and images'
                sh 'docker stop ${DOCKER_CONTAINER_NAME} || true'
                sh 'docker rm ${DOCKER_CONTAINER_NAME} || true'
                sh 'docker rmi ${DOCKER_IMAGE_NAME} || true'
              }
        }


        stage('Build Stage') {
            steps {
                dir('devToolProject') { // change directory devToolProject
                    echo "Current path is ${pwd()}"
                    sh "docker build -t ${DOCKER_IMAGE_NAME} ."
                }
            }
        }

        stage('Run Stage') {
            steps {
                sh "docker run -d -p ${PORT}:3000 --name ${DOCKER_CONTAINER_NAME} ${DOCKER_IMAGE_NAME}"
            }
        }

    
       

    }
}
