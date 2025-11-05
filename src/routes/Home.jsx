import News from "../components/News";
import Tagline from "../components/Tagline";
import Table from "../components/Table";
import Links from "../components/Links";
import Selection from "../components/selection";


const Home = () => {
    return (
        <>
            <div className="px-5 py-3">
                <News />
                <Tagline />
                <Links />
                <Table />
                <Selection />
            </div>

        </>

    )
}

export default Home