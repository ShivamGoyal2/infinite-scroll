import { useEffect, useState } from "react";

const useFetchCard = (page) => {
    const [cards, setCards] = useState([]);

    useEffect(()=>{
        const fetchCard = async() => {

            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?limit=8&_page=${page}`);
            const result = await res.json();
            setCards((prev) => [...prev, ...result]);
        }
        fetchCard();
    },[page]);

    return [cards];
}
export default useFetchCard