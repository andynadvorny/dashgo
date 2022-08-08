import { Box, Button, Flex, Heading, Icon, Table, Thead, Tbody, Tr, Th, Td, Checkbox, Text } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Users</Heading>

            <Button 
              as="a" 
              size="sm" 
              fontSize="sm" 
              colorScheme="purple"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Add new
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" w="8">
                  <Checkbox colorScheme="purple" />
                </Th>
                <Th>
                  User
                </Th>
                <Th>
                  Sign up date
                </Th>
                <Th w="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="purple" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Andy Nadvorny</Text>
                    <Text fontSize="sm" color="gray.300">andynadvorny@gmail.com</Text>
                  </Box>
                </Td>
                <Td>
                  March 21, 2021
                </Td>
                <Td>
                <Button 
                  as="a" 
                  size="sm" 
                  fontSize="sm" 
                  colorScheme="dark"
                  leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                >
                  Edit
                </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}