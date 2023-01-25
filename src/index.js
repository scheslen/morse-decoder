const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result='';
    let sLetter='';
    let mLetter='';

    for (let i=0; i+10<=expr.length; i+=10){
        sLetter=expr.slice(i,i+10);
        if (sLetter==='**********'){
          result+=' ';
        }
        else{
          mLetter='';
          for (let j=0; j<9; j+=2){
            if (sLetter.slice(j,j+2)==='10'){
                mLetter+='.';
             }
             else if (sLetter.slice(j,j+2)==='11'){
                mLetter+='-';
             }
          }
          result+=MORSE_TABLE[mLetter];
        console.log(result);
        }
    }
    return result;
}

module.exports = {
    decode
}