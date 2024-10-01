class User {
    #password;

        setPassword(newPassword) {

            this.#password = newPassword;
        }

        checkPassword(password) {
            return this.#password === password;
        }
        
}
const user = new User();
user.setPassword('123456789');

console.log(user.checkPassword('ndueHH54idjw2145'));
console.log(user.checkPassword('gfjTT54idjw298g5'));

console.log(user.checkPassword('123456789'));
console.log(user.checkPassword('ndueHH54idjw2145'));
