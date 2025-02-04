import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';

const BaseLayout = async ({ children, rightPanel = true }: { children: ReactNode, rightPanel?: Boolean }) => {
    const {isAuthenticated} = getKindeServerSession()

    if(!(await isAuthenticated())){
        return redirect("/")
    }
    return (
        <div className='flex max-w-2xl lg:max-w-7xl mx-auto relative'>
            <Sidebar/>
            <div className='w-full lg:w-3/5 flex flex-col border-r'>{children}</div>
            {rightPanel && "<RightPanel/>"}
        </div>
    );
};

export default BaseLayout;