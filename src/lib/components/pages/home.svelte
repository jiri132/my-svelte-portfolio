<script lang="ts">
    let phone : Boolean = (screen.width <= 430) ? true : false;
</script>

<div>
    <p>
        Hey! 👋 <br>
        I'm {#if !phone}Jiri{/if} a Software Developer 👨‍💻 based in the Netherlands 
    </p>

    <!-- {#if !phone}
    <div class="contacts flex-wrapped">
        {#each contactOptions as co, i }
        <div>
            <a href={co.url} target="_blank" class="icon">
                <img src={co.icon} alt={co.platform}>
            </a>
        </div>
        {/each}
    </div>
    {/if} -->
</div>

<style lang="scss">
    p {
        //text-size-adjust:10px;
        font-size:50px;
        font-weight: bold;
        margin-top: calc(14vh + 40px);
        margin-left: 25.5vw;
        margin-right: 25.5vw;
        @media (min-width: 0px) and (max-width: 450px) {
            font-size: 35px;
            margin-top: calc(10vh + 20px);
            margin-left: 20px;
            margin-right: 20px;
        }
        @media (min-width: 451px) and (max-width: 960px) {
            font-size: 50px;
            margin-top: calc(7vh);
            margin-left: 40px;
            margin-right: 40px;
        }
        
    }
    .flex-wrapped {
            //margin-left: 10px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            .icon img {
                max-width: 25px;
                max-height: 25px;

                margin-right: 0;
                fill: white;
                background-color: transparent;
                border: 0px solid gray;
                border-radius: 7px;
                
            }
            .icon {
                width: 35px;
                height: 35px;

                background-color: rgb(184, 184, 184);
                //padding-top: 10px;
                padding: 5px 5px 3px 5px;
                margin-left: 5px;

                margin-bottom: 5px;
                border: 0px solid gray;
                border-radius: 7px;
                align-content: center;
            }
            .icon:hover {
                background-color: white;
                border: 1px solid rgb(107, 107, 107);
            }
            @media (min-width: 410px) {
                margin-top: 10px;
                margin-left: 10px;
            }
        }
</style>