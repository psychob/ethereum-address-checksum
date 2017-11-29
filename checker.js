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
