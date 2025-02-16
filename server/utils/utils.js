/**
 * utils.js
 * @brief This file contains utility functions
 */

// Function to log info messages
function logInfoMsgPrefix(message) {
    let logMessage = 'ts=' + new Date().toISOString() + ' ';
    logMessage += 'lvl=info ';
    logMessage += `msg= "${message}" `;
    logMessage += 'service=api';
    return logMessage;
}

// Function to log warning messages, mainly for non-critical errors
function logWarnMsgPrefix(message) {
    let logMessage = 'ts=' + new Date().toISOString() + ' ';
    logMessage += 'lvl=warn ';
    logMessage += `msg= "${message}" `;
    logMessage += 'service=api';
    return logMessage;
}

// Function to log error messages, mainly for critical errors
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