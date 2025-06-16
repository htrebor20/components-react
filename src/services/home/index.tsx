import { useQuery } from "@tanstack/react-query";

export type GetToDos = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

export const getPosts = async (): Promise<GetToDos[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
   
    return await response.json();
};

const useGetCreatedModules = () => {
    return useQuery({
        queryKey: ["post"],
        queryFn: getPosts,
    })
}
export { useGetCreatedModules } 


