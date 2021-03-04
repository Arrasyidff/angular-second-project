export class PlaylistData {
    playlists: any = []

    addPlaylist(data: any) {
        let id = (this.playlists.length > 0 ? this.playlists[this.playlists.length - 1].id + 1 : 1)
        let newData = {
            id,
            name: data.name,
            description: data.description,
            songs: data.songs
        }
        this.playlists.push(newData)
        console.log(this.playlists)
        return this.playlists
    }

    deletePlaylist(data: any) {
        let filterData = this.playlists
        let newData = filterData.filter(el => el.name !== data.name)
        this.playlists = newData
        return this.playlists
    }

    updatePlaylist(data, id) {
        let result = []
        let payload = {
            id,
            name: data.name,
            description: data.description,
            songs: data.songs
        }
        for (let i = 0; i < this.playlists.length; i++) {
            let element = this.playlists[i];
            if (element.id === id) {
                element = payload
            }
            result.push(element)
        }
        this.playlists = result
        console.log(this.playlists)
        return this.playlists
    }
}