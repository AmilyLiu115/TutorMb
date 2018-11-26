

let trainDetail = new Vue({
  el: '#actDetail',
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
        location.href = './tutorDetail.htm';
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
        // this.showNav = false;
  },
  mounted() {
    this.$nextTick(function () {
        var swiper = new Swiper('.swiper-container', {
                slidesPerView: 'auto',
                // spaceBetween : 25,
                slidesOffsetAfter : 100,
                freeMode: true,
                loop: true,
                autoplay:true,
                speed:1000
        });
    })
    window.addEventListener('scroll', this.scrollToTop)
  }
})

