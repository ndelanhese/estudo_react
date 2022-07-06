import {Text } from "@chakra-ui/react";
import Link from "next/link";

interface LogoProps {
  showProfileData: boolean;
}

export function Logo({showProfileData = true}: LogoProps){
    return(
      
      <Link href="/dashboard" passHref>
        <a>
          <Text fontSize={["2xl","3xl"]} fontWeight="bold" letterSpacing="tight" w={["auto", "64"]}>
          <Text color="red.500" as="span" ml="1">
              {showProfileData ? ('mma') : ('M')}
            </Text>
            <Text color="white" as="span" ml="1">
              {" | "}
            </Text>
            <Text color="black" as="span" ml="1">
            {showProfileData ? 'mens' : 'M'}
            </Text>
          </Text>
        </a>
      </Link>

    );
}