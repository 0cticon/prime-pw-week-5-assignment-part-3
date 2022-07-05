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
console.log(addToCollection('Portrait of a Legend', 'Sam Cooke', 2003));
console.log(addToCollection('Bitte Orca', 'Dirty Projectors', 2009));
console.log(addToCollection('In Rainbows', 'Radiohead', 2007));
console.log(addToCollection('The Soft Bulletin', 'The Flaming Lips', 1999));
console.log(addToCollection('This is Happening', 'LCD Soundsystem', 2010));
console.log(addToCollection('Hurry up, We\'re dreaming.', 'M83.', 2011));
console.log(addToCollection('Yoshimi Battles the Pink Robots', 'The Flaming Lips', 2002));

console.table(collection);

// console.log(collection[1].artist);
function showCollection(collectionInput) {
    for (i = 0; i < collectionInput.length; i++) {
        if (collectionInput[i]) {
            console.log(`${collectionInput[i].title} by ${collectionInput[i].artist} published in ${collectionInput[i].yearPublished}`);
        }

    } return collection;

}
showCollection(collection);

const foundArtist = [];
function findByArtist(artistInput, collectionInput1) {
    for (i = 0; i < collectionInput1.length; i++) {
        if (artistInput === collectionInput1[i].artist) {
            foundArtist.push(collectionInput1[i]);
        }
    }
}
findByArtist('The Famig Lips', collection);
console.log(foundArtist);
findByArtist('The Flaming Lips', collection);
console.log(foundArtist);