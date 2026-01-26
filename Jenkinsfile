pipeline {
    agent { label 'colon' }

    environment {
        DOCKER_IMAGE = 'groot995/static-website'
        DOCKER_TAG   = 'latest'
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')
    }

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Narendra-Mevada/Groot-A-Smart-HRMS'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} .'
            }
        }

        stage('Docker Hub Login') {
            steps {
                sh '''
                    echo ${DOCKERHUB_CREDENTIALS_PSW} | \
                    docker login -u ${DOCKERHUB_CREDENTIALS_USR} --password-stdin
                '''
            }
        }

        stage('Push Image to Docker Hub') {
            steps {
                sh 'docker push ${DOCKER_IMAGE}:${DOCKER_TAG}'
            }
        }

        stage('Deploy using Docker Compose') {
            steps {
                sh 'docker compose down || true'
                sh 'docker compose up -d'
            }
        }
    }

    post {
        success {
            echo 'Deployment Successful'
        }
        failure {
            echo 'Deployment Failed'
        }
    }
}
