// import use params 
import { useParams } from 'react-router-dom';

import {
    Button,
    Flex,
    Heading,
    Input,
    Link,
    Image,
    Stack,
    Box,
    SimpleGrid,
    Text,
    InputLeftElement,
    InputGroup,
    useBreakpointValue,
  } from '@chakra-ui/react';

export default function CompanyDetail() {
    const { companyName } = useParams()

    // Make a request to 

    
    return (
        <Stack bg={'black'} minH={'90vh'} direction={{ base: 'column', md: 'row' }}>
            <Stack>
                <Image></Image>

                <h1>{companyName}</h1>

            </Stack>
        </Stack>
    );
  }