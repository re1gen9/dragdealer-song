import {MEETING_TIME_OPTION} from "./config.js"

export function checkHeardPolkiloValid(heardPolkiloValue) {
    if(!heardPolkiloValue[0]) {
        console.log('1) Ты не определился с тем слышал ли про полкило\nА раз не определился значит не слышал ёпта, тут даже спорить бессмысленно\n')
        return false
    }
    if(heardPolkiloValue.length > 1) {
        console.log(heardPolkiloValue, `\n1) Ты нормально впиши слышал ли ты про полкило, либо 'ДА' либо 'НЕТ', не добавляя ничего другого\nЕбалом меньше щёлкай и смелости набирайся\n`)
        return false
    }
    if(heardPolkiloValue[0].toLowerCase() !== 'да' && heardPolkiloValue[0].toLowerCase() !== 'нет') {
        console.log(heardPolkiloValue, `\n1) Ответ про полкило нужен либо 'ДА' либо 'НЕТ'\nРаз не можешь даже обозначить этот момент значит ничего ты не слышал\n`)
        return false
    }
    if(heardPolkiloValue[0] === 'нет') {
        return false
    }
    return true
}

export function checkVebatDecisionValid(vebatDecisionValue) {
    if(!vebatDecisionValue[0]) {
        console.log('2) Ты определись въёбывать барыгу будешь вообще или нет.\nА пока я вижу что ты не готов\n')
        return false
    }
    if(vebatDecisionValue.length > 1) {
        console.log(vebatDecisionValue, `\n2) Если про барыгу вместо 'ДА' или 'НЕТ' ты пишешь ещё какую-то хуйню то никого ты не решил въёбывать\nЕбалом меньше щёлкай и смелости набирайся\n`)
        return false
    }
    if(vebatDecisionValue[0].toLowerCase() !== 'да' && vebatDecisionValue[0].toLowerCase() !== 'нет') {
        console.log(vebatDecisionValue, `\n2) Про барыгу впиши русскими буквами, ЛИБО 'ДА' ЛИБО 'НЕТ', и без цифр блять\nЕсли не справляешься даже с вводом текста то никакой въёб барыг пусть тебе даже и не снится\n`)
        return false
    }
    if(vebatDecisionValue[0] === 'нет') {
        return false
    }
    return true
}

export function checkMoneyExistenceValid(moneyNotExistenceValue) {
    if(!moneyNotExistenceValue[0]) {
        console.log('3) Раз ты про деньги даже ничего не написал значит у тебя их точно нет, соболезную\n')
        return true
    }
    if(moneyNotExistenceValue.length > 1) {
        console.log(moneyNotExistenceValue, `\n3) Про деньги нужно вписать ОДНИМ словом либо 'ДА' либо 'НЕТ', чё ты здесь эссе выкатываешь.\nЧелы с деньгами словами не бросаются, выходит у тебя их нет\n`)
        return true
    }
    if(moneyNotExistenceValue[0].toLowerCase() !== 'да' && moneyNotExistenceValue[0].toLowerCase() !== 'нет') {
        console.log(moneyNotExistenceValue, `\n3) Про деньги впиши либо 'ДА' либо 'НЕТ'.\nНа самом деле здесь даже регистр не важен, но без способности нормально вводить текст ты точно денег не имеешь\n`)
        return true
    }
    if(moneyNotExistenceValue[0] === 'нет') {
        return false
    }
    return false
}

export function checkMeetingTimeValid(meetingTimeDecisionValue) {
    if(!meetingTimeDecisionValue[0]) {
        console.log('4) Назначил бы время к барыге, вы ж даже не запланируете встретиться с ним\n')
        return false
    }
    if(meetingTimeDecisionValue.length > 1) {
        console.log(meetingTimeDecisionValue, '\n4) Впиши нормально время встречи, ОДНИМ чилом. Как барыга поймёт ко скольки ему приходить?\nМного текста он не воспримет, барыгами не от большого ума становятся\n')
        return false
    }
    if(!(Object.values(MEETING_TIME_OPTION).includes(meetingTimeDecisionValue[0]))) {
        console.log(meetingTimeDecisionValue, '\n4) Ты должен вписать число от 1 до 12, ничего кроме этого\nРаз не умеешь в числа то точная с барыгой встреча назначена не будет\n')
        return false
    }
    return meetingTimeDecisionValue[0]
}

export function checkSwearingAccessValid(SwearingAccessValue) {
    if(!SwearingAccessValue[0]) {
        console.log('5) Определись материшься ты или нет\nРаз не решился с этим вопросом значит маленький, материться запрещено\n')
        return false
    }
    if(SwearingAccessValue.length > 1) {
        console.log(SwearingAccessValue, `\n5) В параметрах матов впиши либо 'ДА' либо 'НЕТ', без другой хуйни\nНе контролируя ввод матом лучше не пользоваться, а то ещё хуйни наговоришь\n`)
        return false
    }
    if(SwearingAccessValue[0].toLowerCase() !== 'да' && SwearingAccessValue[0].toLowerCase() !== 'нет') {
        console.log(SwearingAccessValue, `\n5) Про маты впиши НОРМАЛЬНО, либо 'ДА' либо 'НЕТ'\nЛюбая другая формулировка не подходит, но раз ты такой балбес значит маты любишь\nВ таком случае разрешаю\n`)
        return true
    }
    if(SwearingAccessValue[0] === 'нет') {
        return false
    }
    return true
}