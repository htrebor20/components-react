import { useNavigate } from "react-router-dom";
import Button from "../../../../components/button";
import StatusDot from "../../../../components/statusDot";
import { TypecharacterRick } from "../../../../services/models/types"
import {faEdit } from '@fortawesome/free-solid-svg-icons'

export function useInfoAppRick(results?: TypecharacterRick["results"]) {

  const navigate = useNavigate();
  return results?.map(charater => ({
    id: charater.id,
    name: charater.name,
    species: charater.species,
    origin: charater.origin.name,
    gender: charater.gender,
    created: charater.created,
    status: <StatusDot
      statusDotStyle={
        charater.status === 'Alive' ? 'successes' :
          charater.status === 'Dead' ? 'error' :
            'disabled'
      }
      label={charater.status} />,
    button: <Button onClick={() => navigate(`/models/edit/${charater.id}`)} icon={{start:faEdit}} buttonStyle="ghost"/>  

  })) ?? [];
}


