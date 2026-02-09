import {
  FlameIcon,
  Ghost,
  Mountain,
  Network,
  Skull,
  UsersRound,
} from "lucide-react";
import { ButtonObject } from "../components/StyledButton/StyledButton";

export const useLayotHeader = () => {
  const buttons: ButtonObject[] = [
    {
      text: "DashBoard",
      icon: <FlameIcon />,
      clickHandler: (event: any) => {
        console.log("DashBoard clicado");
      },
      to: "/",
    },
    {
      text: "Pessoas",
      icon: <UsersRound />,
      clickHandler: (event: any) => {
        console.log("Pessoas clicado");
      },
      to: "/people",
    },
    {
      text: "Demonios",
      icon: <Ghost />,
      clickHandler: (event: any) => {
        console.log("Demonios clicado");
      },
      to: "/demons",
    },
    {
      text: "Cavernas",
      icon: <Mountain />,
      clickHandler: (event: any) => {
        console.log("Cavernas clicado");
      },
      to: "/caverns",
    },
    {
      text: "Almas",
      icon: <Skull />,
      clickHandler: (event: any) => {
        console.log("Almas clicado");
      },
      to: "/souls",
    },
    {
      text: "Relacionamentos",
      icon: <Network />,
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
