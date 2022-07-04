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
addToCollection('The Soft Bulletin', 'The Flaming Lips', 1999);
addToCollection('This is Happening', 'LCD Soundsystem', 2010);
addToCollection('Hurry up, We\'re dreaming.', 'M83.', 2011);
console.table(collection);
