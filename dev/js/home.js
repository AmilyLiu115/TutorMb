
let home = new Vue({
    el: '#home',
    data () {
      return {
          // imagList:['../../static/images/home01.png','../../static/images/home02.png','../../static/images/home03.png'],
          activeName:'first',
          searchSelect:'',
          searchText :'',
          indictor:0,
          showNav:false,
          showTop:false,
          index:'',
          activeNav:{
              cn:"",
              en:""
          }
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
    watch: {
      index (a) {
          switch (a) {
              case 0:
                  this.activeNav.cn = "教育资讯";
                  this.activeNav.en = "NEWS";
              break;
              case 1:
                  this.activeNav.cn = "培养研训";
                  this.activeNav.en = "TRAIN";
              break;
              case 2:
                  this.activeNav.cn = "活动掠影";
                  this.activeNav.en = "DOINGS";
              break;
          }
      }
    },
    created() {
    },
    mounted() {
      this.$nextTick(function () {
                var that = this;
                // banner轮播图
                var swiperB = new Swiper('#swiperBanner', {
                      loop: true,
                      autoplay:true,
                      speed:2000,
                      pagination: {
                      el: '.swiper-pagination',
                          }
                    
                });
              // 切换的文本轮播图
              var swiperT = new Swiper('#swiperText', {
                      loop: true,
                      autoplay:false,
                      pagination: {
                      el: '.swiper-pagination',
                          },
                      on: {
                        touchEnd: function(event){
                          //你的事件
                          that.index = this.realIndex;
                        },
                      },
                });
                this.index = swiperT.realIndex;
              
      })
      
      window.addEventListener('scroll', this.scrollToTop)
    }
})