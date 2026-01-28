import withLayoutMain from "@/libs/components/layout/LayoutHome";
import styles from "@/styles/Home.module.css";
import { Box, Container, Stack } from "@mui/material";
import { brown, green } from "@mui/material/colors";
import { NextPage } from "next";


const Home: NextPage=() => {
  return (
    <>
     <Container>
        <Stack flexDirection={"column"}>
          <Stack>
            <Stack className="container">Popular properties</Stack>
          </Stack>
          <Stack>
            <Stack className="container">Top Agents</Stack>
          </Stack>
          <Stack>
            <Stack className="container">Top Properties</Stack>
          </Stack>
        </Stack>
       </Container> 
    </>
  );
}
export default withLayoutMain(Home)