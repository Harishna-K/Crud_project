import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Stack
} from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function UserList({ users, onEdit, onDelete }) {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <TableContainer component={Paper}>
      <Table size={isMobile ? "small" : "medium"}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            {!isMobile && <TableCell>Email</TableCell>}
            {!isMobile && <TableCell>Phone</TableCell>}
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                {user.firstName} {user.lastName}
              </TableCell>

              {!isMobile && <TableCell>{user.email}</TableCell>}
              {!isMobile && <TableCell>{user.phone}</TableCell>}

              <TableCell align="center">
                <Stack direction="row" spacing={1} justifyContent="center">
                  <IconButton onClick={() => onEdit(user)} color="primary">
                    <EditIcon />
                  </IconButton>

                  <IconButton onClick={() => onDelete(user.id)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
