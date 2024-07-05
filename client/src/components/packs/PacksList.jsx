import { useState } from "react";
import { useLoaderData } from "react-router-dom"
import PackCard from "../packCard/packCard";
import PackCardCompleto from "../packCard/packCardCompleto";
import "./packList.css";
import ActionButton from "../actionButton/actionButton";


const className = {
    0: "pack1",
    1: "pack2",
    2: "pack3",
    3: "pack4",
}

const packList = () => {
    const packs = useLoaderData();
    const [selectedPack, setSelectedPack] = useState(packs[0]);

    console.log("packs",packs)

    const handlePackClick = (pack) => {
        setSelectedPack(pack);
    };

    return (
        <div className="packsMain">
            <section className="packs_container">
                {packs.map((pack, index) => (
                    <PackCard key={pack._id} pack={pack} onClick={() => handlePackClick(pack)} cardClassName={className[index]} index={index}/>
                    ))}
            </section>
            <section className="packs_info">
            {selectedPack && <PackCardCompleto pack={selectedPack}  />}
            </section>

        </div>
    )
}

export default packList