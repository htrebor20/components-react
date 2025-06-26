import { useQuery } from "@tanstack/react-query";
import { TypecharacterRick } from "./types";
import useFilterStore from "../../stores/store";

const BASE_URL = "https://rickandmortyapi.com/api/character";

const getCharacter = async (params: { gender: string }): Promise<TypecharacterRick> => {
  const queryParams = new URLSearchParams();

 
  if (params.gender !== 'todos') {
    queryParams.append("gender", params.gender);
  }

  const url = `${BASE_URL}?${queryParams.toString()}`;
  const response = await fetch(url);
  return await response.json();
};

const useGetcharacterRick = () => {
    const { gender } = useFilterStore();

 return useQuery({
    queryKey: ["infoAppRick", gender], 
    queryFn: () => getCharacter({ gender }),
  });
};

export { useGetcharacterRick };
