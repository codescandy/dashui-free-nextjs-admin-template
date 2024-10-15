import ServerSideData from './ServerSideData'

async function getServerData() {
    let data = await fetch('https://dummyjson.com/products/1', { cache: 'no-store' })
    data = await data.json();
    return data;
}

export default async function Page() {
    const data = await getServerData();
    return (
        <ServerSideData data={data} />
    )
}