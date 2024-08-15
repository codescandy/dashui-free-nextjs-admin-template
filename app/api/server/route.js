
export const getServerData = (req, res) => {
    res.status(200).json({ text: 'Hello' });
    // axios.get(`https://api.publicapis.org/entries`, apiHeaders())
    //     .then((response) => {
    //         callBack(response.data);
    //     }).catch((error) => {
    //         console.log(error);
    //     });
}