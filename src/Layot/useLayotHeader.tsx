import { FlameIcon, Ghost, Mountain, Network, Skull, UsersRound } from "lucide-react";
import { ButtonObject } from "../components/StyledButton/StyledButton";

export const useLayotHeader = () => {
  const buttons: ButtonObject[] = [
    {
      text: "DashBoard",
      icon: <FlameIcon />,
      clickHandler: (event: any) => {
        console.log("DashBoard clicado");
      },
    },
    {
      text: "Pessoas",
      icon: <UsersRound />,
      clickHandler: (event: any) => {
        console.log("Pessoas clicado");
      },
    },
    {
      text: "Demonios",
      icon: <Ghost />,
      clickHandler: (event: any) => {
        console.log("Demonios clicado");
      },
    },
    {
      text: "Cavernas",
      icon: <Mountain />,
      clickHandler: (event: any) => {
        console.log("Cavernas clicado");
      },
    },
    {
      text: "Almas",
      icon: <Skull />,
      clickHandler: (event: any) => {
        console.log("Almas clicado");
      },
    },
    {
      text: "Relacionamentos",
      icon: <Network />,
      clickHandler: (event: any) => {
        console.log("Relacionamentos clicado");
      },
    },
  ];

  return {
    buttons,
  };
};
