import {
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function SplitScreen() {
  return (
    <Stack
      bg={'black'}
      pt={10}
      minH={'90vh'}
      direction={{ base: 'column', md: 'row' }}
    >
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              color={'white'}
              position={'relative'}
              fontSize={'5xl'}
              _after={{
                content: "''",
                width: 'full',
                // height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'white',
                zIndex: -1,
              }}
            >
              WATCOOP
            </Text>
            <br />{' '}
            {/* <Text color={'blue.400'} as={'span'} >
              WATCOOP
            </Text>{' '} */}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'white'}>
            Review and find reviws of companies hiring on WaterlooWorks!
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Link href={'/create-review'} style={{ textDecoration: 'none' }}>
              <Button
                rounded={'full'}
                bg={'#9A851B'}
                color={'white'}
                _hover={{
                  bg: '#dbcd8c',
                }}
              >
                Write a Review
              </Button>
            </Link>

            <Link href={'/reviews'} style={{ textDecoration: 'none' }}>
              <Button rounded={'full'}>
                View Reviews
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex
        flex={1}
        style={{
          width: '600px',
          height: '600px',
        }}
      >
        <Image
          alt={'University of Waterloo Logo'}
          objectFit={'cover'}
          src={
            'https://upload.wikimedia.org/wikipedia/en/6/6e/University_of_Waterloo_seal.svg'
          }
        />
      </Flex>
    </Stack>
  );
}
