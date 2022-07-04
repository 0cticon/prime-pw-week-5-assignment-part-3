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

