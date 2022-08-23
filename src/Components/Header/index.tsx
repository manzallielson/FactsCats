import {
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Img,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Logo from "../../image/61939ca872d3738959e4243f_t10_website.svg";

export default function Header() {
  return (
    <Flex w="100%" backgroundColor="black" minW="360px">
      <Flex p="0 0 0 25px">
        <Img
          _hover={{ cursor: "pointer" }}
          src={Logo}
          onClick={() => window.open("https://www.t10.digital/", "_blank")}
        />
      </Flex>
      <Flex
        display={{ base: "none", md: "flex" }}
        w="100%"
        h="80px"
        alignItems="center"
        alignContent="center"
      >
        <Flex w="100%" justifyContent="end" p="0 25px 0">
          <Button
            onClick={() =>
              window.open(
                "https://github.com/manzallielson/FactsCats/blob/master/README.md",
                "_blank"
              )
            }
            w="300px"
            boxShadow={{
              base: "black 2px 2px 2px, green 3px 3px 3px, blue 1px 3px 6px",
              md: "black 2px 2px 2px",
            }}
            opacity="0.8"
            _hover={{ opacity: "1" }}
            backgroundColor="green"
            color="white"
          >
            Documentation
          </Button>
        </Flex>
      </Flex>
      <Flex
        display={{ base: "flex", md: "none" }}
        justifyContent="end"
        alignItems="center"
        alignContent="center"
        w="100%"
        p="0 20px"
        h="80px"
      >
        <Menu>
          <MenuButton
            as={Button}
            _hover={{ opacity: "0.6" }}
            _active={{ backgroundColor: "green" }}
            backgroundColor="green"
            color="white"
            leftIcon={<HamburgerIcon />}
          ></MenuButton>
          <MenuList backgroundColor="green" _hover={{ opacity: "0.4" }}>
            <MenuItem
              onClick={() =>
                window.open(
                  "https://github.com/manzallielson/FactsCats/blob/master/README.md",
                  "_blank"
                )
              }
            >
              Documentation
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}
