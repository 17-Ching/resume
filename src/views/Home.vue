<script setup>


</script>

<template>
    <div class="wrapper">
        
        <div class="welcome">
            <div class="welcome_text">
                <div class="text1">WELCOME</div>
                <div class="text2">I-CHING</div>
                <div class="text3">PORTFOLIO</div>
            </div>
            <img class="welcome_photo" src="../assets/images/p01.jpg" alt="">
        </div>

    </div>
</template>



<style lang="sass" scoped>

@import "../assets/style.scss"

.wrapper
    // background-color: $colorBlue1
    +size(100%,100vh)
    margin-top: 100px

.welcome
    +flex(end,flex-end)
    +size(100%)
    // +bor
    .welcome_photo
        height: 100%
        // max-width: 800px
        object-fit: cover
        // margin-right: 15%
        
        border-left: 15px solid black
        border-right: 15px solid black
        margin:0 50px

        
        animation: photoMoving 1s both
        // animation-delay: .5s
    
    @keyframes  photoMoving
        0%
            transform: translateX(1000px)
        100%
            transform: translateX(0px)

        

    .welcome_text
        +flex(center,flex-end)
        flex-direction: column
        // align-self: center
        // margin-right: 50px
        // margin-left: 50px
        +poab(30%,initial,initial,10%)
        z-index: 5
        animation: textAni 1s both
        animation-delay: .5s

        .text1,.text2,.text3
            font-size: 12.8rem
            font-weight: 1000
            color: $colorBlack
            // line-height: 1.2
            animation: floating 3s ease-in-out infinite
            animation-delay: .7s

        .text2
            animation-delay: 1s
            color: $colorOrange1
            font-size: 18rem
        .text3
            animation-delay: 1.3s



    @keyframes textAni
        0%
            transform: scale(0) rotate(0deg)
        100%
            transform: scale(1) rotate(1080deg)

    @keyframes floating
        0% 
            transform: translate(0, 0) rotate(0deg)
            
        25% 
            transform: translate(-5px, -5px) rotate(-2deg)
            
        50% 
            transform: translate(0, -10px) rotate(0deg)
        
        75% 
            transform: translate(5px, -5px) rotate(-2deg)
        
        100% 
            transform: translate(0, 0) rotate(0deg)
        
        
//==== RWD ====//

.wrapper
    margin-top: 0

.welcome 
    .welcome_photo
        @media screen and (max-width: 1024px)
            margin: 0
            width: 100%
            
        
        @include pad-width
            

        @include small-pad-width
            

        @include phone-width
        
    .welcome_text
        @media screen and (max-width: 1024px)
            top: 50%
            left: 20%

            .text1,.text3
                color: $colorWhite
                font-size: 10rem
            .text2
                font-size: 16rem
            


</style>