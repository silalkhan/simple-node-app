pipeline {
    agent any
    
    tools {nodejs "node"}
    stages {
        stage('Build') {
            steps {
              git 'https://github.com/silalkhan/simple-node-app.git'    
              bat 'npm install'
            }
        }
    }
}
