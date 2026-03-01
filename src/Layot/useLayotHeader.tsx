import { ButtonObject } from "../components/StyledButton/StyledButton";
import DashboardIcon from "@mui/icons-material/GridView";
import EntitiesIcon from "@mui/icons-material/Inventory2Outlined";
import ManagersIcon from "@mui/icons-material/PeopleOutline";
import SubmissionsIcon from "@mui/icons-material/DescriptionOutlined";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import SignOutIcon from "@mui/icons-material/ExitToApp";

export const useLayotHeader = () => {
  const buttons: ButtonObject[] = [
    {
      label: "DashBoard",
      active: true,
      icon: <DashboardIcon fontSize="small" />,
      clickHandler: (event: any) => {
        console.log("DashBoard clicado");
      },
      to: "/dashboard",
    },
    {
      label: "Pessoas",
      active: true,
      icon: <EntitiesIcon fontSize="small" />,
      clickHandler: (event: any) => {
        console.log("Pessoas clicado");
      },
      to: "/people",
    },
    {
      label: "Demonios",
      active: true,
      icon: <ManagersIcon fontSize="small" />,
      clickHandler: (event: any) => {
        console.log("Demonios clicado");
      },
      to: "/demons",
    },
    {
      label: "Cavernas",
      active: true,
      icon: <SubmissionsIcon fontSize="small" />,
      clickHandler: (event: any) => {
        console.log("Cavernas clicado");
      },
      to: "/caverns",
    },
    {
      label: "Almas",
      active: true,
      icon: <SettingsIcon fontSize="small" />,
      clickHandler: (event: any) => {
        console.log("Almas clicado");
      },
      to: "/souls",
    },
    {
      label: "Relacionamentos",
      active: true,
      icon: <SignOutIcon fontSize="small" />,
      clickHandler: (event: any) => {
        console.log("Relacionamentos clicado");
      },
      to: "/relationships",
    },
  ];

  return {
    buttons,
  };
};
