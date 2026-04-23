import { useFetchCardsQuery, useRemoveCardMutation } from "../../Utils1/RTKCardsApi"

const RTKCards1 = () => {
    const { data, isFetching, error } = useFetchCardsQuery()
    const [removeCard] = useRemoveCardMutation()

    return (<div>
        {data?.map(each => {
            return <div key={each.id}>
                {each.name}
                <button onClick={() => removeCard(each.id)}>Remove</button>
            </div>
        })}
    </div>)
}

export default RTKCards1;