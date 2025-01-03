function logInfoMsgPrefix(message) {
    let logMessage = 'ts=' + new Date().toISOString() + ' ';
    logMessage += 'lvl=info ';
    logMessage += `msg= "${message}" `;
    logMessage += 'service=api';
    return logMessage;
}

function logWarnMsgPrefix(message) {
    let logMessage = 'ts=' + new Date().toISOString() + ' ';
    logMessage += 'lvl=warn ';
    logMessage += `msg= "${message}" `;
    logMessage += 'service=api';
    return logMessage;
}

function logErrorMsgPrefix(message) {
    let logMessage = 'ts=' + new Date().toISOString() + ' ';
    logMessage += 'lvl=error ';
    logMessage += `msg= "${message}" `;
    logMessage += 'service=api';
    return logMessage;
}

module.exports = {
    logInfoMsgPrefix,
    logWarnMsgPrefix,
    logErrorMsgPrefix
};