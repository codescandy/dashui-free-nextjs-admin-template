import ServerSideData from './ServerSideData'

async function getServerData() {
    let data = await fetch('https://api.publicapis.org/entries', { cache: 'no-store' })
    data = await data.json();
    return data;
}

export default async function Page() {
    const data = await getServerData();
    return (
        <ServerSideData data={data} />
    )
}