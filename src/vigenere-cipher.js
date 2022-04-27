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

    key = key.toUpperCase();
    str = str.toUpperCase();

    str = str.split('').map((x,i)=>{
      if (x.charCodeAt()<65 || x.charCodeAt()>90 || key[i].charCodeAt()<65 || key[i].charCodeAt()>90 ) return;

      let code = x.charCodeAt() + key[i].charCodeAt - 65;
      if (code <= 90) {
        return String.fromCharCode(code)
      } else return String.fromCharCode(code-36) 
    })


  }
  // decrypt(str, key) {
  //   while (key.length < str.length) {
  //     key+=key
  //   };

  //   key = key.toUpperCase();
  //   str = str.toUpperCase();

  //   str = str.split('').map((x,i)=>{
  //     if (x.charCodeAt()<65 || x.charCodeAt()>90 || key[i].charCodeAt()<65 || key[i].charCodeAt()>90 ) return;

  //     let code = x.charCodeAt() + key[i].charCodeAt - 65;
  //     if (code <= 90) {
  //       return String.fromCharCode(code)
  //     } else return String.fromCharCode(code-36) 
  //   })
}

module.exports = {
  VigenereCipheringMachine
};
