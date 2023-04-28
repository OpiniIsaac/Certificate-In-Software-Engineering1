
const Validate = () => {
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const dob = document.getElementById("dob");
  const country = document.getElementById("country");
  const state = document.getElementById("state");
  const town = document.getElementById("town");
  const zipCode = document.getElementById("zipCode");
  const phoneNumber1 = document.getElementById("phoneNumber1");
  const phoneNumber2 = document.getElementById("phoneNumber2");
  const email = document.getElementById("email");
  if (firstName.value > 2) {
    firstName.style.border = "1px solid red";
 return false;
  } else if (firstName.value < 255){
    firstName.style.border = "1px solid red";
    return false;

  }
else{
    firstName.style.border = "1px solid green";

}

  if (lastName.value < 2) {
    lastName.style.border = "1px solid red";

    return false;
  } else if (firstName > 255){
    lastName.style.border = "1px solid green";
    return false;

  }
  else{
    lastName.style.border = "1px solid green";
  }
  const dateOfBirth = new Date(dob.value);

  const ageInYears = (Date.now() - dateOfBirth.getTime()) / (1000 * 60 * 60 * 24 * 365);
  if (ageInYears < 18) {
    dob.style.border = "1px solid red";

    return false;
  }
  else {
    dob.style.border = "1px solid green";

  }
  if (gender.value == "") {
    gender.style.border = "1px solid red";

    return false;
  } else {
    gender.style.border = "1px solid green";
  }
  if (country.value < 2) {
    country.style.border = "1px solid red";

    return false;
  } else if (country.value > 255) {
    country.style.border = "1px solid red";
    return false;

  }
 else {
    country.style.border = "1px solid green";
  }
  if (state.value < 2) {
    state.style.border = "1px solid red";

    return false;
  } else if(state.value > 255) {
    state.style.border = "1px solid red";
    return false
  }
  else{
    state.style.border = "1px solid green";

  }
  if (zipCode.value <2) {
    zipCode.style.border = "1px solid red";

    return false;
  } else if (zipCode > 255) {
    zipCode.style.border = "1px solid red";
    return false;

  }
  else
  {
    zipCode.style.border = "1px solid green";

  }
  if (phoneNumber1.value < 2) {
    phoneNumber1.style.border = "1px solid red";

    return false;
  } else  if (phoneNumber1 < 255){
    phoneNumber1.style.border = "1px solid red";
    return false;

  }
  else{
    phoneNumber1.style.border = "1px solid green";

  }
  if (phoneNumber2.value < 2) {
    phoneNumber2.style.border = "1px solid red";

    return false;
  } else if (phoneNumber2 > 255) {
    phoneNumber2.style.border = "1px solid red";
    return false;

  } else{
    phoneNumber2.style.border = "1px solid red";

  }
  if (email.value < 2) {
    email.style.border = "1px solid red";

    return false;
  } else  if (email.value > 255){
    email.style.border = "1px solid red";
    return false;

  }
  else{
    email.style.border = "1px solid green";

  }
};
