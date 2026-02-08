import { Container, Typography } from "@mui/material";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        User Management (CRUD)
      </Typography>

      <UsersPage />
    </Container>
  );
}

export default App;
