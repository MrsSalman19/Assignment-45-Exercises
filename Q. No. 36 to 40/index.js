//-------------------------------------------   QUESTION NO 36 --------------------------------------
console.log("\n______________________________   QUESTION NO 36 _________________________________\n");
function make_shirt(size, printMessage) {
    console.log(`You selected ${size} size shirt with ${printMessage} prints on your shirt.`);
}
;
make_shirt("Medium", "I love Pakistan");
make_shirt("Large", "HAPPY INDEPENDENCE DAY");
//-------------------------------------------   QUESTION NO 37  --------------------------------------
console.log("\n______________________________   QUESTION NO 37 _________________________________\n");
function make_shirts(size = "Large ", printMessage = "I love Typescript.") {
    console.log(`I need ${size} size shirt with the prints "${printMessage}"\n`);
}
;
make_shirts();
console.log("MEDIUM SHIRT WITH DEFAULT MESSAGE :");
make_shirts("Medium");
console.log("\nSMALL SHIRT WITH DIFFERENT MESSAGE :");
make_shirts("small", "I love python.");
//-------------------------------------------   QUESTION NO 38 --------------------------------------
console.log("\n______________________________   QUESTION NO 38 _________________________________\n");
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
;
describe_city("karachi");
describe_city("Lahore");
describe_city("Newyork", "America");
//-------------------------------------------   QUESTION NO 39  --------------------------------------
console.log("\n______________________________   QUESTION NO 39 _________________________________\n");
function city_country(city, country) {
    return `"${city}" , "${country}"`;
}
console.log(city_country("karachi", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Mumbai", "India"));
//-------------------------------------------   QUESTION NO 40 --------------------------------------
console.log("\n______________________________   QUESTION NO  40_________________________________\n");
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
;
console.log(make_album("Rahat Ali", "Album 1"));
console.log(make_album("Hadiqa Kiani", "Album 2"));
console.log(make_album("Sono Nigam", "Album 3", 4));
export {};
