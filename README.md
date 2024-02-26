# Random Password Generator

[![npm version](https://badge.fury.io/js/expassgen.svg)](https://badge.fury.io/js/expassgen)
[![GitHub license](https://img.shields.io/github/license/exronin/expassgen)](https://github.com/exronin/expassgen/blob/main/LICENSE)

A simple package for generating random passwords with customizable options.

## Installation

You can install the package via npm:
npm install expassgen
const generateRandomPassword = require('expassgen');

// Generate a random password with default options (12 characters with uppercase, lowercase, numbers, and special characters)
const password = generateRandomPassword();
console.log(password);

// Generate a random password with custom options
const options = {
length: 16,
includeUpperCase: false,
includeNumbers: true,
includeSpecialChars: true,
specialChars: '@#$%&'
};
const customPassword = generateRandomPassword(options);
console.log(customPassword);

## Option

length (optional, default: 12): Length of the generated password.
includeUpperCase (optional, default: true): Whether to include uppercase letters in the password.
includeLowerCase (optional, default: true): Whether to include lowercase letters in the password.
includeNumbers (optional, default: true): Whether to include numbers in the password.
includeSpecialChars (optional, default: true): Whether to include special characters in the password.
specialChars (optional, default: "!@#$%^&\*()-\_=+"): List of special characters to include in the password.
