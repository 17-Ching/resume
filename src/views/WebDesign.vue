<template>
    <div class="web_design">
        <h1 class="portfolio_title">PORTFOLIO</h1>
        <h2 class="web_design_title">WEB DESIGN</h2>

        <!-- ===== 主要專案 ===== -->
        <ul class="web_design_main" >
            <li class="web_design_project" data-aos="fade-up" data-aos-duration="2000">
                <div class="project_top">
               <div class="block1">
                   
                   <h2 class="project_name">ILLUSION LAB</h2>
               </div>
                    <img class="project_photo" src="../assets/images/webp01.jpg" alt="">
                    <div class="project_content">
                        <div class="topic">
                            <h3 class="topic_title">TOPIC</h3>
                            <h4 class="topic_text">沈浸式體驗活動網站</h4>
                        </div>
                        <div class="features">
                            <h3 class="features_title">WEBSITE FEATURES</h3>
                            <h4 class="features_text">
                                活動內容瀏覽<br>
                                訂票<br>
                                客製票卷<br>
                                商品購買浸式體驗活動網站
                            </h4>
                        </div>
                    </div>
                </div>
                <div class="project_bottom">
                    <a href="https://www.behance.net/gallery/211787853/_" target="_blank">
                        <button class="read">READ MORE</button>
                    </a>
                    <a href="https://tibamef2e.com/tid102/g2/" target="_blank">
                        <button class="visit">VISIT THE WEBSITE</button>
                    </a>
                </div>
            </li>
            <li class="web_design_project" data-aos="fade-up" data-aos-duration="2000">
                <div class="project_top">
                    <div class="block1">

                        <h2 class="project_name">CYAN LIGHT STUDIO</h2>
                    </div>
                    <img class="project_photo" src="../assets/images/webp02.jpg" alt="">
                    <div class="project_content">
                        <div class="topic">
                            <h3 class="topic_title">TOPIC</h3>
                            <h4 class="topic_text">攝影工作室網站</h4>
                        </div>
                        <div class="features">
                            <h3 class="features_title">WEBSITE FEATURES</h3>
                            <h4 class="features_text">
                                瀏覽攝影作品<br>
                                預約拍攝時段
                            </h4>
                        </div>
                    </div>
                </div>
                <div class="project_bottom">
                    <a href="https://www.behance.net/gallery/211784603/_" target="_blank">
                        <button class="read">READ MORE</button>
                    </a>
                    <a href="https://17-ching.github.io/cyanLightStudio/" target="_blank">
                        <button class="visit">VISIT THE WEBSITE</button>
                    </a>
                </div>
            </li>
        </ul>

        <!-- 小功能 -->
        <div class="pratice" data-aos="fade-up" data-aos-duration="2000">
            <h2 class="pratice_title">小功能製作</h2>
            <ul class="pratice_lists">
                <li class="pratice_list">
                    <img src="../assets/images/webp03.jpg" alt="" class="pratice_photo">
                    <a href="https://codepen.io/17-HUANG/pen/VYZPgOJ" target="_blank">
                        <button class="pratice_name">CSS ANIMATION</button>
                    </a>
                </li>
                <li class="pratice_list">
                    <img src="../assets/images/webp04.jpg" alt="" class="pratice_photo">
                    <a href="https://codepen.io/17-HUANG/pen/bNbeXME" target="_blank">
                        <button class="pratice_name">Simple Quiz</button>
                    </a>
                </li>
                <li class="pratice_list">
                    <img src="../assets/images/webp05.jpg" alt="" class="pratice_photo">
                    <a href="https://codepen.io/17-HUANG/pen/yyBrryG" target="_blank">
                        <button class="pratice_name">Loading Page</button>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="sass" scoped>
@import "../assets/style.scss"

.web_design
    margin-top: 280px

    .portfolio_title
        margin-left: 20%
        margin-bottom: 200px

    .web_design_title
        text-align: right
        margin: 0 auto
        margin-right: 10%
        margin-bottom: 160px
        color: $colorOrange1
        position: relative
        max-width: 1200px

        &::before
            content: ""
            +poab(50%,initial,initial,-20%)
            +size(100%,3px)
            background-color: $colorOrange1

.web_design_main //ul
    .web_design_project //li
        // +bor
        +size (100%,420px)
        outline:2px solid black 
        margin-bottom: 200px
            

.project_top
    // +bor
    +flex(start)
    +size(100%,85%)
    border-bottom: 2px solid black 

    .block1
        +size(10%,100%)
        // transform: rotate(90deg)
        +flex
        .project_name
            transform: rotate(90deg)
            width: fit
            white-space: nowrap
            color: $colorBlue1

    .project_photo
        +size(45%,100%)
        object-fit: cover
        border-right: 2px solid black
        border-left:  2px solid black
    .project_content
        margin-left: 100px
        .topic
            margin-bottom: 50px


.topic_title,.features_title
    color: $colorOrange2

.topic_text, .features_text
    color: $colorBlack
    line-height: 2

.project_bottom
    +size(100%,15%)
    .read,.visit
        background-color: rgba(black,0 )
        +size(50%,100%)
        color: $colorBlack
        font-size: map-get($fontSize, h4)
        font-family: Oswald
        border: none
        cursor: pointer
        transition: .5s

        &:hover
          background-color: $colorOrange2
          color: $colorWhite  

    .read
        border-right: 2px solid black
        border-left: 2px solid black
    .visit
        border-right: 2px solid black

// ==== 小功能 ==== //

.pratice
    margin: 150px 0 300px 0
    .pratice_title
        color: $colorOrange1
        margin-left: 10%

    .pratice_lists
        // +bor
        // +flex(space-around,flex-start)
        display: grid
        grid-template-columns: 1fr 1fr 1fr
        margin: 100px auto
        // +size(100%,340px)
        max-width: 1400px
 

        .pratice_list
            +bor
            margin: 15px 10px
            
            
            .pratice_photo
                max-width: 500px
                +size(100%,300px)
                object-fit: cover
                border-bottom: 2px solid black
                // +bor
                // padding: 5px
            .pratice_name
                // display: block
                background-color: rgba(black,0)
                +size(100%,initial)
                line-height: 2
                font-size: map-get($fontSize, h4)
                font-family: Oswald
                // border-top: 2px solid black
                padding: 0
                border: none
                transition: .5s
                cursor: pointer

                &:hover
                    background-color: $colorOrange2
                    color: $colorWhite 

            
//RWD
@include pc-width
    .project_top 
        .project_content
            margin-left: 60px
        .project_photo
            width: 50%

    .pratice 
        .pratice_lists
            grid-template-columns: 1fr 1fr 

@include small-pad-width
    .web_design 
        .portfolio_title
            margin-bottom: 100px
        .web_design_title
            margin-bottom: 90px
    .web_design_main 
        .web_design_project
            height: 300px
            margin-bottom: 120px

    .pratice 
        .pratice_lists 
            grid-template-columns: 1fr
            margin-top: 50px
            
            .pratice_list 
                margin: 15px auto
                width: 70%
                .pratice_photo
                    height: 240px
                .pratice_name
                    line-height: 4

    .project_top 
        .project_content
            margin-left: 30px

@include phone-width
    .web_design
        margin-top: 150px
        .web_design_title::before
            left: -35%
    .web_design_main 
        .web_design_project    
            height: 100%
    .project_top
        flex-direction: column
        .block1
            width: 100%
            .project_name
                width: 100%
                transform: rotate(0deg)
                line-height: 2
                border-bottom: 2px solid black
                text-align: center
                

        .project_photo
            width: 100%
            border-bottom: 2px solid black

        .project_content
            width: 100%
            +flex(space-around,flex-start)
            padding: 20px 0

    .project_bottom
        .read,.visit
            line-height: 2.5
            font-size: 3rem

    .pratice .pratice_lists .pratice_list .pratice_name
        font-size: 3rem
        line-height: 2
    h2
        font-size: 4rem
    h3
        font-size: 3.2rem
    h4  
        font-size: 2.8rem
            
                     
        
            

        

</style>