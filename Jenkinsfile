pipeline {
   agent {
      docker {
          image 'node:lts-buster-slim' 
          args '-p 3000:3000' 
      }
  }
  
  stages {
    stage('Pull from main branch') {
      steps {
        echo 'Git pull origin main'
        sh 'git pull origin main'
      }
    }
    stage('Install package.json') {
      steps {
        echo 'npm install'
        sh 'npm install'
      }
    }
    stage('Build production environtment'){
      steps{
        echo 'Build production'
        sh 'npm build'
      }
    }
    stage('Generate production environment'){
      steps {
        echo 'npm generate'
        sh 'npm generate'
      }
    }
    stage('Start website'){
      steps {
        echo 'Nuxt start'
        sh 'npm start'
      }
    }
  }
}