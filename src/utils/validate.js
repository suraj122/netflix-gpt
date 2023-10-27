const checkValidation = (name, email, password) => {
  const error = {};

  //   checking name validation

  const isValidName = /^[a-zA-Z ]{2,30}$/.test(name);
  if (!isValidName) error.name = "Name is invalid";

  //   Email Validation
  const isValidEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
  if (!isValidEmail) error.email = "Email is invalid";

  //   Password Validation
  const isValidPassword =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
  if (!isValidPassword) error.password = "Password is invalid";

  return error;
};

export default checkValidation;
