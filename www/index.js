var app = new Vue({
    el: '#app',
    data: {
      showModal: false,
      dataModal: {
          name: '',
          desc: '',
          img: '',
          urlYoutube: '',
          urlGithub: ''
      },
      channels: []
    },
    created () {        
        this.getChannels()
    },
    methods: {
        showDetails (param, channel) {
            this.showModal = param

            if (channel !== undefined) {
                this.dataModal.name = channel.name
                this.dataModal.desc = channel.desc
                this.dataModal.img = channel.img
                this.dataModal.urlYoutube = channel.urlYoutube
                this.dataModal.urlGithub = channel.titlurlgithub

            }
        },
        getChannels () {
            axios({method: 'get', url: 'http://localhost:5000/channels'})
                .then(res => {
                    this.channels = res.data.channels
                })
        }
    }
  })