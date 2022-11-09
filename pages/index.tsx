import Banner from "./components/Banner";
import Card from "./components/Card";
import Search from "./components/Search";

export interface Capsule {
  capsule_serial: string;
  capsule_id: string;
  status: string;
  original_launch: string;
  original_launch_unix: number;
  missions: Array<Missions>;
  landings: number;
  type: string;
  details: string;
  reuse_count: number;
}

export type Capsules = Array<Capsule>;

interface Missions {
  name: string;
  flight: number;
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("https://api.spacexdata.com/v3/capsules");
  const data: Capsules = await res.json()

  // Pass data to the page via props
  return { props: { capsules: data } }
}

interface HomeProps {
  capsules: Capsules
}

export default function Home({ capsules }: HomeProps) {
  return (
    <div className="container mx-auto flex justify-center items-center flex-col">
      <Banner />
      <Search />
      <div className="flex flex-wrap gap-10">
        {capsules.map(capsule => <Card key={capsule.capsule_serial} {...capsule} />)}
      </div>
    </div>
  )
}
