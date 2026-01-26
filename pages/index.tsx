import withLayoutMain from "@/libs/components/layout/LayoutHome";
import styles from "@/styles/Home.module.css";
import { Box, Container, Stack } from "@mui/material";
import { brown, green } from "@mui/material/colors";
import { NextPage } from "next";


const Home: NextPage=() => {
  return (
    <>
       {/* <Stack sx={{background: "#81c784" }}>Header</Stack> */}
       <Container>
        <Stack flexDirection={"column"}>
          <Box>Popular properties</Box>
          <Box>Top Agents</Box>
          <Box>Top Properties</Box>
          <Box>Events</Box>
        </Stack>
       </Container>
       {/* <Stack sx={{background: "#a1887f" }}>Header</Stack> */}
    </>
  );
}
export default withLayoutMain(Home)