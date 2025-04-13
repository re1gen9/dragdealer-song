import inquirer from 'inquirer'
import chalk from 'chalk'
import {resultSongLirycs} from "./song-lirycs-logs.js"
import {MEETING_TIME_OPTION} from "./config.js"

async function main() {
    await inquirer.prompt([
        {
          type: 'list',
          name: 'framework',
          message: 'Слышал про полкило?',
          choices: ['Да', 'Нет'],
        }
      ]).then(answers => {
        if(answers.framework === 'Нет') {
          console.log(chalk.yellow.bold('Вы не слышали про полкило, никакой ситуации не возникнет!'))
          process.kill(process.pid)
        }
        return
      })

    const vebatDecision = await inquirer.prompt([
        {
          type: 'list',
          name: 'framework',
          message: 'Хочешь въебать барыгу?',
          choices: ['Да', 'Нет'],
        }
      ]).then(answers => {
        if(answers.framework === 'Нет') {
          return false
        }
        return true
      })

    const moneyExistence = await inquirer.prompt([
        {
          type: 'list',
          name: 'framework',
          message: 'У тебя много денег?',
          choices: ['Да', 'Нет'],
        }
      ]).then(answers => {
        if(answers.framework === 'Нет') {
          return false
        }
        return true
      })

    const meetingTime = await inquirer.prompt([
        {
          type: 'list',
          name: 'framework',
          message: 'На сколько назначишь встречу с барыгой?',
          choices: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        }
      ]).then(answers => {
        return Number(answers.framework)
      })

    const swearingAccess = await inquirer.prompt([
        {
          type: 'list',
          name: 'framework',
          message: 'Можешь общаться матом?',
          choices: ['Да', 'Нет'],
        }
      ]).then(answers => {
        if(answers.framework === 'Нет') {
          return false
        }
        return true
      })
    
    resultSongLirycs(vebatDecision, moneyExistence, meetingTime, swearingAccess, MEETING_TIME_OPTION)
}

main()