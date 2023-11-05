import { ChakraProvider, theme } from "@chakra-ui/react";
import Layout from '../components/layouts/main'
import '../public/globals.css'
const Website = ({Component,pageProps,router}) => {
   
    return (
        <ChakraProvider theme={theme}>
        <Layout router={router}>
        <Component {...pageProps} key={router.route} />
        </Layout>
        </ChakraProvider>
    )
}

export default Website