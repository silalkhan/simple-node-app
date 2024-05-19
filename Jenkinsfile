pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/silalkhan/simple-node-app.git'
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build and deploy') {
            steps {
                sh 'npm run build'
                // Add additional deployment steps here
            }
        }
    }
}
