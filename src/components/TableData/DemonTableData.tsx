import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { DemonAnalytics } from "../../Models/DemonAnalytics";

interface DemonTableDataProps {
  Data: DemonAnalytics | undefined;
}

export const DemonTableData: React.FC<DemonTableDataProps> = ({ Data }) => {
  return (
    <>
      <TableContainer component={Paper} variant="outlined">
        <Table size="small" aria-label="demon details">
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Alma que mais torturou
              </TableCell>
              <TableCell>{Data?.mostTorturedSoulName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Categoria
              </TableCell>
              <TableCell>{Data?.category}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Quantidade de almas relacionada
              </TableCell>
              <TableCell>{Data?.soulCount}</TableCell>
            </TableRow>{" "}
            <TableRow>
              <TableCell component="th" scope="row">
                Contagem de perseguições
              </TableCell>
              <TableCell>{Data?.persecutionCount}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
