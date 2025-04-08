import {checkHeardPolkiloValid, checkVebatDecisionValid, checkMoneyExistenceValid, checkMeetingTimeValid, checkSwearingAccessValid} from "./properties-validation.js"
import {resultSongLirycs} from "./song-lirycs-logs.js"
import {MEETING_TIME_OPTION} from "./config.js"
const [,, ...args] = process.argv

function getUserProperty(decisionStartSymbol, inputArgs) {
    const resultDecisionValue = []
    for(let i = 0; i < inputArgs.length; i++) {
        if(inputArgs[i] === decisionStartSymbol) {
            while(i + 1 < inputArgs.length && !inputArgs[i + 1].startsWith('-')) {
                resultDecisionValue.push(inputArgs[i + 1])
                i++
            }
        }
    }
    return resultDecisionValue
}

function main() {
    console.log('\n')

    if(!args) {
        console.log('Ты решил вообще ничего не делать и никого не въёбывать. Респект')
        retrun
    }

    const heardPolkiloMoment = getUserProperty('-1', args)
    const heardPolkiloMomentStatus = checkHeardPolkiloValid(heardPolkiloMoment)

    const vebatDecision = getUserProperty('-2', args)
    const vebatDecisionStatus = checkVebatDecisionValid(vebatDecision)

    const moneyNotExistence = getUserProperty('-3', args)
    const moneyNotExistenceStatus = checkMoneyExistenceValid(moneyNotExistence)

    const meetingTime = getUserProperty('-4', args)
    const meetingTimeStatus = checkMeetingTimeValid(meetingTime)

    const swearingAccess = getUserProperty('-5', args)
    const swearingAccessStatus = checkSwearingAccessValid(swearingAccess)
    
    resultSongLirycs(heardPolkiloMomentStatus, vebatDecisionStatus, moneyNotExistenceStatus, meetingTimeStatus, swearingAccessStatus, MEETING_TIME_OPTION)
}

main()