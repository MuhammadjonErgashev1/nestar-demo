import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";

const PropertyList: NextPage = () =>{
    return (
    <>
        {/* <Stack sx={{background: "#81c784" }}>Header Basic</Stack> */}
        <Container>PROPERTY LIST</Container>
        {/* <Stack sx={{background: "#a1887f" }}>Header</Stack> */}
    </>
    )
}

export  default withLayoutBasic(PropertyList);