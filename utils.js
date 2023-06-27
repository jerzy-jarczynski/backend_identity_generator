const randChoice = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const generatePhoneNumber = () => {
  let phoneNumber = '';
  // Generate the first digit between 1 and 9
  const firstDigit = Math.floor(Math.random() * 9) + 1;
  phoneNumber += firstDigit.toString();

  // Generate the remaining 8 digits
  for (let i = 0; i < 8; i++) {
    const digit = Math.floor(Math.random() * 10);
    phoneNumber += digit.toString();
  }

  return phoneNumber;  
};

module.exports = {
  randChoice,
  generatePhoneNumber
};

