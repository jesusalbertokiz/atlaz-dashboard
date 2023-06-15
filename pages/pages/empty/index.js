import axios from "axios";
import React, {useState} from 'react';
import Link from 'next/link';

const EmptyPage = () => {
    const getProfile = async () =>{
        const profile = await axios.get("/api/profile")
        const {data } = profile
        setProfile(data.id)
    }

    const [profile, setProfile] = useState()



    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h1>{JSON.stringify(profile, null)}</h1>
                    <button onClick={()=>getProfile()}>
                    get profile
                    </button>               
                </div>
            </div>
        </div>
    );
};

export default EmptyPage;
