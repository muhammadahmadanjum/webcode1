const createMusic = () => {
    try {
        const songName = document.querySelector('#song-Name').value;
        const artistName = document.querySelector('#artist-Name').value;
        const osamName = document.querySelector('#osam-Name').value;
        const veryName = document.querySelector('#very-Name').value;
        const kamlName = document.querySelector('#kaml-Name').value;
        const newMusicObject = {
            songName:songName,
            artistName:artistName,
            osamName:osamName,
            veryName:veryName,
            kamlName:kamlName,
        }
        const musicArry = [];
        const getDataFromLocalStorage = JSON.parse(localStorage.getItem('music-data'));
        if (!!getDataFromLocalStorage) {
            console.log('newAraay')
            getDataFromLocalStorage.forEach(element => {
                musicArry.push(element);
            });
        } else {
            console.log('oddArry')
            musicArry.push(newMusicObject);
        }   
        localStorage.getItem('music-data',JSON.stringify(musicArry)) 
    } catch (error) {
        console.log(error.message)
    }
}
const getData = JSON.parse(localStorage.getItem('music-data'))
console.log(getData)