//
// ethereum-address-checksum
// (c) 2017 Andrzej Budzanowski <kontakt@andrzej.budanowski.pl>
// --
// This simple utility allowes you to get ethereum addresses with valid checksum formatting
// 
// To use run:
//      node checker.js < input_file > output_file
//
var ether = require('ethereumjs-util');
var readline = require('readline');

(function main() {
    var file = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    file.on('line', function (line) {
        line = line.trim();

        if (!ether.isValidAddress(line)) {
            console.error("Address: " + line + " is not valid");
        } else {
            if (!ether.isValidChecksumAddress(line)) {
                line = ether.toChecksumAddress(line);
            }

            console.log(line);
        }
    });
})();

