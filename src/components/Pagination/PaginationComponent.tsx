import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface PaginationComponentProps {
  pageSize: number;
  pageNumber: number;
  totalItems: number;
  onPageChange: (newPage: number) => void;
}
export const PaginationComponent: React.FC<PaginationComponentProps> = ({
  pageSize,
  pageNumber,
  totalItems,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / pageSize);
  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        color="primary"
        page={pageNumber}
        defaultPage={1}
        onChange={(event, newPage) => {
          onPageChange(newPage);
        }}
      />
    </Stack>
  );
};
