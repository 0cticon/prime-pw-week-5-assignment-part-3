console.log('***** Music Collection *****')
const collection = [];

function addToCollection(title, artist, yearPublished) {
    const newAlbum = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    };
    collection.push(newAlbum);
    return newAlbum;
}
addToCollection('Portrait of a Legend', 'Sam Cooke', 2003);
addToCollection('Bitte Orca', 'Dirty Projectors', 2009);
addToCollection('In Rainbows', 'Radiohead', 2007);
addToCollection()
addToCollection()
addToCollection()
console.table(collection);
