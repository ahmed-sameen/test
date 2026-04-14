interface User {
    getname?: (name: string, age: number) => number
}

interface User { // this is know as re-opening the interface , means now User will have name as well
    name: string
}

const user: User = {
    getname: (name: string, age: number) => {
        return 1
    },
    name: "sameen"
}

let res = user?.getname?.('hi', 20)

// extending interface

interface Admin extends User {
    role: "admin" | "user"
}



const admin: Admin = {
    role: "admin",
    name: "sam"
}
console.log(res)


/*
Difference between type as interface
    1.type - we use intersectio ex: type Emp = EmpId & EmpName
      interfae -  we use extends ex: interface Emp extends EmpId,EmpName{}

    2.type - can create a variable ex: type name:string="sam"
      interface -  always needs to be object ex interface User {name:"string"}

    3.type - we cannot modify once type is created
      interface - we can modify once interface is created - by re-opening it
*/


type Status = "success" | "error";

function handleStatus(status: Status) {
    if (status === "success") {
        console.log("All good!");
    } else if (status === "error") {
        console.log("Something went wrong!");
    } else {
        const unreachable: never = status; // Ensures no other values exist
    }
}

type str = string;
type num = number;
type nvr = str & num;

function objCheckExtra(obj: { name: string }) {
    console.log(obj.name)
}
let obj = { name: "", id: 1 }
objCheckExtra(obj)

let arr: (Array<number> | string)[] = [[1], ""];
let arr1: (number[] | string)[] = [[1], ""];

type AdminUser = {
    name: string,
    id: number,
    class: number
}

type GeneralUser = {
    userName: string,
    id: number
}

let user1: AdminUser | GeneralUser = { userName: "string", class: 124, id: 1 }
user1 = { userName: "hello", id: 456 }
console.log(user1)



const enum Size { s = "s", m = 0, l }

let size: Size = 1

interface IUser {
    readonly id: number
    name?: string
    getInfo: (id: number) => String
}

interface IUser {
    age: number
}
interface IUser1 {
    ageOf: number
}

let user2: IUser = {
    id: 1,
    getInfo: (id1) => `id is ${id1}`,
    age: 28
}

console.log(user2.getInfo(user2.id))


class Profile {
    name: string;
    protected email: string;
    age: number = 28;
    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    get getEmail(): string {
        return this.email
    }
    set setEmail(email: string) {
        this.email = email;
    }

}

let userProfile = new Profile("name", "email")
userProfile.setEmail = "email@gmail.com"
console.log(userProfile.getEmail)

class AdminClass extends Profile {
    get getEmail(): string {
        return this.email;
    }
}

const adminClass = new AdminClass("name", "email")

class ProfileInterface implements IUser, IUser1 {
    id: number;
    name: string;
    age: number;
    ageOf: number
    getInfo: (id: number) => String
    constructor(id: number, name: string, age: number, getInfo: () => string, ageOf: number) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.getInfo = getInfo;
        this.ageOf = ageOf
    }
}

// const profileInterface = new ProfileInterface(1, "name", 28, () => "")

abstract class Book {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class HomeBook extends Book {
    get getName(): string {
        return this.name
    }
}

const book = new HomeBook("book name")
console.log(book.getName)

type status = "success" | "error";

function check(val: status) {
    if (val == "success") {

    } else {
        val
    }
}

const config = { host: "localhost", port: 3000 };
type configKeys = keyof typeof config;
// typeof config makes it {host:string,port:number}
// keyof typeof config makes it "host":"port"
let cg: configKeys = "host"

