import { useQuery } from "@tanstack/react-query";
import { TypecharacterRick } from "./types";
import useFilterStore from "../../stores/store";


const getCharacter = async (gender: string): Promise<TypecharacterRick> => {
  const response = await fetch(`https://rickandmortyapi.com/api/character?gender=${gender}`);
    return await response.json();
};

const useGetcharacterRick = () => {
    const { gender } = useFilterStore();

 return useQuery({
    queryKey: ["infoAppRick", gender], 
    queryFn: () => getCharacter(gender),
  });
};

export { useGetcharacterRick };
