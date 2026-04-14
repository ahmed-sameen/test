import { useGetPokemonByNameQuery } from "../../Utils/pokeminAPISlice";

const RTKPokemon1 = () => {

    const { data, error, isLoading } = useGetPokemonByNameQuery("charizard");

    return <div>
        Name1-{data?.forms[0]?.name}
    </div>


}

export default RTKPokemon1;