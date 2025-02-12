<template>
     <div class="head">
            <!-- <div class="top">
                <div class="top_text1 top_text" >I CHING HUANG I CHING HUANG I CHING HUANG</div>
                <div class="top_text2 top_text">  I CHING HUANG I CHING HUANG I CHING HUANG</div>
            </div> -->
            <nav>
                <div class="hamwrap">
                    <div class="bar bar1 transition2"></div>
                    <div class="bar bar2 transition2"></div>
                    <div class="bar bar3 transition2"></div>
                </div>
                <ul class="nav_wrap">
                    <router-link to="/">
                        <li class="nav_text choese">HOME</li>
                    </router-link>
                    <router-link to="/about">
                        <li class="nav_text">ABOUT</li>
                    </router-link>
                    
                    <li class="nav_text portfolio">PORTFOLIO
                        <ul class="portfolio_lists">
                            <router-link to="/webdesign" class="portfolio_router">
                                <li class="portfolio_list">WEB DESIGN</li>
                            </router-link>
                            <router-link href="https://jean70212.wixsite.com/17huang/portfolio" target="_blank" class="portfolio_router">
                                <li class="portfolio_list">VIDEO PRODUCTION</li>
                            </router-link>
                            <router-link href="https://www.behance.net/gallery/211780953/_" target="_blank" class="portfolio_router">
                                <li class="portfolio_list">GRAPHIC DESIGN</li>
                            </router-link>
                            <router-link href="https://jean70212.wixsite.com/17huang/%E5%89%AF%E6%9C%AC-%E5%B9%95%E5%BE%8C%E8%8A%B1%E7%B5%AE-%E6%B4%BB%E5%8B%95%E7%B4%80%E9%8C%84-behind-the-scenes" target="_blank" class="portfolio_router">
                                <li class="portfolio_list">PHOTOGRAPHY</li>
                            </router-link>
                        </ul>
                    </li>
                    <router-link to="/autobiography">
                        <li class="nav_text">AUTOBIOGRAPHY</li>
                    </router-link>
                    <!-- <li class="nav_text">CONTACT</li> -->
                </ul>
            </nav>
            
        </div>
</template>

<script setup>
import $ from "jquery";

$(document).ready(function(){

let nav_text = $(".nav_text")

    nav_text.click(function(e){
        // event.preventDefault();

        nav_text.each(function(){
            nav_text.removeClass("choese")
        })
        $(this).addClass("choese")


        // $(".portfolio_lists").slideToggle()
        if( $(this).hasClass("portfolio")){
            $(".portfolio_lists").slideToggle()
            // $(".nav_text:before").hide()
        }else{
            $(".portfolio_lists").slideUp()
        }
    })

    $(document).click(function(e){
        if(!$(e.target).closest(".nav_wrap").length)
        $(".portfolio_lists").slideUp()
    })

    // 漢堡線

    var match = window.matchMedia('screen and (max-width: 959px)')


    $(".hamwrap").click(function toggleNav(e){
        // $(".nav_wrap").slideToggle()
        $(".nav_wrap").toggleClass("show")
            
        $(this).toggleClass("active")
    })



  
        if($(window).width() < 960 ){
            $(".nav_text:not(.portfolio)" ).click(function(){
                $(".nav_wrap").removeClass("show")
                $(".hamwrap").removeClass("active")
            })
            $(".portfolio_list").click(function(){
                $(".nav_wrap").removeClass("show")
                $(".hamwrap").removeClass("active")
            })
        }

    

    toggleNav()

    navHide()

    $(window).resize(function () {
        navHide(); // 當視窗大小改變時執行
    });
})


    


</script>

<style lang="sass" scoped>
@import "../assets/style.scss"
.head
    position: fixed
    background-color: $colorWhite
    z-index: 10
    +size(100%,fit)
    padding-bottom: 40px
    top: 0
    border-bottom: 2px solid $colorBlack
    // overflow-y: hidden

.top
    display: flex
    max-width: 1440px
    width: 100vw
    

    .top_text
        margin-top: -15px
        font-size: 8rem
        -webkit-text-stroke: 1.5px $colorGray
        text-stroke: 1.5px $colorGray
        color: rgba(black , 0)
        position: absolute
        font-weight: 900
        white-space: nowrap
        // font-family: "微軟正黑體"

    .top_text1
        animation: scoll 20s linear infinite 

    .top_text2
        animation: scoll2 20s linear infinite
        // animation-delay: 0.5s

@keyframes scoll
    0%
        transform: translateX(0%)
    100%
        transform: translateX(-100%)

@keyframes scoll2
    0%
        transform: translateX(100%)
    100%
        transform: translateX(0%)

nav
    +flex(center,flex-end)
    flex-direction: column

.nav_wrap
    +flex(space-between)
    margin-top: 80px
    padding-right: 5%
    width: 60%
    
    
    // +bor

    .nav_text
        font-size: map-get($fontSize, h3)
        // +bor
        color: $colorOrange1
        // margin-right: 100px
        line-height: 1.5
        cursor: pointer
        position: relative
        transition: .5s
        // z-index: 20

        &:hover
            animation: textColor .5s linear

        &:hover::before
            width: 100%
            animation: navAni .5s linear
            

        &::before  
            content: ''
            background-color: $colorOrange1
            height: 2px
            width: 0
            +poab(initial,initial,0,0)
            z-index: -1
            

        @keyframes navAni
            0%
                height: 100%
            100%
                height: 2px

        @keyframes textColor
            0%,50%
                color: $colorWhite
            100%
                color: $colorOrange1

.choese 
    position: relative

    &::after 
        content:''
        +poab(initial,initial,0,0)
        width: 100%
        height: 2px
        background: $colorOrange1

.portfolio_lists
    +poab(76px,initial,initial ,50%)
    transform: translateX(-50%)
    z-index: 200
    +bor
    display: none

    .portfolio_list
        +size(200px,60px)
        font-size: map-get($fontSize, h4)
        color: $colorOrange2
        background-color: $colorWhite
        line-height: 60px
        text-align: center
        
        
        &:hover
            background-color: $colorOrange1
            color: $colorWhite
        
        &:hover .nav_text::before
            animation: navAni 0

//漢堡線

.hamwrap
    display: none

    .bar
        background-color: $colorOrange1
        +size(48px,3px)
        margin-bottom: 10px

.active .bar1 
  transform: rotate(-45deg) translate(-35%, 25%)

.active .bar2 
  opacity: 0

.active .bar3 
  transform: rotate(45deg) translate(-35%, -25%)


//======= RWD ========//

@include pad-width

    .head
        padding: 0

    .hamwrap
        display: block
        padding: 40px 40px 40px 0
        // border-bottom: 2px solid black
        width: 100%
        +flex(start,flex-end)
        flex-direction: column

        .bar
            background-color: $colorOrange1
            +size(48px,3px)
            margin-bottom: 10px
            transition: .5s

    .nav_wrap
        flex-direction: column
        align-items: center
        width: 100%
        padding: 0
        margin: 0
        border-top: 1px solid black
        height: 0
        overflow: hidden

    .show
        height: initial
        transition: .5s

        


        .nav_text,a
            // +bor
            // margin-bottom: 20px
            width: 100%
            line-height: 3
            text-align: center


            .portfolio_lists
                position: unset
                transform: unset
                border: none
                border-top: 2px solid $colorOrange1
                
                .portfolio_list
                    width: 100%
                    


@include phone-width
    .hamwrap
        padding: 20px 40px 10px 0

        .bar
            width: 40px

    .nav_wrap 
        .nav_text
            font-size: 4rem

    .portfolio_lists 
        .portfolio_list
            font-size: 3rem

    .active .bar1 
        transform: rotate(-45deg) translate(-45%, 105%)

</style>