pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Check out the code from your Git repository
                git 'https://github.com/silalkhan/simple-node-app.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies using npm
                bat 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                // Run your Node.js application tests
                bat 'npm test'
            }
        }
        stage('Build') {
            steps {
                // Run any build steps here (e.g., compiling TypeScript, bundling assets)
                bat 'npm run build'
            }
        }
        stage('Deploy') {
            when {
                // Optionally, define conditions for deploying (e.g., only deploy on 'master' branch)
                branch 'main'
            }
            steps {
                // Add deployment steps here (e.g., deploying to a server, cloud platform)
                // Example: sh 'npm run deploy'
            }
        }
    }
}
