import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'abvcssfsa', duration: '2.45' },
        { title: 'afsa', duration: '4.45' },
        { title: 'sandfa', duration: '3.45' },
        { title: 'haafasff', duration: '5.465' },
        { title: 'sandasefas', duration: '7.1' },
        { title: 'scasfav', duration: '2.34' }
    ]

};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})