import { useQuery } from "@tanstack/react-query";
import {TypecharacterRick } from "./types";

const getCharacter = async (): Promise<TypecharacterRick> => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    return await response.json();
};

const useGetcharacterRick = () => {
    return useQuery({
        queryKey: ["infoAppRick"],
        queryFn: getCharacter,
    })
}
export { useGetcharacterRick } 