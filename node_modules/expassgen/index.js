// index.js

const generateRandomPassword = (options = {}) => {
    const {
      length = 12,
      includeUpperCase = true,
      includeLowerCase = true,
      includeNumbers = true,
      includeSpecialChars = true,
      specialChars = '!@#$%^&*()-_=+'
    } = options;
  
    let charset = '';
    if (includeUpperCase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowerCase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSpecialChars) charset += specialChars;
  
    if (charset === '') {
      throw new Error('Setidaknya satu opsi harus diaktifkan');
    }
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  };
  
  module.exports = generateRandomPassword;
  