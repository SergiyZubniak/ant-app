import { PageHeader,Input, Space, Button } from 'antd'
import { useEffect, useState } from 'react';
import axios from 'axios'
import { useQuery } from 'react-query';






function Header() {
  const [text,setText] = useState('')
  const [emptyPack,setEmptyPack] = useState(false)
  const [pokemon,setPokemon] = useState<any>({})




 const { isLoading: isLoadingTutorial, refetch: getTutorialById } = useQuery(
    "pokemon",
    async () => {
      return await axios.get(`https://pokeapi.co/api/v2/pokemon/${text}`);  
    },
    {
      enabled: false,
     
      onSuccess: (res) => {
        console.log(res);
          
        const result = {
          name: text, 
          species: res.data.species.name,
          img:  res.data.sprites.front_default,
          hp: res.data.stats[0].base_stat,
          atack: res.data.stats[1].base_stat,
          defense: res.data.stats[2].base_stat,
          types: res.data.types[0].type.name         
        };
        setPokemon(result);
        setEmptyPack(true)
       
        
      },
      onError: (err) => {
        setPokemon(err);
      },
    }
  );
  function getDataById() {
    if (text) {
      try {
        getTutorialById();
      } catch (err) {
        setPokemon(err);
      }
    }
    console.log(pokemon);
    
    
  }
  
  
   const HandleText = (e: any) => {
      setText(e.target.value)     
   }

   

  return (
    <div className='flex flex-col justify-center items-center bg-yellow-200'>
      <PageHeader title='Pokemons Ant'/>
      <div className='w-28  mb-3'>
        <Input placeholder="input search text" value={text} onChange={HandleText} size='large'/>
      </div>
      <Button type="dashed" value='large' onClick={getDataById}>ADD</Button>
      <div>
        
        {!emptyPack ? <div>Some pokemons</div> :
        isLoadingTutorial ? <div>...Loading</div> :(
          <>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.img} alt={pokemon.name}/>
            <h3>Species: {pokemon.species}</h3>
            <h3>Type: {pokemon.types}</h3>
            <h3>Hp: {pokemon.hp}</h3>
            <h4>Attack: {pokemon.atack}</h4>
            <h4>Defense: {pokemon.defense}</h4>
          </>
        )}
      </div>
   </div>
  )
}

export default Header