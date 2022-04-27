const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(type=true) {
    this.type = type;
  }
  encrypt(str, key) {
    if (!str || !key) throw new Error('Incorrect arguments!');

    while (key.length < str.length) {
      key+=key
    };

    key = key.toUpperCase().split('');
    str = str.toUpperCase().split('');

    str = str.map((x,i)=>{
      if (x.charCodeAt()<65 || x.charCodeAt()>90) {
        key.splice(i,0,'del');
        return x;
      };

      let code = x.charCodeAt() + key[i].charCodeAt() - 65;
      if (code <= 90) {
        return String.fromCharCode(code)
      } else return String.fromCharCode(code-26) 
    })

    return this.type ? str.join('') : str.reverse().join('')

  }
  decrypt(str, key) {
    if (!str || !key) throw new Error('Incorrect arguments!');
    while (key.length < str.length) {
      key+=key
    };

    key = key.toUpperCase().split('');
    str = str.toUpperCase().split('');

    str = str.map((x,i)=>{
      if (x.charCodeAt()<65 || x.charCodeAt()>90) {
        key.splice(i,0,'del');
        return x;
      };

      let code = x.charCodeAt() - key[i].charCodeAt() + 65;
      if (code >= 65) {
        return String.fromCharCode(code)
      } else return String.fromCharCode(code+26) 
    });
    return this.type ? str.join('') : str.reverse().join('');
 }
}

module.exports = {
  VigenereCipheringMachine
};
