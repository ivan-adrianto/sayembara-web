import HomeContainer from "../components/containers/HomeContainer";
import Header from "../layouts/Header";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Header />
      <HomeContainer />
    </MainLayout>
  );
}
