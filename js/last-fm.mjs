const API_KEY = "d3601883742fe667613379972975735b";
const target = document.querySelector("#nowplaying");

const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=nleanba&api_key=${API_KEY}&format=json&limit=1&extended=1`);
const json = await response.json();
const track = json.recenttracks.track[0];

const image = document.createElement("img");
const imageUrl = track.image?.[0]?.["#text"];
const noImageUrl0 = "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png"
const noImageUrl1 = "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png";
// image.src = imageUrl !== noImageUrl1 ? imageUrl : "/img/88x31/8831-last-fm.gif";
image.src= imageUrl;
image.title = `${ track["@attr"]?.nowplaying ? "Currently listening to:" : "Recently listened to:" } ${track.name} – ${track.artist?.name}${ track.loved === "1" ? " – <3" : "" }`;
image.height = 34;

const text1 = document.createElement("span");
if (track.loved === "1") text1.innerText = "\u2665\ufE0E " // heart
text1.innerText += track["@attr"]?.nowplaying ? "Currently listening to:" : "Recently listened to:";

const text2 = document.createElement("span");
text2.innerText = `${track.name} – ${track.artist?.name}`;

const link = document.createElement("a");
link.href = "https://www.last.fm/user/nleanba";
link.append(image, text1, text2);
target.append(link);
