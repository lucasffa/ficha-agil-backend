/*
  Este módulo se encarrega de gerenciar a blacklist de tokens. A função
  `isTokenBlacklisted` verifica se um token está na blacklist. A função
  `addToBlacklist` adiciona um token à blacklist. A função `clearExpiredTokens`
  limpa os tokens expirados da blacklist.
*/
const fs = require('fs');
const path = require('path');

const blacklistFilePath = path.join(__dirname, '..', '../../blacklist.json');

// Lê o arquivo de blacklist e retorna um array de tokens
function readBlacklist() {
  const data = fs.readFileSync(blacklistFilePath);
  return JSON.parse(data);
}

// Escreve o array de tokens no arquivo de blacklist
function writeBlacklist(blacklist) {
  const data = JSON.stringify(blacklist, null, 2);
  fs.writeFileSync(blacklistFilePath, data);
}

// Verifica se um token está na blacklist
function isTokenBlacklisted(token) {
  const blacklist = readBlacklist();
  return blacklist.some(entry => entry.token === token);
}

// Adiciona um token à blacklist
function addToBlacklist(token) {
  const blacklist = readBlacklist();
  const timestamp = Date.now();
  blacklist.push({ token, timestamp });
  writeBlacklist(blacklist);
}

// Limpa os tokens expirados da blacklist
function clearExpiredTokens() {
  console.log('#### Clearing expired tokens');
  const oneHour = 3600000;
  const blacklist = readBlacklist();
  const filteredBlacklist = blacklist.filter(entry => Date.now() - entry.timestamp < oneHour);
  writeBlacklist(filteredBlacklist);
}

module.exports = {
  isTokenBlacklisted,
  addToBlacklist,
  clearExpiredTokens
};
