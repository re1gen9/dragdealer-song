import inquirer from 'inquirer'
import {checkHeardPolkiloStatus, checkVebatDecisionStatus, checkMoneyExistenceStatus, checkSwearingAccessStatus} from "./properties-status.js"
import {resultSongLirycs} from "./song-lirycs-logs.js"
import {MEETING_TIME_OPTION} from "./config.js"

async function main() { 
    const heardPolkiloMoment = await inquirer.prompt([
        {
          type: 'list',
          name: 'framework',
          message: 'Слышал про полкило?',
          choices: ['Да', 'Нет'],
        }
      ])

    const vebatDecision = await inquirer.prompt([
        {
          type: 'list',
          name: 'framework',
          message: 'Хочешь въебать барыгу?',
          choices: ['Да', 'Нет'],
        }
      ])

    const moneyExistence = await inquirer.prompt([
        {
          type: 'list',
          name: 'framework',
          message: 'У тебя много денег?',
          choices: ['Да', 'Нет'],
        }
      ])

    const meetingTime = await inquirer.prompt([
        {
          type: 'list',
          name: 'framework',
          message: 'На сколько назначишь встречу с барыгой?',
          choices: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        }
      ])

    const swearingAccess = await inquirer.prompt([
        {
          type: 'list',
          name: 'framework',
          message: 'Можешь общаться матом?',
          choices: ['Да', 'Нет'],
        }
      ])
    resultSongLirycs(checkHeardPolkiloStatus(heardPolkiloMoment), checkVebatDecisionStatus(vebatDecision), checkMoneyExistenceStatus(moneyExistence), meetingTime, checkSwearingAccessStatus(swearingAccess), MEETING_TIME_OPTION)
}

main()