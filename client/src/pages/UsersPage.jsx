import { useEffect, useState } from "react";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import { getUsers, createUser, updateUser, deleteUser } from "../api/userApi";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const loadUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSubmit = async (data) => {
    if (editingUser) {
      await updateUser(editingUser.id, data);
      setEditingUser(null);
    } else {
      await createUser(data);
    }
    loadUsers();
  };

  return (
    <>
      <UserForm onSubmit={handleSubmit} initialData={editingUser} />
      <UserList
        users={users}
        onEdit={setEditingUser}
        onDelete={async (id) => {
          await deleteUser(id);
          loadUsers();
        }}
      />
    </>
  );
}
