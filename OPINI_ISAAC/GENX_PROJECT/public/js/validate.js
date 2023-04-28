
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
  if (firstName.value == "") {
    firstName.style.border = "1px solid red";
 return false;
  } else {
    firstName.style.border = "1px solid green";
  }
  if (lastName.value == "") {
    lastName.style.border = "1px solid red";

    return false;
  } else {
    lastName.style.border = "1px solid green";
  }
  if (dob.value == "") {
    dob.style.border = "1px solid red";

    return false;
  } else {
    dob.style.border = "1px solid green";
  }
  if (gender.value == "") {
    gender.style.border = "1px solid red";

    return false;
  } else {
    gender.style.border = "1px solid green";
  }
  if (country.value == "") {
    country.style.border = "1px solid red";

    return false;
  } else {
    country.style.border = "1px solid green";
  }
  if (state.value == "") {
    state.style.border = "1px solid red";

    return false;
  } else {
    state.style.border = "1px solid green";
  }
  if (zipCode.value == "") {
    zipCode.style.border = "1px solid red";

    return false;
  } else {
    zipCode.style.border = "1px solid green";
  }
  if (phoneNumber1.value == "") {
    phoneNumber1.style.border = "1px solid red";

    return false;
  } else {
    phoneNumber1.style.border = "1px solid green";
  }
  if (phoneNumber2.value == "") {
    phoneNumber2.style.border = "1px solid red";

    return false;
  } else {
    phoneNumber2.style.border = "1px solid green";
  }
  if (email.value == "") {
    email.style.border = "1px solid red";

    return false;
  } else {
    email.style.border = "1px solid green";
  }
};
