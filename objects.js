var playlist = {
raikoti: "Munda Ambarsariya"
};
function updatePlaylist(playlist, artistName, songTitle) {
  playlist["Slowdive"] = 'Singh',
  playlist['My Bloody Valentine'] = 'Sometimes'
}

describe('updatePlaylist(playlist, artistName, songTitle)', () => {
  before(() => {
    playlist['Slowdive'] = 'Alison'
    playlist['My Bloody Valentine'] = 'Sometimes'
  })
