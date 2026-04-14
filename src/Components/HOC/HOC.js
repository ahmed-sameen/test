import { useState } from "react"
import Card from "./Card"
import PromotedCard from "./PromotedCard"

const HOC = () => {
    const [list, setList] = useState([
        { name: "hi", promoted: true },
        { name: "hello", promoted: false }
    ])

    const Promoted = PromotedCard(Card)

    return list?.map((each,index) => {
        return each?.promoted ? <Promoted key={index} name={each.name} /> : <Card key={index} name={each.name} />
    })
}

export default HOC;