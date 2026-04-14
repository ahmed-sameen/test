import { useGetPokemonByNameQuery } from "../../Utils/pokeminAPISlice";

const RTKPokemon = () => {

    const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

    return <div>
        Name-{data?.forms[0]?.name}
    </div>


}

export default RTKPokemon;