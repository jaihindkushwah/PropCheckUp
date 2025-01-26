import Header from "../../../components/Header";
import IssueTrackingTable from "./Table";

function Home() {
  return (
    <div className="flex items-center flex-col justify-center w-screen h-screen dark:bg-slate-600">
      <Header />
      <div className="container mx-auto max-w-7xl w-full">
        <IssueTrackingTable />
      </div>
    </div>
  );
}

export default Home;
