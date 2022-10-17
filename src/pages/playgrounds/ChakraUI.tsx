import { Text, Stack, Skeleton, Wrap, WrapItem, Avatar, Center, Box } from '@chakra-ui/react'
import React from 'react'

export default function ChakraUI() {
    return (
        <div>
            <Text
                bgGradient='linear(to-l, #7928CA, #FF0080)'
                bgClip='text'
                fontSize='6xl'
                fontWeight='extrabold'
            >
                Welcome to Chakra UI Playground!
            </Text>
            <Wrap>
                <WrapItem>
                    <Avatar name='Dan Abrahmov' src='/assets/images/chakra-playground/Sherif.jpg' />
                </WrapItem>
                <Center>
                    <Box w='100%' bgColor='aqua'>
                    Welcome to Chakra UI Playground!
                    </Box>
                </Center>
            </Wrap>
        </div>
    )
}
