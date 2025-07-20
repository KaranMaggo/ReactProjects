import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import axios from 'axios'

const Proute = () => {
    const [isAuthenticate, setAuthenticate] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkToken = async () => {
            try {
                const { data } = await axios.get("http://localhost:4000/checktoken", {
                    withCredentials: true
                });
                console.log(data);
                if (data.success) {
                    setAuthenticate(true);
                }
                setLoading(false);
            }
            catch (e) {
                console.log(e);
                setLoading(false);
            }
        };
        checkToken();
    }, []);

    if (loading) {
        return (
            <div>
                Loading
            </div>
        );
    }

    return (
        <>
            {isAuthenticate ? <Outlet /> : <Navigate to={"/login"} />}
        </>
    );
}

export default Proute