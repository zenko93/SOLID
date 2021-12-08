// Liskov substitution Principle //принцип подстановки Барбары Лисков

class Person {

}

class Member extends Person {
    access() {
        console.log('You have access')
    }
}

class Guest extends Person {
    isGuest = true;
}

class Frontend extends Member {
    canCreateFrontend() {}
}

class Backend extends Member {
    canCreateBackend() {}
}

class PersonFromDifferentCompany extends Guest {
    access() {
        throw new Error("You don't have access")
    }
}

function openSecretDoor(Member) {
    Member.access();
}

openSecretDoor(new Frontend())
openSecretDoor(new Backend())
// openSecretDoor(new PersonFromDifferentCompany()) // need to be member
