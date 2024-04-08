const fs = require('node:fs');
const { version, type } = require('node:os');

function verify(path) {
    try{
        const rawInput = fs.readFileSync(path);
        let inputJson = JSON.parse(rawInput);
        let result = true;
        let statements = (inputJson?.PolicyDocument?.Statement ?? []);

        if(!(typeof statements[Symbol.iterator] === 'function'))
            statements = [statements];
        
        for(let statement of statements) {
            if(statement?.Resource == '*') {
                result = false;
                break;
            }
        }
        return result;
    } catch (err) {
        console.log(err);
    }
}

module.exports = verify;

