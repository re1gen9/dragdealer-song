export function checkHeardPolkiloStatus(heardPolkiloValue) {
    if(Object.values(heardPolkiloValue)[0] === 'Нет') {
        return false
    }
    return true
}

export function checkVebatDecisionStatus(vebatDecisionValue) {
    if(Object.values(vebatDecisionValue)[0] === 'Нет') {
        return false
    }
    return true
}

export function checkMoneyExistenceStatus(moneyExistenceValue) {
    if(Object.values(moneyExistenceValue)[0] === 'Нет') {
        return false
    }
    return true
}

export function checkSwearingAccessStatus(SwearingAccessValue) {
    if(Object.values(SwearingAccessValue)[0] === 'Нет') {
        return false
    }
    return true
}