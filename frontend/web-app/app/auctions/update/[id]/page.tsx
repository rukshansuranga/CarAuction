import { getDetailedViewData } from '@/app/actions/auctionActions';
import Heading from '@/app/components/Heading';
import React from 'react'
import AuctionForm from '../../AuctionForm';

//type Params = Promise<{ params: { id: string } }>


export default async function Update(props: any) {

    const id = await (await props).params.id

    const data = await getDetailedViewData(id);

    return (
        <div className='mx-auto max-w-[75%] shadow-lg p-10 bg-white rounded-lg'>
            <Heading title='Update your auction' subtitle='Please update the details of your car' />
            <AuctionForm auction={data} />
        </div>
    )
}