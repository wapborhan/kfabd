import React from 'react';
import dataProject from '../assets/fake-data/dataProject';
import PageTitle from '../components/pagetitle';
import Project from '../features/project/nftitem';


function NftItem(props) {
    return (
        <div className='page-nft'>
            <PageTitle title='NFT ITEM’S' />

            <Project data={dataProject} />
        </div>
    );
}

export default NftItem;