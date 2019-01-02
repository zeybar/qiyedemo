<template>
  <div class="customer-container">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <img src="~assets/images/1520907357.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="~assets/images/1520907856.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="~assets/images/1520907591.jpg" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <div class="service-list">
      <b-container>
        <b-row class="animation-slide-bottom50 appear-no-repeat">
          <b-col md="12" lg="4">
            <div class="service-shadow">
              <a href="https://mb.mituo.cn/mui068/product/product.php?class2=4" title="APP软件" target="_self">
                <img data-original="~assets/images/1520908856.jpg" alt="APP软件" data-lazyload="true" src="~assets/images/1520908856.jpg" class="" style="display: inline;">
              </a>
              <a href="https://mb.mituo.cn/mui068/product/product.php?class2=4" title="APP软件" class="service-info text-xs-left" target="_self">
                <h3 class="m-y-5 font-weight-500">APP软件</h3>
                <p class="m-b-10 font-weight-300">APP技术原本是对软件进行加速运算或进行大型科学运算的技术，基于Paas开发平台开发出的APP，直接部署在云环境上，为企业进行集成，形成一种租用云服务的模式。同时，APP技术还可以应用于移动互联网中。在移动时代的大背景下，个人应用率先走进云时代，基于云平台的企业APP在移动互联网领域迎来了发展良机。</p>
              </a>
            </div>
          </b-col>
          <b-col md="12" lg="4">
            <div class="service-shadow">
              <a href="https://mb.mituo.cn/mui068/product/product.php?class2=3" title="产品中心" target="_self">
                <img data-original="~assets/images/1520908587.jpg" alt="产品中心" data-lazyload="true" src="~assets/images/1520908587.jpg" class="" style="display: inline;">
              </a>
              <a href="https://mb.mituo.cn/mui068/product/product.php?class2=3" title="产品中心" class="service-info text-xs-left" target="_self">
                <h3 class="m-y-5 font-weight-500">产品中心</h3>
                <p class="m-b-10 font-weight-300">充分了解各行业内互联网+的运营模式以及需求，倡导让客户感知产品的应用体验价值，与客户深入沟通，将企业的经营现状与用户市场客观需求结合起来，以实现手机APP量身定制开发的目的。</p>
              </a>
            </div>
          </b-col>
          <b-col md="12" lg="4">
            <div class="service-shadow">
              <a href="https://mb.mituo.cn/mui068/product/product.php?class2=2" title="定制案例" target="_self">
                <img data-original="~assets/images/1520908753.jpg" alt="定制案例" data-lazyload="true" src="~assets/images/1520908753.jpg" class="" style="display: inline;">
              </a>
              <a href="https://mb.mituo.cn/mui068/product/product.php?class2=2" title="定制案例" class="service-info text-xs-left" target="_self">
                <h3 class="m-y-5 font-weight-500">定制案例</h3>
                <p class="m-b-10 font-weight-300">在APP风格、功能、UI设计等方面都会充分表达企业的特色，因此更容易获得用户的喜爱从而实现增加用户的粘度、企业发展的目标。</p>
              </a>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <a href="https://mb.mituo.cn/mui068/product/" title="产品与平台" class="more">查看更多</a>
    </div>
    <div class="product-list">
      <div class="product-list-inner">
        <h2 class="animation-slide-top appear-no-repeat" data-plugin="appear" data-animate="slide-top" data-repeat="false">解决方案</h2>
        <p class="animation-fade appear-no-repeat" data-plugin="appear" data-animate="fade" data-repeat="false">为企业提供一系列的解决方案</p>
        <swiper :options="swiperOption2" ref="mySwiper2" class="team-list">
          <!-- slides -->
          <swiper-slide>
            <div class="item-inner">
              <div class="team-pic">
                  <a class="team-btn" href="https://mb.mituo.cn/mui068/news/news.php?class2=7" style="background: url(/1520910295.jpg);"></a>
              </div>
              <div class="team-content">
                  <div class="team-title">
                      <h3>产品解决方案</h3>
                      <p>APP开发，网络应用</p>
                  </div>
                  <p></p>
                  <p>软件开发为世界著名品牌PC提供软件定制服务。为品牌PC提供与众不同的特性，提升其竞争力。我们的软件产品覆盖了Windows，Linux和OSX等主流OS。包括设备驱动，系统增强工具，网络应用，系统安全和多媒体应用等多个方面</p>
                  <p></p>
                  <a href="https://mb.mituo.cn/mui068/news/news.php?class2=7" class="team-more" target="_blink">
                      MORE                                            <i class="icon pe-angle-right-circle"></i>
                  </a>
              </div>
          </div>
          </swiper-slide>
          <swiper-slide>
            <div class="item-inner">
              <div class="team-pic">
                  <a class="team-btn" href="https://mb.mituo.cn/mui068/news/news.php?class2=7" style="background: url(/1520910295.jpg);"></a>
              </div>
              <div class="team-content">
                  <div class="team-title">
                      <h3>产品解决方案</h3>
                      <p>APP开发，网络应用</p>
                  </div>
                  <p></p>
                  <p>软件开发为世界著名品牌PC提供软件定制服务。为品牌PC提供与众不同的特性，提升其竞争力。我们的软件产品覆盖了Windows，Linux和OSX等主流OS。包括设备驱动，系统增强工具，网络应用，系统安全和多媒体应用等多个方面</p>
                  <p></p>
                  <a href="https://mb.mituo.cn/mui068/news/news.php?class2=7" class="team-more" target="_blink">
                      MORE                                            <i class="icon pe-angle-right-circle"></i>
                  </a>
              </div>
          </div>
          </swiper-slide>
          <swiper-slide>
            <div class="item-inner">
              <div class="team-pic">
                  <a class="team-btn" href="https://mb.mituo.cn/mui068/news/news.php?class2=7" style="background: url(/1520910295.jpg);"></a>
              </div>
              <div class="team-content">
                  <div class="team-title">
                      <h3>产品解决方案</h3>
                      <p>APP开发，网络应用</p>
                  </div>
                  <p></p>
                  <p>软件开发为世界著名品牌PC提供软件定制服务。为品牌PC提供与众不同的特性，提升其竞争力。我们的软件产品覆盖了Windows，Linux和OSX等主流OS。包括设备驱动，系统增强工具，网络应用，系统安全和多媒体应用等多个方面</p>
                  <p></p>
                  <a href="https://mb.mituo.cn/mui068/news/news.php?class2=7" class="team-more" target="_blink">
                      MORE                                            <i class="icon pe-angle-right-circle"></i>
                  </a>
              </div>
          </div>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div> 
    <div class="service-list">
      <b-container>
        <b-row class="animation-slide-bottom50 appear-no-repeat">
          <b-col md="12" lg="4">
            <div class="service-shadow2">
              <a href="https://mb.mituo.cn/mui068/about2/show.php?id=12" title="我们是谁？" tabindex="0">
                <img src="~assets/images/1520912120.png" alt="我们是谁？">
                <h4>我们是谁？</h4>
                <p>是一个有着研发精神和创新精神的团队。</p>
              </a>
            </div>
          </b-col>
          <b-col md="12" lg="4">
            <div class="service-shadow2">
              <img src="~assets/images/1520911668.png" alt="我们在做什么？">
              <h4>我们在做什么？</h4>
              <p>我们用10年的建站经验，打造出适合中小企业的高端企业模板，精致的设计，人性化的后台...</p>
            </div>
          </b-col>
          <b-col md="12" lg="4">
            <div class="service-shadow2">
              <img src="~assets/images/1520911863.png" alt="我们为什么这么做？">
              <h4>我们为什么这么做？</h4>
              <p>打破传统模板模式，让所有企业能够在最短时间内拥有一套高端网站，让成为一种潮流！</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <a href="https://mb.mituo.cn/mui068/product/" title="产品与平台" class="more">查看更多</a>
    </div>
    <div class="new-list">
      <div class="new-list-inner container">
        <h2 class="animation-slide-top appear-no-repeat" data-plugin="appear" data-animate="slide-top" data-repeat="false">新闻中心</h2>
        <p class="animation-fade appear-no-repeat" data-plugin="appear" data-animate="fade" data-repeat="false">为企业提供一系列软件相关的配套服务</p>
        <ul>
          <li class="animation-slide-bottom appear-no-repeat" data-plugin="appear" data-animate="slide-bottom" data-repeat="false">
            <div class="media-body">
              <h4 class="media-heading">
                <a href="https://mb.mituo.cn/mui068/news1/shownews.php?id=8" title="战略和细节不可分离" target="_self">战略和细节不可分离</a>
              </h4>
              <p class="des">至少在中国软件行业，43岁的王勇峰也许是迄今为止任职最久的上市公司总裁。从29岁至今，14年，亲历了...</p>
              <p class="info">
                <span>2018-03-13</span>
                <span class="m-l-10"></span>
                <span class="m-l-10">
                  <i class="icon wb-eye m-r-5" aria-hidden="true"></i>
                  0						</span>
              </p>
            </div>
          </li>
          <li class="animation-slide-bottom appear-no-repeat" data-plugin="appear" data-animate="slide-bottom" data-repeat="false">
            <div class="media-body">
              <h4 class="media-heading">
                <a href="https://mb.mituo.cn/mui068/news1/shownews.php?id=8" title="战略和细节不可分离" target="_self">战略和细节不可分离</a>
              </h4>
              <p class="des">至少在中国软件行业，43岁的王勇峰也许是迄今为止任职最久的上市公司总裁。从29岁至今，14年，亲历了...</p>
              <p class="info">
                <span>2018-03-13</span>
                <span class="m-l-10"></span>
                <span class="m-l-10">
                  <i class="icon wb-eye m-r-5" aria-hidden="true"></i>
                  0						</span>
              </p>
            </div>
          </li>
          <li class="animation-slide-bottom appear-no-repeat" data-plugin="appear" data-animate="slide-bottom" data-repeat="false">
            <div class="media-body">
              <h4 class="media-heading">
                <a href="https://mb.mituo.cn/mui068/news1/shownews.php?id=8" title="战略和细节不可分离" target="_self">战略和细节不可分离</a>
              </h4>
              <p class="des">至少在中国软件行业，43岁的王勇峰也许是迄今为止任职最久的上市公司总裁。从29岁至今，14年，亲历了...</p>
              <p class="info">
                <span>2018-03-13</span>
                <span class="m-l-10"></span>
                <span class="m-l-10">
                  <i class="icon wb-eye m-r-5" aria-hidden="true"></i>
                  0						</span>
              </p>
            </div>
          </li>
        </ul>
        <a href="https://mb.mituo.cn/mui068/news1/" title="新闻中心" class="more">查看更多</a>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      swiperOption2: {
        effect: 'coverflow',
        grabCursor: true,
        slidesPerView:2,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 0,
        loop: true,
        loopAdditionalSlides: 1,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',
        coverflowEffect: {
            rotate: 0,
            stretch: 46,
            depth: 500,
            modifier: 1,
            slideShadows: false
        },
        breakpoints: {
            768: {
                slidesPerView: 1
            }
        },
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    console.log('this is current swiper instance object', this.swiper)
    console.log('this is current swiper instance object', this.swiper2)
    // this.swiper.slideTo(3, 1000, false)
  },
  methods: {
    async getData() {
      let res = await this.$axios.get('/myPost');
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;

  .swiper-slide {
    &:hover {

    }
    > img {
      width: 100%;
    }
  }
}
.more {
  display: block;
  margin: 0 auto;
  width: 150px;
  padding: 0 5px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 5px;
  color: hsl(0, 0%, 0%);
  border: 1px solid hsl(0, 0%, 0%);
  margin-top: 50px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: background-color 0.5s linear;

  &:hover {
    color: hsl(0, 0%, 100%);
    background-color: hsl(168, 100%, 39%);
    border-color: hsl(168, 100%, 39%);
  }
}

.service-list {
  padding: 70px 0;
  .service-shadow {
    position: relative;
    margin: 50px 0 0;
    > a {
      display: block;
      &:last-of-type {
        position: relative;
        display: block;
        padding: 5px 15px;
      }
    }

    h3 {
      color: #000;
      margin: 5px 0;
      font-weight: 500;
      font-size: 20px;
    }

    h3 + p {
      margin-bottom: 10px;
      color: #3f3f3f;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    img {
      width: 100%;
      vertical-align: top;
      transition: all 1s ease 0s;
    }

    &::after {
      content: '';
      width: 0;
      height: 2px;
      background: hsl(168, 100%, 39%);
      position: absolute;
      left: 0;
      bottom: 0;
      transition: width .5s ease;
    }

    &:hover {
      box-shadow: 0px 5px 10px #e0e0e0;

      h3 {
        color: #00c9a1;
      }

      img {
        transform: scale(1.1, 1.1)
      }

      &::after {
        width: 100%;
      }
    }
  }

  .service-shadow2 {
    a {
      display: block;
      width: 100%;
    }
    img {
      width: 100%;
      vertical-align: top;
    }

    h4 {
      position: relative;
      // overflow: hidden;
      text-shadow: none;
      font-size: 16px;
      height: 46px;
      line-height: 46px;
      color: hsl(0, 0%, 33%);
      transition: all .66s cubic-bezier(.17, .84, .44, 1);
      border-bottom: 1px solid hsl(0, 0%, 88%);
      text-align: left;
      width: 100%;

      &::before {
        position: absolute;
        content: "";
        width: 10px;
        height: 1px;
        background-color: #555;
        margin-top: 46px;
        transition: all .66s cubic-bezier(.17, .84, .44, 1);
      }

      &:hover {
        color: #00c9a1;

        &::before {
          width: 100%;
          background: #00c9a1;
        }
      }
    }

    h4 + p {
      color: hsl(0, 0%, 60%);
      font-size: 13px;
      line-height: 24px;
      height: 50px;
      overflow: hidden;
      width: 100%;
      margin-top: 10px;
    }
  }
}
.product-list {
  padding: 70px 0;
  background: url('~assets/images/1520910063.jpg') center / cover;
  &-inner {
    h2 {
      margin-bottom: 11px;
      font-size: 36px;
      color: #00c79f;
      text-align: center;
    }
    > p {
      padding: 0 10%;
      margin-bottom: 20px;
      text-align: center;
      font-size: 16px;
      color: #999;
    }
  }

  .team-list {
    .swiper-slide {
      .item-inner {
        text-align: center;
        transition: .3s;
        background: #fff;
        box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.15);

        .team-btn {
          width: 100%;
          height: 410px;
          background-repeat: no-repeat;
          background-size: cover;
          display: block;
        }
        
        .team-content {
          min-height: 230px;
          padding: 15px 30px 30px;
          line-height: 26px;
          margin-bottom: 10px;
          background: #fff;

          .team-title {
            margin: 0;
            line-height: 30px;
            color: #999;
            font-size: 16px;

            h3 {
              color: hsl(168, 100%, 39%);
              font-size: 24px;
              margin-top: 20px;
              margin-bottom: 10px;
              font-weight: 400;
            }

            p {
              color: #a6cfc8;
            }
          }

          > p {
            color: hsl(0, 0%, 60%);
            overflow : hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          > a {
            color: hsl(169, 15%, 45%);
            font-size: 15px;
            transition: color .25s;
          }

        }
      }
    }
  }
}
.new-list {
  padding: 70px 0;
  text-align: center;
  background: url('~assets/images/1520914479.jpg') no-repeat center / cover;
  &-inner {
    h2 {
      font-size: 36px;
      color: #555;
    }

    h2 + p {
      padding: 0 10%;
      margin-bottom: 20px;
      font-size: 16px;
      color: #999;
    }

    ul {
      text-align: left;
      li {
        display: inline-block;
        width: 50%;
        padding: 15px;
        margin-bottom: 15px;
        border: 1px solid hsla(0, 0%, 0%, 0);
        transition: all 0.5s ease 0s;

        &:hover {
          box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
        }
        .media-body {
          overflow: hidden;
          flex: 1;
          display: table-cell;
          vertical-align: top;

          h4 {
            margin-bottom: 10px;
            font-size: 1.286rem;
            
            a {
              color: #37474f;
            }
          }

          > p {
            margin: 0;
            line-height: 1.8;
            color: #999;

            &.des {
              margin-bottom: 5px;
              max-height: 5.4em;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
            }

            &.info {

            }
          }
        }
      }
    }
  }
}
</style>