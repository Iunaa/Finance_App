import "@/styles/globals.css";
import Container from "@/components/organisms/Container/Container";
import Header from "@/components/organisms/Header/Header";

export default function App({ Component, pageProps }) {
  
  return (
    <Container>
      <Header/>
      <Component {...pageProps} />
    </Container>
  );
}
