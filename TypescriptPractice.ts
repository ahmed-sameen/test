let array1: number[] = [12]
let array2: (string | number | { name: string } | object)[] = [{ name1: "" }, {}]
let array3: (number[] | string)[] = [[1], ""];

let tuple1: [string, number] = ["", 3]
tuple1.push("") // accepts more number or string, not any other type

const enum SIZE { s = "s", m = 0, l }

let tshirt: SIZE = SIZE.s
console.log(tshirt)

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
console.log(user1.getInfo())
