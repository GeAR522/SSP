import * as React from 'react';
import { User } from "../models/models";


export default function UserDetails() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [user, setUser] = React.useState(null);


    React.useEffect(() => {
        fetchData();
    },[]);

    async function fetchData() {
        const { data } = await User.find(1);
        setUser(data);
        setIsLoading(false);
    }

    if (isLoading) return <div>Loading!</div>


    return(
        <>
        <div>
            <p> User Name: {user.email} </p>
        </div>
        </>
    )
}


