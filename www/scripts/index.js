var app = new Vue({
    el: '#app',
    data: {
      showModal: false,
      dataModal: {
          name: '',
          desc: '',
          img: '',
          github: {
            username: '',
            followers: null,
            repos: null,
          },
          urlYoutube: ''
      },
      channels: []
    },
    created () {        
        this.getChannels()
    },
    methods: {
        getContentGithub (username) {
            axios({method: 'get', url: `https://api.github.com/users/${username}`})
            .then(res => {
                this.dataModal.github.repos = res.data.public_repos
                this.dataModal.github.followers = res.data.followers
            })
            .catch(err => console.log(err))
        },
        showDetails (param, channel) {
            this.showModal = param

            if (channel !== undefined) {
                this.dataModal.name = channel.name
                this.dataModal.desc = channel.desc
                this.dataModal.img = channel.img
                this.dataModal.urlYoutube = channel.urlYoutube
                this.dataModal.github.username = channel.usernameGit
                this.dataModal.github.repos = null
                this.dataModal.github.followers = null
                this.getContentGithub(channel.username)
            }
        },
        getChannels () {
            axios({method: 'get', url: 'http://localhost:5000/channels'})
                .then(res => {
                    this.channels = res.data.channels
                })
                .catch(err => console.log(err))
        }
    }
  })