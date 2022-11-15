import { Box, Text, Container, Heading, Image, Stack} from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%, -50%)",
    textTransform:"uppercase",
    p:"4",
    size:"4xl",
}

const Home = () => {
  return (
    <Box>
        <MyCarousel/>

        <Container maxW={"container.xl"} minH={"100vh"} p={"16"} >

            <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={"2px solid"} m = {"auto"}>Services</Heading>

            <Stack
            h="full"
            p={'4'}
            alignItems={'center'}
            direction={['column', 'row']}
            >
            <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
            <Text letterSpacing={'widset'} lineHieght={'190%'} p={["4", "16"]} textAlign={"center"} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dicta enim, architecto harum ullam, voluptatum facere id necessitatibus nobis sunt neque labore veniam nam ea, sed dignissimos eveniet culpa distinctio et nesciunt perspiciatis quisquam quo qui! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum inventore excepturi aspernatur sit dolor pariatur assumenda veritatis, praesentium illum! Doloribus excepturi neque debitis, illum optio ex! Magnam qui perferendis ullam odit eum optio culpa?
            </Text>

            </Stack>

        </Container>
    </Box>
  )
};

const MyCarousel = () => (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false} >
        <Box w={"full"} h={"100vh"} >
            <Image src={img1} h={'full'} w={'full'}objectFit={'cover'} />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions} >
                Watch The Future
            </Heading>
        </Box>
        <Box w={"full"} h={"100vh"} >
            <Image src={img2} h={'full'} w={'full'}objectFit={'cover'}/>
            <Heading bgColor={"whiteAlpha.900"} color={"black"} {...headingOptions} >
                Gaming is Future
            </Heading>
        </Box>
        <Box w={"full"} h={"100vh"} >
            <Image src={img3} h={'full'} w={'full'}objectFit={'cover'}/>
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions} >
                Gaming on Console
            </Heading>
        </Box>
        <Box w={"full"} h={"100vh"} >
            <Image src={img4} h={'full'} w={'full'}objectFit={'cover'}/>
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions} >
                Night Life is Cool
            </Heading>
        </Box>
    </Carousel>
);

export default Home;