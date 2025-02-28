import { useEffect, useState } from "react";
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

const packList = ({ defaultPack=0 }) => {
    const packs = useLoaderData();
    const [selectedPack, setSelectedPack] = useState(packs[defaultPack ]);
    const [selectedIndex, setSelectedIndex] = useState(defaultPack);

    useEffect(() => {
        console.log("defaultPack", defaultPack);
        setSelectedPack(packs[defaultPack ]);
        setSelectedIndex(defaultPack);
    }, [defaultPack, packs]);

    const handlePackClick = (pack, newIndex) => {
        setSelectedPack(pack);
        setSelectedIndex(newIndex)
    };

    return (
        <div className="packsMain">
            <section className="packs_container">
                {packs.map((pack, index) => (
                    <PackCard key={pack._id} pack={pack} id= {selectedPack} onClick={() => handlePackClick(pack, index)} cardClassName={className[index]} index={index} />
                    ))}
            </section>
            <section className="packs_info">
            {selectedPack && <PackCardCompleto pack={selectedPack} key={packs._id} index={selectedIndex} />}
            </section>

        </div>
    )
}

export default packList