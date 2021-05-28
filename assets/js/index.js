const reg1 = new RegExp("[a-z]");
const reg2 = /[a-z]/;



const validateString = (string) => {
  const regString = /^[A-Z][a-z]* [A-Z][a-z]*$/;
  if(regString.test(string)){
    console.log('Sucsess');
  }
  else{
    console.error('Invalid');
  }
  
};

validateString('John Smith');
validateString('john smith');

