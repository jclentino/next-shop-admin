import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import axios from "axios";
import endPoints from "@services/api";
import FormProduct from "@components/FormProduct";

const Edit = () => {
    const router = useRouter();
    const [product, setProducts] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    useEffect(()=> {
        setLoading(true);
        const { id } = router.query
        
        const getProduct = async ()=> {
            const response = await axios.get(endPoints.products.getProduct(id));
            return response.data
        }

        getProduct()
            .then(res => {
                setLoading(false);
                setProducts(res)
            })
            .catch(err => {
                setLoading(false);
                setError(true);
            })
    }, [router?.isReady])

    if (loading) {
        return <h1>Loading ...</h1>
    }   

    if (error){
        return <h1>Not Found: request failed</h1>
    }

    return (
        <FormProduct product={product} />
    );
}

export default Edit;