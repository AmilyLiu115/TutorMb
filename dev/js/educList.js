

let educList = new Vue({
  el: '#educList',
  data () {
    return {
      // imagList:['../../static/images/home01.png','../../static/images/home02.png','../../static/images/home03.png'],
      activeName:'first',
      searchSelect:'',
      searchText :'',
      indictor:0,
      showNav:false,
      showTop:false
    }
  },
  methods:{
    handleClick () {

    },
    toDetailPage () {
        location.href = './educDetail.htm';
      // this.$router.push('/tutorList/tutorDetail')
    },
    navBarFn () {
        this.showNav = true;
    },
    toTop() {
         document.documentElement.scrollTop = document.body.scrollTop = 0;
    },
    scrollToTop () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        let browserHeight = window.outerHeight;
        if (scrollTop > browserHeight) {
            this.showTop = true;
        } else {
            this.showTop = false;
        }
      }
  },
  created() {
    console.log(111)
  },
  mounted() {
  
    window.addEventListener('scroll', this.scrollToTop)
  }
})



