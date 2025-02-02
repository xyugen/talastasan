"use client";

import { useEffect, useState } from "react";
import AccordionRoot from "./_components/accordion";

const Page = () => {
    const [hash, setHash] = useState("");

    useEffect(() => {
        setHash(window.location.hash.replace("#", "")); // Remove the '#' if needed.
    }, []);

    return <AccordionRoot hash={hash} />;
};

export default Page;
