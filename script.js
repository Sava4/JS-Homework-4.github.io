//An object method is a function created inside one of the object propertiees that has access to and manipulates object data 

function creatNewUser () {
    let newUser = {
        setFirstName() {
            Object.defineProperty(this, 'firstName', {
                value: prompt('Please enter your first name'),
                configurable: true,
                writable: false 
            })},
        setLastName() {
            Object.defineProperty(this, 'lastName', {
                value: prompt('Please enter your last name'),
                configurable: true,
                writable: false
            })},
        getLogin() { 
            return (this.firstName.trim().slice(0, 1).toLowerCase() + this.lastName.trim().toLowerCase());
            }
        };
newUser.setFirstName();
newUser.setLastName();
return newUser;
}

console.log(creatNewUser().getLogin());

