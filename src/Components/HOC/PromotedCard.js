const PromotedCard = (Card) => {
    return (props) => {
        return <div>
            <Card {...props} /> - <span>Promoted</span>
        </div>
    }
}

export default PromotedCard