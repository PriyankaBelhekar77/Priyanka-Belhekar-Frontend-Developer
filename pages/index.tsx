import { useMemo, useState } from "react";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Paginate from "./components/Paginate";
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

const itemsOnEachPage = 6;

export default function Home({ capsules }: HomeProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsOnEachPage;
    const lastPageIndex = firstPageIndex + itemsOnEachPage;
    return capsules.slice(firstPageIndex, lastPageIndex)
  }, [currentPage])

  return (
    <div className="container mx-auto flex justify-center items-center flex-col">
      <Banner />
      <Search />
      <div className="flex flex-wrap gap-10">
        {currentData.map(capsule => <Card key={capsule.capsule_serial} {...capsule} />)}
      </div>
      <Paginate
        itemsOnEachPage={itemsOnEachPage}
        totalCount={capsules.length}
        currentPage={currentPage} 
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  )
}
