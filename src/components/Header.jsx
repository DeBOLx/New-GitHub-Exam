import { Box, Text, Wrap, WrapItem, Avatar } from '@chakra-ui/react'
// import axios from 'axios'
import { Button } from '@chakra-ui/react'
import './Header.css'
import { SocialIcon } from 'react-social-icons'


function Header() {
    return (
        <Box h='250px'
        className='Header'> 
            <Wrap>
                <WrapItem>
                    <Avatar size='2xl'name='Olumide Lawal' src='https://avatars.githubusercontent.com/u/141836430?v=4' />{' '}
                </WrapItem>
            </Wrap>
            <Text as='b'>Olumide Lawal</Text>
                <Text>Frontend Developer | React | Vue | Writer</Text>
            <Button colorScheme='pink' variant='solid' width="33ch">
                 <Text color='white'>Edit Profile</Text>
            </Button>
            <Box pt='30px' ml='20px' spacing='10px'>
                <SocialIcon url="http://linktr.ee/debolx" target='_blank' />
                <SocialIcon url="https://linkedin.com/debolx" target='_blank'/>
                <SocialIcon url="https://x.com/debolx" target='_blank' />
                <SocialIcon url="https://facebook.com/olumidebenoni" target='_blank' />
                <SocialIcon url="https://instagram.com/debolx" target='_blank' />
            </Box>
        </Box>



    )

}

export default Header;