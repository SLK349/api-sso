pipeline {    agent any    tools {nodejs "Nodejs"}    stages {        stage('Checkout') {            steps {                git url :'https://github.com/SLK349/api-sso.git', branch: 'main'            }        }        stage('Install dependencies') {            steps {                sh 'npm install'            }        }        stage('Build') {            steps {                sh 'npm run build'            }        }        stage('Deploy') {            steps {                sh 'npm run deploy'            }        }    }}