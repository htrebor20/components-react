import { ExpansionPanelProps } from "../components/expansionPanel/types";
import { faCoffee, faArrowTurnDown, faSpinner, faFolderPlus, faClover, faBolt, faGear,faAngleDown, faXmark, faDatabase } from '@fortawesome/free-solid-svg-icons'


export const sidebarIten: ExpansionPanelProps[] = [
  {
    label: 'home',
    icon: faBolt,
    isExpanded: true,
    functionExpansionPanel: () => console.log('Automatizar clicked'),
  },
    {
    label: 'models',
    icon: faCoffee,
    isExpanded: true,
  }
]