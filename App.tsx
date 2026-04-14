import MockInterviewQuestions from "./src/Components/ShellMockInterview/MockInterviewQuestions"
import FixBug from "./src/Components/ShellMockInterview/FixBug"
import Optimization from "./src/Components/ShellMockInterview/Optimization"
import ColorCodeInput from "./src/Components/ShellMockInterview/ColorCodeInput"
import ThemeSelector from "./src/Components/ShellMockInterview/ThemeSelector"
import TSinReact from "./TSinReact"
import { useState } from "react"
import Button from "./Button"
function App() {
    const [count, setCount] = useState<number>(0)
    // console.log("here")
    const [array1, setArray1] = useState([1, 2, 3, 4, 5, 6,])

    const handleSubmit = (id: number): void => {
        console.log(id)
    }

    return (

        // <MockInterviewQuestions/>
        // <FixBug />
        // <Optimization />
        // <ColorCodeInput />
        // <ThemeSelector/>
        // <TSinReact count={1} setCount={setCount} handleSubmit={handleSubmit} styles={{ backgroundColor: "green" }} >
        //     <div>hi</div>
        // </TSinReact>
        <>
            <div id="div"><p>hi</p><p>hi</p></div>
            <ul>
                {array1.map(each => <li key={each}>{each}</li>)}
            </ul>
            <div style={{ textTransform: "capitalize", boxShadow: "3px 3px 6px blue" }}>CSS check</div>
            <Button type={"submit"} variant="primary">hi</Button>
        </>
    )
}

export default App;

let array1: number[] = [12]
let array2: (string | number | { name: string } | object)[] = [{ name1: "" }, {}]
let array3: (number[] | string)[] = [[1], ""];

let tuple1: [string, number] = ["", 3]
tuple1.push("") // accepts more number or string, not any other type

const enum SIZE { s = "s", m = 0, l }

function CalTax(salary: number): number {
    return salary * 1
}

let obj1: {
    name: string,
    age: number
} = {
    name: "",
    age: 1
}

type EMPLOYEE = {
    readonly id: number,
    name?: string
}

let emp1: EMPLOYEE = { id: 1 };


function checkWeight(weight: (string | number)) {
    if (typeof weight == "string") {
        // weight
    }
}

type EMPID = { id: number }
type EMPNAME = { name: string }
type EMP = EMPID & EMPNAME;
let emp2: EMP = { id: 1, name: 's' }

let literal: "in" | "cm" = "cm"
type lit = "in" | "cm";
let literal1: lit = "in"

interface IButton {
    id: number,
    name: string
}



let num: string & number;
type status = "success" | "error" | "pending";

function typeExhaustivenessCheck(st: status) {
    if (st == "success") { }
    else if (st == "error") { }
    else if (st == "pending") { }
    else {
        const typecheck: never = st;
        return typecheck
    }
}

interface IUser {
    name: string,
    getInfo: () => string
}

const user1: IUser = {
    name: "sam",
    getInfo(): string {
        return this.name
    },
}
// console.log(user1.getInfo())

interface Admin extends IUser {
    role: "admin"
}

const user2: Admin = {
    name: "sam",
    getInfo(): string {
        return this.name
    },
    role: "admin"
}


class Profile {
    name: string
    id: number
    constructor(name: string, id: number) {
        this.name = name;
        this.id = id
    }
}

class Admin extends Profile {
    protected role1: string
    constructor(name: string, id: number, role1: string) {
        super(name, id)
        this.role1 = role1;
    }
}

class CEO extends Admin {
    private position: string;
    constructor(name: string, id: number, role1: string, position: string) {
        super(name, id, role1)
        this.position = position;
    }

    get getName(): string {
        return this.role1;
    }

    get getPosition(): string {
        return this.position;
    }

    set setPosition(po: string) {
        this.position = po
    }
}

let ceo1 = new CEO("name", 12, "admin", "ceo")
console.log(ceo1.getPosition)
console.log(ceo1.getName)

abstract class COMPANY implements EMPLOYEE {
    id: number
    name: string
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}
class COMP extends COMPANY { }
const comp1 = new COMP(1, "");

function genericFunction<T>(val: T[]): T {
    return val[0]
}

genericFunction<EMPLOYEE>([{ id: 1 }])

function interfaceNarrowing(val: EMPID | EMPNAME) {
    if ("id" in val) {
        val
    } else {
        val
    }
}

function instanceNarrowing(val: COMP | CEO) {
    if (val instanceof COMP) {
        val
    } else {
        val
    }
}

type Fish = { swim: () => void }
type Cat = { run: () => void }
function checkPet(val: Fish | Cat): val is Fish {
    return (val as Fish).swim !== undefined
}

function find(val: Fish | Cat) {
    if (checkPet(val)) {
        val
    }
}

type User1 = {
    role: "user"
}
type Admin1 = {
    role: "admin"
}

function unionDiscrimination(val: User1 | Admin1) {
    if (val.role == "user") {
        val
    }
}
