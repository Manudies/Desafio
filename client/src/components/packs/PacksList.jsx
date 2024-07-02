import { useLoaderData } from "react-router-dom"
import PackCard from "../packCard/packCard";
import "./packList.css";

const packList = () => {
    const packs = useLoaderData();
    console.log("packs",packs)
    return (
        <div>
            <h1>{packs.packName}</h1>
            <section className="packs_container">
                {packs.map((pack) => (
                    <PackCard key={pack._id} pack={pack} />
                ))}
            </section>

        </div>
    )
}

export default packList