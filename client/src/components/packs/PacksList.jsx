import { useState } from "react";
import { useLoaderData } from "react-router-dom"
import PackCard from "../packCard/packCard";
import PackCardCompleto from "../packCard/packCardCompleto";
import "./packList.css";

const packList = () => {
    const packs = useLoaderData();
    const [selectedPack, setSelectedPack] = useState(null);

    console.log("packs",packs)

    const handlePackClick = (pack) => {
        setSelectedPack(pack);
    };

    return (
        <div className="packsMain">
            <h1>{packs.packName}</h1>
            <section className="packs_container">
                {packs.map((pack) => (
                    <PackCard key={pack._id} pack={pack} onClick={() => handlePackClick(pack)} />
                    ))}
            </section>
            <section className="packs_info">
            {selectedPack && <PackCardCompleto pack={selectedPack}  />}
            </section>

        </div>
    )
}

export default packList