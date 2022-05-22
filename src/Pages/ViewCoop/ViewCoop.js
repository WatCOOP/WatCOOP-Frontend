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

// import icons from chakra ui
import { Search2Icon } from '@chakra-ui/icons';

// import use effect
import React, { useState, useEffect } from 'react';

import { useForm } from 'react-hook-form';


export default function ViewCoop() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const [searchValue, setSearchValue] = useState(null);
  const [searchResults, setSearchResults] = useState([]);


  function onSubmit(values) {
        // make fetch POST request to https://watcoop.herokuapp.com/reviews/ with values in form

    fetch(`https://watcoop.herokuapp.com/reviews/${searchValue}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => response.text())
      .then(result => { 
        let data = JSON.parse(result);
        console.log(data);
        setSearchResults(data); 
      })
      .catch(error => console.error('error', error));
      
    console.log(searchResults);
  }

  // useEffect(() => {
  //   // fetch GET request to https://watcoop.herokuapp.com/reviews/searchValue
  //   var requestOptions = {
  //     method: 'GET',
  //     redirect: 'follow'
  //   };
    
  //   fetch("https://watcoop.herokuapp.com/reviews/Scha", requestOptions)
  //     .then(response => response.text())
  //     .then(result => setSearchResults(result))
  //     .catch(error => console.log('error', error));

  // });
  


  return (
    <Stack bg={'black'} minH={'90vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} justify={'center'}>
        <Stack spacing={6} w={'full'}>
          {/* Search bar */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputGroup>
              <Input
                type="text"
                width={'55%'}
                bg={'white'}
                placeholder="Search Companies"
                onChange={(e) => setSearchValue(e.target.value)}
                mr={3}
              />
              <InputLeftElement
                pointerEvents="none"
                children={<Search2Icon color="#9A851B" />}
              />

              <Button
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'#9A851B'}
                borderColor={'#9A851B'}
                isLoading={isSubmitting}
                type="submit"
                _hover={{
                  bg: '#dbcd8c',
                  color: 'white',
                }}
              >
                Submit
              </Button>
            </InputGroup>
          </form>
          
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <SimpleGrid columns={1} width={'100%'} spacingY="10px">
              {/* map searchResults */}
              {searchResults.map((result, index) => (
                <Stack
                  direction={['column', 'row']}
                  p="4"
                  boxShadow="lg"
                  bg={'white'}
                  borderRadius="sm"
                >
                  <Stack direction="row" height="100%" alignItems="center">
                    <Image src={result.logo} width="10" alt="Apple" />
                  </Stack>

                  <Stack direction={'column'}>
                    {/* row */}
                    <Link
                      fontSizxe="sm"
                      style={{ textDecoration: 'none' }}
                      href={`/company/${result.companyName}-${result.jobTitle}`}
                      color={'#9A851B'}
                      fontWeight="bold"
                      fontSize={'xl'}
                      ml="2"
                    >
                      {result.company} - {result.jobTitle}
                    </Link>

                    <Stack direction="row" alignItems="center" ml={5}>
                      <Text fontSize="sm">{result.reviews} Reviews</Text>
                      <Text fontSize="sm">{result.reviews} Reviews</Text>
                      <Text fontSize="sm">{result.reviews} Reviews</Text>
                    </Stack>
                  </Stack>
                </Stack>
              ))}
            </SimpleGrid>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
