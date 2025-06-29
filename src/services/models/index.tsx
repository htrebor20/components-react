import { useQuery } from "@tanstack/react-query";
import { TypecharacterRick } from "./types";
import useFilterStore from "../../stores/store";

const BASE_URL = "https://rickandmortyapi.com/api/character";

const getCharacter = async (params: { gender: string, page: number }): Promise<TypecharacterRick> => {
  const queryParams = new URLSearchParams();

  if (params.gender !== 'todos') {
    queryParams.append("gender", params.gender);
  }

  queryParams.append("page", params.page.toString())

  const url = `${BASE_URL}?${queryParams.toString()}`;
  const response = await fetch(url);
  return await response.json();
};

const useGetcharacterRick = () => {
  const { gender, page } = useFilterStore();

  return useQuery({
    queryKey: ["infoAppRick", gender, page],
    queryFn: () => getCharacter({ gender, page }),
  });
};

export { useGetcharacterRick };
