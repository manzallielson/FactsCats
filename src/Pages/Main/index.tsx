import {
  Flex,
  Text,
  Button,
  ListItem,
  OrderedList,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useToast,
  Box,
  Img,
} from "@chakra-ui/react";
import { useState } from "react";
import { useFacts } from "../../Hooks/Facts/useFacts";
import InputComponent from "../../Components/Input/input";
import LinkedIn from "../../image/LinkedIn-Logo.wine.svg";
import GitHub from "../../image/GitHub-Icon-White-Logo.wine.svg";
export default function Main() {
  const { factsAPI, factAPI } = useFacts();
  const toast = useToast();
  const [catFacts, setCatFacts] = useState<any>();
  const [catFact, setCatFact] = useState<any>();
  const [valueFacts, setValueFacts] = useState<string>();
  const [valueFact, setValueFact] = useState<string>();
  const [limitFact, setLimitFact] = useState<string>();
  const [isSpinner, setIsSpinner] = useState<boolean>(false);

  async function getFacts() {
    setIsSpinner(true);
    const params = {
      max_length: valueFacts,
      limit: limitFact,
    };

    if (valueFacts && limitFact) {
      if (catFacts) {
        try {
          const response: any = await factsAPI(params);

          if (
            catFacts?.to !== response?.data?.to &&
            catFacts?.total !== response?.data?.total
          ) {
            setCatFacts(response?.data);
            toast({
              title: "Success",
              position: "top-right",
              description: "facts uploaded successfully.",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          } else {
            toast({
              title: "Error",
              position: "top-right",
              description: "there are no new facts with this size",
              status: "error",
              duration: 3000,
              isClosable: true,
            });
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const response: any = await factsAPI(params);
          setCatFacts(response?.data);
          toast({
            title: "Success",
            position: "top-right",
            description: "facts uploaded successfully.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        } catch (error) {
          console.log(error);
        }
      }
    }
    setIsSpinner(false);
  }

  async function getFact() {
    setIsSpinner(true);
    let lista = [];
    const params = {
      max_length: valueFact,
    };
    let count = 20;
    if (valueFact) {
      if (catFact) {
        lista?.push(...catFact);
      }

      try {
        const response: any = await factAPI(params);
        var found = lista?.find((element) => element === response?.data?.fact);

        if (found) {
          for (var i = 0; i < count; i++) {
            try {
              const newResponse: any = await factAPI(params);
              found = lista?.find(
                (element) => element === newResponse?.data?.fact
              );
              if (!found) {
                toast({
                  title: "Success",
                  position: "top-right",
                  description: "facts uploaded successfully.",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                });
                lista?.push(newResponse?.data?.fact);
                break;
              }
            } catch (error) {
              console.log(error);
            }
          }
        } else {
          toast({
            title: "Success",
            position: "top-right",
            description: "facts uploaded successfully.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          lista?.push(response?.data?.fact);
        }
        if (!found) {
          setCatFact(lista);
        } else {
          toast({
            title: "Error",
            position: "top-right",
            description: "there are no new facts with this size",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
    setIsSpinner(false);
  }

  return (
    <Flex
      p="0 20px 20px 20px"
      flexDirection="column"
      w="100vw"
      minW="360px"
      maxW="100vw"
      h={`calc(100vh - 80px)`}
      maxH={`calc(100vh - 80px)`}
      backgroundColor="black"
    >
      <Flex
        border="2px solid black"
        w="100%"
        h="100%"
        borderRadius="16px"
        p="10px"
        backgroundColor="white"
        overflowY="hidden"
      >
        <Tabs isFitted w="100%" colorScheme="green" variant="enclosed">
          <TabList>
            <Tab _selected={{ color: "white", bg: "green" }}>List One</Tab>
            <Tab _selected={{ color: "white", bg: "green" }}>List Two</Tab>
          </TabList>

          <TabPanels>
            <TabPanel w="100%">
              <Flex
                flexDirection={{ base: "column", md: "row" }}
                p="5px 0px"
                m="10px 0"
                alignContent="center"
                alignItems="center"
                gap="5px"
                justifyContent="space-between"
                w="100%"
              >
                <InputComponent
                  textLabel="Fact Size :"
                  labelWidth="120px"
                  fontSize="1.4rem"
                  min={20}
                  max={300}
                  maxLength={3}
                  placeholder="write here the size"
                  borderColor="black"
                  textAlign="center"
                  variant="flushed"
                  onChange={(e) => setValueFact(e.target.value)}
                />

                <Button
                  w="300px"
                  onClick={() => getFact()}
                  isLoading={isSpinner === false ? false : true}
                  loadingText="Loading"
                  spinnerPlacement="start"
                  boxShadow={{
                    base: "black 2px 2px 2px, green 3px 3px 3px, blue 1px 3px 6px",
                    md: "black 2px 2px 2px",
                  }}
                  _hover={{ opacity: "0.6" }}
                  backgroundColor="green"
                  color="white"
                >
                  Search
                </Button>
              </Flex>
              <Box mt="30px">
                <Text as="strong" m="10px 0" fontSize="1.5rem">
                  Facts:
                </Text>
              </Box>
              <OrderedList
                styleType={{ base: "none", md: "list" }}
                p={{ base: "0 5px", md: "0 25px" }}
                maxH={{ base: "40vh", md: "75vh" }}
                overflowY="scroll"
              >
                {catFact?.map((item: any, index: any) => {
                  return (
                    <ListItem
                      boxShadow={{
                        base: "green 1px 1px 1px, blue 3px 3px 3px, green 4px 4px 6px",
                        md: "none",
                      }}
                      border={{ base: "1px solid black", md: "none" }}
                      borderRadius={{ base: "6px", md: "none" }}
                      fontSize={{ base: "1rem", md: "1.5rem" }}
                      textAlign={{ base: "center", md: "start" }}
                      p={{ base: "20px 10px", md: "0" }}
                      m={{ base: "20px 10px 10px 0", md: "20px 10px" }}
                      key={index}
                    >
                      <Box
                        display={{ base: "block", md: "none" }}
                        m="0 0px 10px"
                        borderRadius="50px"
                        border="1px solid black"
                        backgroundColor="green"
                        color="white"
                        w="25px"
                      >
                        {index + 1}
                      </Box>

                      {item}
                    </ListItem>
                  );
                })}
              </OrderedList>
            </TabPanel>

            <TabPanel w="100%">
              <Flex flexDirection="column" w="100%">
                <Flex
                  flexDirection={{ base: "column", md: "row" }}
                  as="form"
                  p="5px 0px"
                  m="0"
                  alignContent="center"
                  alignItems="center"
                  justifyContent="space-around"
                  w="100%"
                >
                  <InputComponent
                    textLabel="Fact Size :"
                    labelWidth="120px"
                    fontSize="1.4rem"
                    min={20}
                    max={300}
                    maxLength={3}
                    placeholder="write here the size"
                    borderColor="black"
                    textAlign="center"
                    w="100%"
                    variant="flushed"
                    onChange={(e) => setValueFacts(e.target.value)}
                  />

                  <InputComponent
                    textLabel="Max number of facts :"
                    labelWidth="250px"
                    fontSize="1.4rem"
                    min={20}
                    max={300}
                    maxLength={3}
                    placeholder="write here the size"
                    borderColor="black"
                    textAlign="center"
                    minW="250px"
                    variant="flushed"
                    onChange={(e) => setLimitFact(e.target.value)}
                  />
                </Flex>
                <Button
                  isLoading={isSpinner === false ? false : true}
                  loadingText="Loading"
                  spinnerPlacement="start"
                  w="100%"
                  onClick={() => getFacts()}
                  boxShadow={{
                    base: "black 2px 2px 2px, green 3px 3px 3px, blue 1px 3px 6px",
                    md: "black 2px 2px 2px",
                  }}
                  _hover={{ opacity: "0.6" }}
                  backgroundColor="green"
                  color="white"
                >
                  Search
                </Button>
              </Flex>
              <Box mt="30px">
                <Text as="strong" fontSize="1.5rem">
                  Facts:
                </Text>
              </Box>
              <OrderedList
                p=" 0 35px"
                h="70vh"
                maxH={{ base: "35vh", md: "55vh" }}
                overflowY="scroll"
                w="100%"
                styleType={{ base: "none", md: "list" }}
              >
                {catFacts?.data?.map((item: any, index: string) => {
                  return (
                    <ListItem
                      boxShadow={{
                        base: "green 1px 1px 1px, blue 3px 3px 3px, green 4px 4px 6px",
                        md: "none",
                      }}
                      border={{ base: "1px solid black", md: "none" }}
                      borderRadius={{ base: "6px", md: "none" }}
                      fontSize={{ base: "1rem", md: "1.5rem" }}
                      textAlign={{ base: "center", md: "start" }}
                      p={{ base: "20px 10px", md: "0" }}
                      m={{ base: "20px 10px 10px 0", md: "20px 10px" }}
                      key={index}
                    >
                      <Flex
                        display={{ base: "block", md: "none" }}
                        m="0 10px"
                        p="7px 0"
                        borderRadius="50px"
                        border="1px solid black"
                        backgroundColor="green"
                        color="white"
                        w="40px"
                        alignContent="center"
                        alignItems="center"
                        justifyContent="center"
                      >
                        {index + 1}
                      </Flex>

                      {item?.fact}
                    </ListItem>
                  );
                })}
              </OrderedList>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
      <Flex
        justifyContent="space-between"
        alignContent="center"
        alignItems="center"
        gap="10px"
      >
        <Text minW="70px" w="140px" color="white" as="strong">
          Desenvolvido por Elson Manzalli
        </Text>
        <Flex alignContent="center" alignItems="center" gap="15px">
          <Img
            _hover={{ cursor: "pointer" }}
            onClick={() =>
              window.open("https://github.com/manzallielson", "_blank")
            }
            w="40px"
            h="40px"
            src={GitHub}
          />

          <Img
            _hover={{ cursor: "pointer" }}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/elson-manzalli-6b44237a/",
                "_blank"
              )
            }
            w="100px"
            minW="100px"
            h="60px"
            src={LinkedIn}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
