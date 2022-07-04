import {Text } from "@chakra-ui/react";
import Link from "next/link";

export function Logo(){
    return(
      
      <Link href="/dashboard" target="_blank">
        <a>
          <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
            dashgo
            <Text color="pink.500" as="span" ml="1">
              .
            </Text>
          </Text>
        </a>
      </Link>

    );
}