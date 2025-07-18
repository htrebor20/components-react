import { useMutation, useQuery } from "@tanstack/react-query";
import { FormData, TypecharacterRick } from "./types";
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

const postFormData = async (data: FormData) => {
  console.log("data ------- : ", data);
  const response = await fetch("https://rickandmortyapi.com/api/fake-endpoint", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Error al enviar datos");
  }
  return await response.json();
};

const usePostForm = () => {
  return useMutation({
    mutationFn: (formData: FormData) => postFormData(formData),
  });
};

export default usePostForm;

