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
  
  import { useParams } from 'react-router-dom'

  
  
  export default function ReviewDetail() {  
    const { id } = useParams();

    // states
    const [loading, setLoading] = useState(true);
    const [review, setReview] = useState([]);
  
    // on mount
    useEffect(() => {
      
      const url = 'https://watcoop.herokuapp.com/reviews/id/' + id;
  
      // fetch GET request to url
      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.text())
        .then(result => {
          let data = JSON.parse(result);
          setReview(data);
          console.log(data);
        })
        .catch(error => console.error('error', error));
  
      setLoading(false);
      console.log(review);
    }, []);
    
    
    return (
      <Stack bg={'black'} minH={'90vh'} direction={['column', 'row']} p="4">
      {loading ? (
        <div></div>
      ) : (
        <SimpleGrid columns={1} width={'100%'} spacingY="10px">
          <Stack direction={['column', 'row']} p="4" boxShadow="lg">
            {/* Company Logo */}
            <Stack
              direction="row"
              height="100%"
              width="20%"
              alignItems="center"
            >
              <Image src="https://thumbs.dreamstime.com/b/apple-logo-19106337.jpg"></Image>
            </Stack>

            {/* Company Name */}
            <Stack direction={'column'}>
              {/* row */}
              <Text
                fontSizxe="sm"
                style={{ textDecoration: 'none' }}
                color={'#9A851B'}
                fontWeight="bold"
                fontSize={'4xl'}
                ml="2"
              >
                {review.companyName} - {review.jobTitle}
              </Text>
              {/* Stats */}

              {/* column of text */}
              <Stack direction={'column'} color={'white'}>
                {/* row */}
                {/* 
                companyName: "Apple"
                datePosted: "5/22/2022"
                extraCompensation: "Lorem Ipsum"
                interviewProcess: "lorem ipsum"
                jobTitle: "Software Engineer"
                oppertunitiesToLearn: 3
                oppertunitiesToNetwork: 3
                review: "Lorem Ipsum"
                salary: 56
                */}

                <Text>Date Posted: {review.datePosted}</Text>
                <Text>Extra Compensation: {review.extraCompensation}</Text>
                <Text>Interview Process: {review.interviewProcess}</Text>
                <Text>Oppertunities To Learn: {review.oppertunitiesToLearn}</Text>
                <Text>Oppertunities To Network: {review.oppertunitiesToNetwork}</Text>
                <Text>Review: {review.review}</Text>
                <Text>Salary: {review.salary}</Text>

            </Stack>
          </Stack>
        </Stack>
        </SimpleGrid>
      )}
    </Stack>
    );
  }
  