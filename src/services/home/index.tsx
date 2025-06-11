import { useQuery } from "@tanstack/react-query";

export type GetToDos = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

export const getPosts = async (): Promise<GetToDos[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!response.ok) {
        throw new Error("Error al obtener los posts");
    }
    return await response.json();
};

const useQueryCreateModules = () => {
    return useQuery({
        queryKey: ["post"],
        queryFn: getPosts,
    })
}
export { useQueryCreateModules } 