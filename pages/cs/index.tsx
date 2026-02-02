import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Stack } from "@mui/material";
import { NextPage } from "next";

const CS:NextPage = () =>{
    const device = useDeviceDetect();

     if(device === "mobile"){
    <Stack>CS MOBILE </Stack>
     }else {
    return <div>CS</div>
     }
}

export  default withLayoutBasic(CS);