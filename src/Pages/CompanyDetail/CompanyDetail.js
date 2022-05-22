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

import { useEffect, useState } from 'react';

export default function CompanyDetail() {
  const { id } = useParams();

  // states
  const [loading, setLoading] = useState(true);
  const [company, setCompany] = useState([]);

  // on mount
  useEffect(() => {
    const url = 'https://watcoop.herokuapp.com/reviews/id/' + id;

    // fetch GET request to url
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => response.text())
      .then(result => { 
        let data = JSON.parse(result);
        setCompany(data);
        console.log(data) 
      })
      .catch(error => console.error('error', error));
    
    setLoading(false);
    console.log(company);

  }, []);

  const { companyName, datePosted, jobTitle, review, salary } = company;

  return (
    <Stack bg={'black'} minH={'90vh'} direction={{ base: 'column', md: 'row' }}>
      {loading ? <div></div> : (
        <Stack>
          <Image></Image>

          <h1
            style={{
              margin: 20,
              color: '#9A851B',
              fontSize: 56,
              fontWeight: 'Bold',
            }}
          >
            {companyName}-{jobTitle}
          </h1>
        </Stack>
      )}
    </Stack>
  );
}
