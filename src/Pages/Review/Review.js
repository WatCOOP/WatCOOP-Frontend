import { Search2Icon } from '@chakra-ui/icons';

import { useForm } from 'react-hook-form';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  VStack,
  Radio,
  RadioGroup,
  Stack,
  Box,
} from '@chakra-ui/react';

// import react
import React from 'react';


export default function HookForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const [avalibilityOfHelpValue, setavalibilityOfHelpValue] = React.useState('3')
  const [oppertunitiesToLearnValue, setOppertunitiesToLearnValue] = React.useState('3')
  const [oppertunitiesToNetworkValue, setOppertunitiesToNetworkValue] = React.useState('3')


  function onSubmit(values) {
    return new Promise(resolve => {
      setTimeout(() => {
        // make fetch POST request to https://watcoop.herokuapp.com/reviews/ with values in form
        
        // Radio
        
        // Avalibity of help and mentorships 
        values['avalibilityOfHelp'] = avalibilityOfHelpValue;
        values['oppertunitiesToLearn'] = oppertunitiesToLearnValue;
        values['oppertunitiesToNetwork'] = oppertunitiesToNetworkValue;


        fetch('https://watcoop.herokuapp.com/reviews/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        }).then(res => console.log('Success!'));

        resolve();
      }, 3000);
    });
  }

  return (
    <VStack spacing={4} align="stretch" bg={'black'} minH={'90vh'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Review */}
        <FormControl isInvalid={errors.name}>
          <Box style={{ margin: 20, marginTop: '20px' }}>
            <FormLabel htmlFor="review" color="white">
              Write A Review
            </FormLabel>
            <Input
              color="white"
              id="experience"
              placeholder="Write about experience here!"
              {...register('review', {
                required: 'This is required',
              })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </Box>
        </FormControl>

        {/* Company Name */}
        <FormControl isInvalid={errors.name}>
          <Box style={{ margin: 20, marginTop: '20px' }}>
            <FormLabel htmlFor="companyName" color="white">
              Company Name
            </FormLabel>
            <Input
              color="white"
              id="experience"
              placeholder="Company Name"
              {...register('companyName', {
                required: 'This is required',
              })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </Box>
        </FormControl>

        {/* Job Title */}
        <FormControl isInvalid={errors.name}>
          <Box style={{ margin: 20, marginTop: '20px' }}>
            <FormLabel htmlFor="jobTitle" color="white">
              Job Title
            </FormLabel>
            <Input
              color="white"
              id="experience"
              placeholder="Job Title"
              {...register('jobTitle', {
                required: 'This is required',
              })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </Box>
        </FormControl>

        {/* Salary */}
        <FormControl isInvalid={errors.name}>
          <Box style={{ margin: 20, marginTop: '20px' }}>
            <FormLabel htmlFor="salary" color="white">
              Salary
            </FormLabel>
            <Input
              color="white"
              type="number"
              id="experience"
              placeholder="Enter the Salary"
              {...register('salary', {
                required: 'This is required',
              })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </Box>
        </FormControl>

        {/* Extra Compensation/Benefits: */}
        <FormControl isInvalid={errors.name}>
          <Box style={{ margin: 20, marginTop: '20px' }}>
            <FormLabel htmlFor="extraCompensation" color="white">
              Extra Compensation/Benefits:
            </FormLabel>
            <Input
              color="white"
              id="experience"
              placeholder="Extra Compensation/Benefits:"
              {...register('extraCompensation', {
                required: 'This is required',
              })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </Box>
        </FormControl>

        {/* Interview Process */}
        <FormControl isInvalid={errors.name}>
          <Box style={{ margin: 20, marginTop: '20px' }}>
            <FormLabel htmlFor="interviewProcess" color="white">
              Interview Process
            </FormLabel>
            <Input
              color="white"
              id="interviewProcess"
              placeholder="Interview Process"
              {...register('interviewProcess', {
                required: 'This is required',
              })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </Box>
        </FormControl>

        {/* Avalibity of help and mentorship */}
        <FormControl isInvalid={errors.name}>
          <Box style={{ margin: 20, marginTop: '20px' }}>
            <FormLabel color="white">
              Avalibity of help and mentorships
            </FormLabel>
            
            <RadioGroup
              onChange={setavalibilityOfHelpValue} 
              value={avalibilityOfHelpValue}
              
              defaultValue="3"
              color="white"
            >
              <Stack spacing={4} direction="row">
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
                <Radio value="4">4</Radio>
                <Radio value="5">5</Radio>
              </Stack>
            </RadioGroup>

            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </Box>
        </FormControl>

        {/* Opportunities to learn or develop new skills */}
        <FormControl isInvalid={errors.name}>
          <Box style={{ margin: 20, marginTop: '20px' }}>
            <FormLabel color="white">
              Opportunities to learn or develop new skills
            </FormLabel>
            
            <RadioGroup
              onChange={setOppertunitiesToLearnValue} 
              value={oppertunitiesToLearnValue}
              
              defaultValue="3"
              color="white"
            >
              <Stack spacing={4} direction="row">
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
                <Radio value="4">4</Radio>
                <Radio value="5">5</Radio>
              </Stack>
            </RadioGroup>

            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </Box>
        </FormControl>

        {/* Opportunities to make meaningful contributions at work */}
        <FormControl isInvalid={errors.name}>
          <Box style={{ margin: 20, marginTop: '20px' }}>
            <FormLabel color="white">
            Opportunities to make meaningful contributions at work
            </FormLabel>
            
            <RadioGroup
              onChange={setOppertunitiesToLearnValue} 
              value={oppertunitiesToLearnValue}
              
              defaultValue="3"
              color="white"
            >
              <Stack spacing={4} direction="row">
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
                <Radio value="4">4</Radio>
                <Radio value="5">5</Radio>
              </Stack>
            </RadioGroup>

            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </Box>
        </FormControl>

        {/* Opportunities to expand your professional network */}
        <FormControl isInvalid={errors.name}>
          <Box style={{ margin: 20, marginTop: '20px' }}>
            <FormLabel color="white">
            Opportunities to expand your professional network
            </FormLabel>
            
            <RadioGroup
              onChange={setOppertunitiesToNetworkValue} 
              value={oppertunitiesToNetworkValue}
              
              defaultValue="3"
              color="white"
            >
              <Stack spacing={4} direction="row">
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
                <Radio value="4">4</Radio>
                <Radio value="5">5</Radio>
              </Stack>
            </RadioGroup>

            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </Box>
        </FormControl>

        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </VStack>
  );
}


