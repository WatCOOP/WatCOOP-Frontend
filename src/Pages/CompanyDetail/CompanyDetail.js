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
  // spplit companyRole into companyName and companyId by -

  // states
  const [loading, setLoading] = useState(true);
  const [company, setCompany] = useState([]);

  const [averageOpportunitiesToLearn, setAverageOpportunitiesToLearn] = useState([null]);
  const [averageOpportunitiesToNetwork, setAverageOpportunitiesToNetwork] = useState(null);
  const [averageSalary, setAverageSalary] = useState(null);
  const [lengthOfReviews, setLengthOfReviews] = useState(null);
  const [reviews, setReviews] = useState([]);

  const companyName = id.split('--')[0];
  const companyRole = id.split('--')[1];

  console.log(companyRole);

  // on mount
  useEffect(() => {
    var axios = require('axios');
    var data = JSON.stringify({
      company: companyName,
      role: companyRole,
    });

    var config = {
      method: 'get',
      url: 'https://watcoop.herokuapp.com/reviews/companyRoleDetails/',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        //   let data = JSON.parse(result);
        setCompany(response.data);
        console.log(response.data);


        setAverageOpportunitiesToLearn(response.data.averageOpportunitiesToLearn)
        setAverageOpportunitiesToNetwork(response.data.averageOpportunitiesToNetwork)
        setAverageSalary(response.data.averageSalary)
        setLengthOfReviews(response.data.lengthOfReviews)
        setReviews(response.data.reviews)
      })
      .catch(function (error) {
        console.log(error);
    });


    console.log(reviews);
    
    setLoading(false);
}, []);

//   const {
//     averageOpportunitiesToLearn,
//     averageOpportunitiesToNetwork,
//     averageSalary,
//     lengthOfReviews,
//     reviews,
//   } = company;



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
                {companyName} - {companyRole}
              </Text>
              {/* Stats */}
              <Stack direction={'column'} width={'100%'} color="white">
                <Stack direction="row" alignItems="center" ml={5} width="100%">
                  <Text fontSize="sm">
                    Length of Reviews: {lengthOfReviews}
                  </Text>
                  <Text fontSize="sm">
                    Average Oppertunities To Learn:{' '}
                    {averageOpportunitiesToLearn}
                  </Text>
                  <Text fontSize="sm">
                    Average Oppertunities To Network:{' '}
                    {averageOpportunitiesToNetwork}
                  </Text>
                  <Text fontSize="sm">Average Salary: {averageSalary}</Text>
                </Stack>
              </Stack>
            </Stack>
          </Stack>

          {/* Avaliablity of help */}
          <Stack direction={'column'} color={'white'}>
            <Stack direction="row" alignItems="center" ml={5}>
              <Text fontSize="sm">Length of Reviews: {lengthOfReviews}</Text>
              <Text fontSize="sm">
                Average Oppertunities To Learn: {averageOpportunitiesToLearn}
              </Text>
              <Text fontSize="sm">
                Average Oppertunities To Network:{' '}
                {averageOpportunitiesToNetwork}
              </Text>
            </Stack>
          </Stack>

          {/* Reviews */}
          <Text color={'#9A851B'} fontSize="3xl" fontWeight={700}>
            Past Reviews
          </Text>
          {/* Cards from viewCoop*/}
          {reviews.map((review, index) => (
            <Stack
              direction={['column', 'row']}
              p="4"
              boxShadow="lg"
              bg={'white'}
              borderRadius="sm"
            >
              <Stack direction={'column'}>
                {/* row */}
                <Link
                  fontSizxe="sm"
                  style={{ textDecoration: 'none' }}
                  href={`http://localhost:3000/review/${id}`}
                  color={'#9A851B'}
                  fontWeight="bold"
                  fontSize={'xl'}
                  ml="2"
                >
                  {review.companyName} - {review.jobTitle}
                </Link>

                <Stack direction="row" alignItems="center" ml={5}>
                  <Text fontSize="sm">Reviews</Text>
                </Stack>
              </Stack>
            </Stack>
          ))}

        </SimpleGrid>
      )}
    </Stack>
  );
}
