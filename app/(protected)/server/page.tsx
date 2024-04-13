
import { UserInfo } from '@/components/use-info';
import { currentUser } from '@/lib/auth';
import React from 'react'

const ServerPage = async () => {
    const user = await currentUser();

    return (
        <UserInfo 
            label="💻 Server component"
            user={user}
        />
    );
}

export default ServerPage;