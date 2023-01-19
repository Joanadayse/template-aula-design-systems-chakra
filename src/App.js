import axios from "axios";
import { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Cards from "./componentes/Cards";
import styled from "styled-components";

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    } catch (error) {
      console.log("Erro ao buscar usuários");
      console.log(error);
    }
  };

  const getCards = users.map((user) => {
    console.log(users);
    return <Cards name={user.name} email={user.email} />;
  });

  return (
    <>
      <ChakraProvider>
        <Main>{getCards}</Main>
      </ChakraProvider>
    </>
  );
}
