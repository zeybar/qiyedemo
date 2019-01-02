<template>
  <div>
    <swiper :options="swiperOption"
            ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <img src="~assets/images/1520907357.jpg"
             alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="~assets/images/1520907856.jpg"
             alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="~assets/images/1520907591.jpg"
             alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"
           slot="pagination"></div>
      <div class="swiper-button-prev"
           slot="button-prev"></div>
      <div class="swiper-button-next"
           slot="button-next"></div>
    </swiper>
    <div class="service_list_met_16_2 met-index-body text-xs-center     bgcolor"
         m-id="3">
      <div class="container">
        <h2 class="m-t-0 font-weight-300 animation-slide-top appear-no-repeat"
            data-plugin="appear"
            data-animate="slide-top"
            data-repeat="false">产品与平台</h2>
        <p class="desc m-b-0 font-weight-300 animation-fade appear-no-repeat"
           data-plugin="appear"
           data-animate="fade"
           data-repeat="false">为企业提供一系列软件相关的配套服务</p>
        <ul class="
                  blocks-100
               blocks-md-1 blocks-lg-3 blocks-xxl-3 index-service-list">
          <li class="animation-slide-bottom50 appear-no-repeat"
              data-plugin="appear"
              data-animate="slide-bottom50"
              data-repeat="false">
            <div class="service-shadow">
              <a href="https://mb.mituo.cn/mui068/product/product.php?class2=4"
                 title="APP软件"
                 target="_self">
                <img data-original="~assets/images/1520908856.jpg"
                     alt="APP软件"
                     data-lazyload="true"
                     src="~assets/images/1520908856.jpg"
                     class=""
                     style="display: inline;">
              </a>
              <a href="https://mb.mituo.cn/mui068/product/product.php?class2=4"
                 title="APP软件"
                 class="service-info text-xs-left"
                 target="_self">
                <h3 class="m-y-5 font-weight-500">APP软件</h3>
                <p class="m-b-10 font-weight-300">APP技术原本是对软件进行加速运算或进行大型科学运算的技术，基于Paas开发平台开发出的APP，直接部署在云环境上，为企业进行集成，形成一种租用云服务的模式。同时，APP技术还可以应用于移动互联网中。在移动时代的大背景下，个人应用率先走进云时代，基于云平台的企业APP在移动互联网领域迎来了发展良机。</p>
              </a>
            </div>
          </li>
          <li class="animation-slide-bottom50 appear-no-repeat"
              data-plugin="appear"
              data-animate="slide-bottom50"
              data-repeat="false">
            <div class="service-shadow">
              <a href="https://mb.mituo.cn/mui068/product/product.php?class2=3"
                 title="产品中心"
                 target="_self">
                <img data-original="~assets/images/1520908587.jpg"
                     alt="产品中心"
                     data-lazyload="true"
                     src="~assets/images/1520908587.jpg"
                     class=""
                     style="display: inline;">
              </a>
              <a href="https://mb.mituo.cn/mui068/product/product.php?class2=3"
                 title="产品中心"
                 class="service-info text-xs-left"
                 target="_self">
                <h3 class="m-y-5 font-weight-500">产品中心</h3>
                <p class="m-b-10 font-weight-300">充分了解各行业内互联网+的运营模式以及需求，倡导让客户感知产品的应用体验价值，与客户深入沟通，将企业的经营现状与用户市场客观需求结合起来，以实现手机APP量身定制开发的目的。</p>
              </a>
            </div>
          </li>
          <li class="animation-slide-bottom50 appear-no-repeat"
              data-plugin="appear"
              data-animate="slide-bottom50"
              data-repeat="false">
            <div class="service-shadow">
              <a href="https://mb.mituo.cn/mui068/product/product.php?class2=2"
                 title="定制案例"
                 target="_self">
                <img data-original="~assets/images/1520908753.jpg"
                     alt="定制案例"
                     data-lazyload="true"
                     src="~assets/images/1520908753.jpg"
                     class=""
                     style="display: inline;">
              </a>
              <a href="https://mb.mituo.cn/mui068/product/product.php?class2=2"
                 title="定制案例"
                 class="service-info text-xs-left"
                 target="_self">
                <h3 class="m-y-5 font-weight-500">定制案例</h3>
                <p class="m-b-10 font-weight-300">在APP风格、功能、UI设计等方面都会充分表达企业的特色，因此更容易获得用户的喜爱从而实现增加用户的粘度、企业发展的目标。</p>
              </a>
            </div>
          </li>
        </ul>
        <a href="https://mb.mituo.cn/mui068/product/"
           title="产品与平台"
           class="more">查看更多</a>
      </div>
    </div>

    <div class="product_list_met_21_1 met-index-body met-index-team     bgpic"
         m-id="4">
      <div class="container">
        <h2 class="m-t-0 text-xs-center font-weight-300 animation-slide-top appear-no-repeat"
            data-plugin="appear"
            data-animate="slide-top"
            data-repeat="false">解决方案</h2>
        <p class="desc m-b-0 text-xs-center font-weight-300 animation-fade appear-no-repeat"
           data-plugin="appear"
           data-animate="fade"
           data-repeat="false">为企业提供一系列的解决方案</p>
        <swiper :options="swiperOption2"
                ref="mySwiper2"
                class="team-list">
          <!-- slides -->
          <swiper-slide>
            <div class="item-inner">
              <div class="team-pic">
                <a class="team-btn"
                   href="https://mb.mituo.cn/mui068/news/news.php?class2=8"
                   style="background-image: url(~assets/images/1520910850.jpg);"></a>
              </div>
              <div class="team-content">
                <div class="team-title">
                  <h3>行业解决方案</h3>
                  <p>人力资源管理，企业集团财务管理</p>
                </div>
                <p></p>
                <p>
                  为制造业的大中型企业提供涵盖企业集团财务管理、人力资源管理、数据中心及商业智能、第三方ERP咨询与实施、商贸企业进销存及物流管理系统、供应商关系管理、客户关系管理、IT咨询服务等整体解决方案。
                </p>
                <p></p>
                <a href="https://mb.mituo.cn/mui068/news/news.php?class2=8"
                   class="team-more"
                   target="_blink"> MORE <i class="icon pe-angle-right-circle"></i> </a>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="item-inner">
              <div class="team-pic">
                <a class="team-btn"
                   href="https://mb.mituo.cn/mui068/news/news.php?class2=8"
                   style="background-image: url(~assets/images/1520910850.jpg);"></a>
              </div>
              <div class="team-content">
                <div class="team-title">
                  <h3>行业解决方案</h3>
                  <p>人力资源管理，企业集团财务管理</p>
                </div>
                <p></p>
                <p>
                  为制造业的大中型企业提供涵盖企业集团财务管理、人力资源管理、数据中心及商业智能、第三方ERP咨询与实施、商贸企业进销存及物流管理系统、供应商关系管理、客户关系管理、IT咨询服务等整体解决方案。
                </p>
                <p></p>
                <a href="https://mb.mituo.cn/mui068/news/news.php?class2=8"
                   class="team-more"
                   target="_blink"> MORE <i class="icon pe-angle-right-circle"></i> </a>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="item-inner">
              <div class="team-pic">
                <a class="team-btn"
                   href="https://mb.mituo.cn/mui068/news/news.php?class2=8"
                   style="background-image: url(~assets/images/1520910850.jpg);"></a>
              </div>
              <div class="team-content">
                <div class="team-title">
                  <h3>行业解决方案</h3>
                  <p>人力资源管理，企业集团财务管理</p>
                </div>
                <p></p>
                <p>
                  为制造业的大中型企业提供涵盖企业集团财务管理、人力资源管理、数据中心及商业智能、第三方ERP咨询与实施、商贸企业进销存及物流管理系统、供应商关系管理、客户关系管理、IT咨询服务等整体解决方案。
                </p>
                <p></p>
                <a href="https://mb.mituo.cn/mui068/news/news.php?class2=8"
                   class="team-more"
                   target="_blink"> MORE <i class="icon pe-angle-right-circle"></i> </a>
              </div>
            </div>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-button-prev"
               slot="button-prev"></div>
          <div class="swiper-button-next"
               slot="button-next"></div>
        </swiper>
        <!-- <div class="swiper-container  swiper-container-horizontal swiper-container-3d swiper-container-coverflow" style="cursor: grab;">
              <ul class="team-list swiper-wrapper" style="transform: translate3d(-2596px, 0px, 0px); transition-duration: 0ms;"><li class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" style="width: 472px; transform: translate3d(276px, 0px, -3000px) rotateX(0deg) rotateY(0deg); z-index: -5; transition-duration: 0ms;">
                                  <div class="item-inner">
                                      <div class="team-pic">
                                          <a class="team-btn" href="https://mb.mituo.cn/mui068/news/news.php?class2=8" style="background-image: url(~assets/images/1520910850.jpg);"></a>
                                      </div>
                                      <div class="team-content">
                                          <div class="team-title">
                                              <h3>行业解决方案</h3>
                                              <p>人力资源管理，企业集团财务管理</p>
                                          </div>
                                          <p></p>
                                          <p>为制造业的大中型企业提供涵盖企业集团财务管理、人力资源管理、数据中心及商业智能、第三方ERP咨询与实施、商贸企业进销存及物流管理系统、供应商关系管理、客户关系管理、IT咨询服务等整体解决方案。</p>
                                          <p></p>
                                          <a href="https://mb.mituo.cn/mui068/news/news.php?class2=8" class="team-more" target="_blink">
                                              MORE                                            <i class="icon pe-angle-right-circle"></i>
                                          </a>
                                      </div>
                                  </div>
                              </li><li class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="1" style="width: 472px; transform: translate3d(230px, 0px, -2500px) rotateX(0deg) rotateY(0deg); z-index: -4; transition-duration: 0ms;">
                                  <div class="item-inner">
                                      <div class="team-pic">
                                          <a class="team-btn" href="https://mb.mituo.cn/mui068/news/news.php?class2=7" style="background-image: url(~assets/images/1520910295.jpg);"></a>
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
                              </li><li class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="2" style="width: 472px; transform: translate3d(184px, 0px, -2000px) rotateX(0deg) rotateY(0deg); z-index: -3; transition-duration: 0ms;">
                                  <div class="item-inner">
                                      <div class="team-pic">
                                          <a class="team-btn" href="https://mb.mituo.cn/mui068/news/news.php?class2=6" style="background-image: url(~assets/images/1520910256.jpg);"></a>
                                      </div>
                                      <div class="team-content">
                                          <div class="team-title">
                                              <h3>工程解决方案</h3>
                                              <p>以效益为中心，以质量为中心</p>
                                          </div>
                                          <p></p>
                                          <p>系统设计引入世界先进客户关系管理系统的设计理念，借鉴其他领域CRM成熟的设计经验，结合电力行业特色，提炼出满足于中国电力行业CRM的功能需求，能够达到改善客户关系、提高客户满意度、增加企业效益的目标要求。</p>
                                          <p></p>
                                          <a href="https://mb.mituo.cn/mui068/news/news.php?class2=6" class="team-more" target="_blink">
                                              MORE                                            <i class="icon pe-angle-right-circle"></i>
                                          </a>
                                      </div>
                                  </div>
                              </li>
                                                                                                  <li class="swiper-slide" data-swiper-slide-index="0" style="width: 472px; transform: translate3d(138px, 0px, -1500px) rotateX(0deg) rotateY(0deg); z-index: -2; transition-duration: 0ms;">
                                  <div class="item-inner">
                                      <div class="team-pic">
                                          <a class="team-btn" href="https://mb.mituo.cn/mui068/news/news.php?class2=8" style="background-image: url(~assets/images/1520910850.jpg);"></a>
                                      </div>
                                      <div class="team-content">
                                          <div class="team-title">
                                              <h3>行业解决方案</h3>
                                              <p>人力资源管理，企业集团财务管理</p>
                                          </div>
                                          <p></p>
                                          <p>为制造业的大中型企业提供涵盖企业集团财务管理、人力资源管理、数据中心及商业智能、第三方ERP咨询与实施、商贸企业进销存及物流管理系统、供应商关系管理、客户关系管理、IT咨询服务等整体解决方案。</p>
                                          <p></p>
                                          <a href="https://mb.mituo.cn/mui068/news/news.php?class2=8" class="team-more" target="_blink">
                                              MORE                                            <i class="icon pe-angle-right-circle"></i>
                                          </a>
                                      </div>
                                  </div>
                              </li>
                                                                                                      <li class="swiper-slide" data-swiper-slide-index="1" style="width: 472px; transform: translate3d(92px, 0px, -1000px) rotateX(0deg) rotateY(0deg); z-index: -1; transition-duration: 0ms;">
                                  <div class="item-inner">
                                      <div class="team-pic">
                                          <a class="team-btn" href="https://mb.mituo.cn/mui068/news/news.php?class2=7" style="background-image: url(~assets/images/1520910295.jpg);"></a>
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
                              </li>
                                                                                                      <li class="swiper-slide swiper-slide-prev" data-swiper-slide-index="2" style="width: 472px; transform: translate3d(46px, 0px, -500px) rotateX(0deg) rotateY(0deg); z-index: 0; transition-duration: 0ms;">
                                  <div class="item-inner">
                                      <div class="team-pic">
                                          <a class="team-btn" href="https://mb.mituo.cn/mui068/news/news.php?class2=6" style="background-image: url(~assets/images/1520910256.jpg);"></a>
                                      </div>
                                      <div class="team-content">
                                          <div class="team-title">
                                              <h3>工程解决方案</h3>
                                              <p>以效益为中心，以质量为中心</p>
                                          </div>
                                          <p></p>
                                          <p>系统设计引入世界先进客户关系管理系统的设计理念，借鉴其他领域CRM成熟的设计经验，结合电力行业特色，提炼出满足于中国电力行业CRM的功能需求，能够达到改善客户关系、提高客户满意度、增加企业效益的目标要求。</p>
                                          <p></p>
                                          <a href="https://mb.mituo.cn/mui068/news/news.php?class2=6" class="team-more" target="_blink">
                                              MORE                                            <i class="icon pe-angle-right-circle"></i>
                                          </a>
                                      </div>
                                  </div>
                              </li>
                                                                          <li class="swiper-slide swiper-slide-duplicate swiper-slide-active" data-swiper-slide-index="0" style="width: 472px; transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg); z-index: 1; transition-duration: 0ms;">
                                  <div class="item-inner">
                                      <div class="team-pic">
                                          <a class="team-btn" href="https://mb.mituo.cn/mui068/news/news.php?class2=8" style="background-image: url(~assets/images/1520910850.jpg);"></a>
                                      </div>
                                      <div class="team-content">
                                          <div class="team-title">
                                              <h3>行业解决方案</h3>
                                              <p>人力资源管理，企业集团财务管理</p>
                                          </div>
                                          <p></p>
                                          <p>为制造业的大中型企业提供涵盖企业集团财务管理、人力资源管理、数据中心及商业智能、第三方ERP咨询与实施、商贸企业进销存及物流管理系统、供应商关系管理、客户关系管理、IT咨询服务等整体解决方案。</p>
                                          <p></p>
                                          <a href="https://mb.mituo.cn/mui068/news/news.php?class2=8" class="team-more" target="_blink">
                                              MORE                                            <i class="icon pe-angle-right-circle"></i>
                                          </a>
                                      </div>
                                  </div>
                              </li><li class="swiper-slide swiper-slide-duplicate swiper-slide-next" data-swiper-slide-index="1" style="width: 472px; transform: translate3d(-46px, 0px, -500px) rotateX(0deg) rotateY(0deg); z-index: 0; transition-duration: 0ms;">
                                  <div class="item-inner">
                                      <div class="team-pic">
                                          <a class="team-btn" href="https://mb.mituo.cn/mui068/news/news.php?class2=7" style="background-image: url(~assets/images/1520910295.jpg);"></a>
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
                              </li><li class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="2" style="width: 472px; transform: translate3d(-92px, 0px, -1000px) rotateX(0deg) rotateY(0deg); z-index: -1; transition-duration: 0ms;">
                                  <div class="item-inner">
                                      <div class="team-pic">
                                          <a class="team-btn" href="https://mb.mituo.cn/mui068/news/news.php?class2=6" style="background-image: url(~assets/images/1520910256.jpg);"></a>
                                      </div>
                                      <div class="team-content">
                                          <div class="team-title">
                                              <h3>工程解决方案</h3>
                                              <p>以效益为中心，以质量为中心</p>
                                          </div>
                                          <p></p>
                                          <p>系统设计引入世界先进客户关系管理系统的设计理念，借鉴其他领域CRM成熟的设计经验，结合电力行业特色，提炼出满足于中国电力行业CRM的功能需求，能够达到改善客户关系、提高客户满意度、增加企业效益的目标要求。</p>
                                          <p></p>
                                          <a href="https://mb.mituo.cn/mui068/news/news.php?class2=6" class="team-more" target="_blink">
                                              MORE                                            <i class="icon pe-angle-right-circle"></i>
                                          </a>
                                      </div>
                                  </div>
                              </li></ul>
          </div> -->
      </div>
    </div>

    <section class="service_list_met_11_1 text-xs-center"
             m-id="10">
      <div class="container">
        <div class="head">
        </div>
        <ul class="service-list m-t-30 slick-initialized slick-slider"
            data-resize="3|3|1|1">

          <div aria-live="polite"
               class="slick-list draggable">
            <div class="slick-track"
                 role="listbox"
                 style="opacity: 1; width: 945px; transform: translate3d(0px, 0px, 0px);">
              <li class="item slick-slide slick-current slick-active"
                  style="width: 265px; visibility: inherit; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);"
                  tabindex="-1"
                  role="option"
                  aria-describedby="slick-slide00"
                  data-slick-index="0"
                  aria-hidden="false">
                <a href="https://mb.mituo.cn/mui068/about2/show.php?id=12"
                   title="我们是谁？"
                   tabindex="0">
                  <img src="~assets/images/1520912120.png"
                       alt="我们是谁？">
                  <h4>我们是谁？</h4>
                  <p>是一个有着研发精神和创新精神的团队。</p>
                </a>
              </li>
              <li class="item slick-slide slick-active"
                  style="width: 265px; visibility: inherit; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);"
                  tabindex="-1"
                  role="option"
                  aria-describedby="slick-slide01"
                  data-slick-index="1"
                  aria-hidden="false">
                <a href="https://mb.mituo.cn/mui068/about2/show.php?id=11"
                   title="我们在做什么？"
                   tabindex="0">
                  <img src="~assets/images/1520911668.png"
                       alt="我们在做什么？">
                  <h4>我们在做什么？</h4>
                  <p>我们用10年的建站经验，打造出适合中小企业的高端企业模板，精致的设计，人性化的后台...</p>
                </a>
              </li>
              <li class="item slick-slide slick-active"
                  style="width: 265px; visibility: inherit; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);"
                  tabindex="-1"
                  role="option"
                  aria-describedby="slick-slide02"
                  data-slick-index="2"
                  aria-hidden="false">
                <a href="https://mb.mituo.cn/mui068/about2/show.php?id=10"
                   title="我们为什么这么做？"
                   tabindex="0">
                  <img src="~assets/images/1520911863.png"
                       alt="我们为什么这么做？">
                  <h4>我们为什么这么做？</h4>
                  <p>打破传统模板模式，让所有企业能够在最短时间内拥有一套高端网站，让成为一种潮流！</p>
                </a>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </section>

    <div class="news_list_met_16_1 met-index-body     bgpic"
         m-id="11">
      <div class="container">
        <h2 class="m-t-0 text-xs-center font-weight-300 animation-slide-top appear-no-repeat"
            data-plugin="appear"
            data-animate="slide-top"
            data-repeat="false">新闻中心</h2>
        <p class="desc m-b-0 text-xs-center font-weight-300 animation-fade appear-no-repeat"
           data-plugin="appear"
           data-animate="fade"
           data-repeat="false">为企业提供一系列软件相关的配套服务</p>
        <ul class="blocks-2 index-news-list imagesize"
            data-scale="1">
          <li class="media media-lg     shadow animation-slide-bottom appear-no-repeat"
              data-plugin="appear"
              data-animate="slide-bottom"
              data-repeat="false">
            <div class="media-body">
              <h4 class="media-heading m-b-10">
                <a href="https://mb.mituo.cn/mui068/news1/shownews.php?id=8"
                   title="战略和细节不可分离"
                   target="_self">战略和细节不可分离</a>
              </h4>
              <p class="des m-b-5 font-weight-300">至少在中国软件行业，43岁的王勇峰也许是迄今为止任职最久的上市公司总裁。从29岁至今，14年，亲历了...</p>
              <p class="info m-b-0 font-weight-300">
                <span>2018-03-13</span>
                <span class="m-l-10"></span>
                <span class="m-l-10">
                  <i class="icon wb-eye m-r-5"
                     aria-hidden="true"></i>
                  0 </span>
              </p>
            </div>
          </li>
          <li class="media media-lg     shadow animation-slide-bottom appear-no-repeat"
              data-plugin="appear"
              data-animate="slide-bottom"
              data-repeat="false">
            <div class="media-body">
              <h4 class="media-heading m-b-10">
                <a href="https://mb.mituo.cn/mui068/news1/shownews.php?id=7"
                   title="中小企业信息化服务平台"
                   target="_self">中小企业信息化服务平台</a>
              </h4>
              <p class="des m-b-5 font-weight-300">中小企业信息化服务平台是公共性质的服务平台，它将IT服务资源进行系统整合，构建一站式的服务体系，形成...</p>
              <p class="info m-b-0 font-weight-300">
                <span>2018-03-13</span>
                <span class="m-l-10"></span>
                <span class="m-l-10">
                  <i class="icon wb-eye m-r-5"
                     aria-hidden="true"></i>
                  0 </span>
              </p>
            </div>
          </li>
          <li class="media media-lg     shadow animation-slide-bottom appear-no-repeat"
              data-plugin="appear"
              data-animate="slide-bottom"
              data-repeat="false">
            <div class="media-body">
              <h4 class="media-heading m-b-10">
                <a href="https://mb.mituo.cn/mui068/news1/shownews.php?id=6"
                   title="电力安全生产解决方案"
                   target="_self">电力安全生产解决方案</a>
              </h4>
              <p class="des m-b-5 font-weight-300">电力企业是资产密集型的企业，其安全生产的核心任务就是通过电网资产的高效运转与有效维护，来保障电能的安...</p>
              <p class="info m-b-0 font-weight-300">
                <span>2018-03-13</span>
                <span class="m-l-10"></span>
                <span class="m-l-10">
                  <i class="icon wb-eye m-r-5"
                     aria-hidden="true"></i>
                  0 </span>
              </p>
            </div>
          </li>
          <li class="media media-lg     shadow animation-slide-bottom appear-no-repeat"
              data-plugin="appear"
              data-animate="slide-bottom"
              data-repeat="false">
            <div class="media-body">
              <h4 class="media-heading m-b-10">
                <a href="https://mb.mituo.cn/mui068/news1/shownews.php?id=5"
                   title="IT培训服务"
                   target="_self">IT培训服务</a>
              </h4>
              <p class="des m-b-5 font-weight-300">软件开发培训为各行业客户提供全面的培训解决方案IT运维与服务支持团队能力构建方案IT项目管理与控制能...</p>
              <p class="info m-b-0 font-weight-300">
                <span>2018-03-13</span>
                <span class="m-l-10"></span>
                <span class="m-l-10">
                  <i class="icon wb-eye m-r-5"
                     aria-hidden="true"></i>
                  0 </span>
              </p>
            </div>
          </li>
          <li class="media media-lg     shadow animation-slide-bottom appear-no-repeat"
              data-plugin="appear"
              data-animate="slide-bottom"
              data-repeat="false">
            <div class="media-body">
              <h4 class="media-heading m-b-10">
                <a href="https://mb.mituo.cn/mui068/news1/shownews.php?id=4"
                   title="ERP实施与咨询服务"
                   target="_self">ERP实施与咨询服务</a>
              </h4>
              <p class="des m-b-5 font-weight-300">软件开发行业历经十余年的耕耘，将丰富的项目经验与成熟的行业解决方案相结合，为国内外企业用户提供优化的...</p>
              <p class="info m-b-0 font-weight-300">
                <span>2018-03-13</span>
                <span class="m-l-10"></span>
                <span class="m-l-10">
                  <i class="icon wb-eye m-r-5"
                     aria-hidden="true"></i>
                  0 </span>
              </p>
            </div>
          </li>
          <li class="media media-lg     shadow animation-slide-bottom appear-no-repeat"
              data-plugin="appear"
              data-animate="slide-bottom"
              data-repeat="false">
            <div class="media-body">
              <h4 class="media-heading m-b-10">
                <a href="https://mb.mituo.cn/mui068/news1/shownews.php?id=3"
                   title="电力营销系统解决方案"
                   target="_self">电力营销系统解决方案</a>
              </h4>
              <p class="des m-b-5 font-weight-300">电力营销系统包括“以市场和客户为中心”的电力营销综合服务平台，“以效益为中心”的电力营销业务处理平台...</p>
              <p class="info m-b-0 font-weight-300">
                <span>2018-03-13</span>
                <span class="m-l-10"></span>
                <span class="m-l-10">
                  <i class="icon wb-eye m-r-5"
                     aria-hidden="true"></i>
                  0 </span>
              </p>
            </div>
          </li>
          <li class="media media-lg     shadow animation-slide-bottom appear-no-repeat"
              data-plugin="appear"
              data-animate="slide-bottom"
              data-repeat="false">
            <div class="media-body">
              <h4 class="media-heading m-b-10">
                <a href="https://mb.mituo.cn/mui068/news1/shownews.php?id=2"
                   title="制造业解决方案"
                   target="_self">制造业解决方案</a>
              </h4>
              <p class="des m-b-5 font-weight-300">软件开发为制造业的大中型企业提供涵盖企业集团财务管理、人力资源管理、数据中心及商业智能、第三方ERP...</p>
              <p class="info m-b-0 font-weight-300">
                <span>2018-03-13</span>
                <span class="m-l-10"></span>
                <span class="m-l-10">
                  <i class="icon wb-eye m-r-5"
                     aria-hidden="true"></i>
                  0 </span>
              </p>
            </div>
          </li>
          <li class="media media-lg     shadow animation-slide-bottom appear-no-repeat"
              data-plugin="appear"
              data-animate="slide-bottom"
              data-repeat="false">
            <div class="media-body">
              <h4 class="media-heading m-b-10">
                <a href="https://mb.mituo.cn/mui068/news1/shownews.php?id=1"
                   title="电气设计"
                   target="_self">电气设计</a>
              </h4>
              <p class="des m-b-5 font-weight-300">面向冶金、造纸、交通、机械等行业用户，基于客户的要求，根据电气设备提供商的选型和规格提供完善的电气设...</p>
              <p class="info m-b-0 font-weight-300">
                <span>2018-03-13</span>
                <span class="m-l-10"></span>
                <span class="m-l-10">
                  <i class="icon wb-eye m-r-5"
                     aria-hidden="true"></i>
                  0 </span>
              </p>
            </div>
          </li>
        </ul>
        <a href="https://mb.mituo.cn/mui068/news1/"
           title="新闻中心"
           class="more">查看更多</a>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  head() {
    return {
      htmlAttrs: {
        foo: "bar",
        class:
          "js flexbox canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths tablesaw-enhanced"
      },
      bodyAttrs: {
        class: "met-navfixed"
      },
      title: "公司响应式网站",
      titleTemplate: "%s - 萌大人",
      meta: [
        { charset: "utf-8" },
        { name: "renderer", content: "webkit" },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge,chrome=1" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "viewport",
          content:
            "width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0,minimal-ui"
        },
        { name: "format-detection", content: "telephone=no" },
        {
          name: "description",
          content:
            "网站描述，一般显示在搜索引擎搜索结果中的描述文字，用于介绍网站，吸引浏览者点击。"
        },
        { name: "keywords", content: "APP|软件|科技" },
        {
          name: "generator",
          content: "MetInfo 6.1.3",
          "data-variable":
            "https://mb.mituo.cn/mui068/|cn|cn|mui068|10001|10001|0"
        }
      ]
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperOption2: {
        effect: "coverflow",
        grabCursor: true,
        slidesPerView: 2,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 0,
        loop: true,
        loopAdditionalSlides: 1,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
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
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    console.log("this is current swiper instance object", this.swiper);
    console.log("this is current swiper instance object", this.swiper2);
    // this.swiper.slideTo(3, 1000, false)
  },
  methods: {
    async getData() {
      let res = await this.$axios.get("/myPost");
    }
  }
};
</script>

<style scoped>
</style>