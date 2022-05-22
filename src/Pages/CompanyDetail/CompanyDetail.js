// import use params 
import { useParams } from 'react-router-dom';
import {
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
    const { id } = useParams()

    const url = "https://watcoop.herokuapp.com/reviews/id/" + id
    const response = ""
    // fetch GET request to url
    fetch(url)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


    
    return (
        <Stack bg={'black'} minH={'90vh'} direction={{ base: 'column', md: 'row' }}>
            <Stack>
                <Image></Image>

                <h1
                style = {{
                    margin: 20,
                    color: '#9A851B',
                    fontSize: 56,
                    fontWeight: 'Bold'
                }}
                >{response}</h1>

            </Stack>
        </Stack>
    );
  }