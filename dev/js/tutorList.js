
let tutorList = new Vue({
  el: '#tutorList',
  data () {
      return {
          activeName:'first',
          searchSelect:'',
          searchText :'',
          indictor:0,
          showNav:false,
          showTop:false,
          indicator:'',
          activeIndex:'',
          kindsArr:{
              1:['2003年度','2004年度','2005年度','2006年度','2007年度','2008年度','2009年度','2010年度','2011年度','2012年度','2013年度','2014年度','2015年度','2016年度','2017年度','2018年度'],
              2:['全部分类','高中','初中','中小学','幼儿园'],
              3:['全部分类','区级年度教师','区级提名教师','校级年度教师']
          },
          selectArr:"",
          yearTog:false,
          schoolTog:false,
          tutorTog:false,
          
      }
  },
  methods:{
        toDetailPage () {
            location.href = './tutorDetail.htm';
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
          },
        changeBox(index) {
            this.indicator = index;
            if (index == 1) {
                  this.yearTog = !this.yearTog;
                  this.schoolTog = false;
                  this.tutorTog =false;
            } else if (index == 2) {
                  this.schoolTog = !this.schoolTog;
                  this.yearTog = false;
                  this.tutorTog =false;
            } else {
                  this.tutorTog =!this.tutorTog;
                  this.schoolTog = false;
                  this.yearTog = false;
            }
            this.selectArr = this.kindsArr[index];
        },
  },
  created() {
  },
  mounted() {
       window.addEventListener('scroll', this.scrollToTop)
  }
})



