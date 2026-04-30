class CreateUser {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  login() {
    console.log("Log in!");
  }

  logout() {
    console.log("logout!");
  }
}

class Admin extends CreateUser {
  constructor(name, email, role) {
    super(name, email);
    this.role = role;
  }

  deleteUser(user) {
    console.log(`${this.name} deleted user ${user.name}`);
  }
}

const userOne = new CreateUser("Abuhurairah", "Abuhurairah@gmail.com");
const userTwo = new CreateUser("Abdulmoiz", "Abdulmoiz@gmail.com");

const admin = new Admin("Chaudary", "admin@gmail.com", "Super Admin");

console.log(userOne);
console.log(userTwo);
console.log(admin);

admin.login();
admin.deleteUser(userTwo);