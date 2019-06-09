//What is an object method? 
let testUsr;

function creatNewUser () {
    let newUser = {
        firstName: prompt('Please enter your first name'),
        lastName: prompt('Please enter your last name'),
        getLogin() { 
            return (this.firstName.trim().slice(0, 1).toLowerCase() + this.lastName.trim().toLowerCase());
        },
    };
return newUser;
}

testUsr = creatNewUser();
console.log(testUsr.getLogin());

