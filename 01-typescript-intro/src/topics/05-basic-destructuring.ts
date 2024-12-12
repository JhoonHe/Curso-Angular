
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const {
    audioVolume,
    songDuration,
    song: anotherSong,
    // details: { year }
    details
} = audioPlayer;

const { author, year } = details;

// console.log({ songDuration });
// console.log({ details });
// console.log({ anotherSong });
// console.table({ author, year });

const dbz: string[] = ['Goku', 'Vegeta'];

const [, , trunk = 'Not found'] = dbz;

console.log(trunk);
