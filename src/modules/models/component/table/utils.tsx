import { TypecharacterRick } from "../../../../services/models/types"

export function InfoAppRick(results?: TypecharacterRick["results"]) {
  return results?.map(charater => ({
    id: charater.id,
    name: charater.name,
    species: charater.species,
    origin: charater.origin.name,
    gender: charater.gender,
    created: charater.created,
    status: charater.status
  })) ?? [];
}
