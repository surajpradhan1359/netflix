export const checkValidData = (...args) => {
  let newSet = new Set([...args]);
  let [email, password] = [...args];
  console.log("The password is",password)
  if (newSet.has("")) {
    return "please fill all the field";
  } else {
    //do the regex logic;
    let validateEmailRegex = /^\S+@\S+\.\S+$/.test(email);
    let validatePassword = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(password);
    if (!validateEmailRegex) {
      return "Email Id is not valid";
    }
    if (!validatePassword) {
      return "password must be 8 characters and atleast a alphabet";
    }
    return null;
  }
};
