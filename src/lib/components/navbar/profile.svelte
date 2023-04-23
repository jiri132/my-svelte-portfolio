<script lang="ts">
    import { contactOptions } from "./contactOptions.svelte";
    import { profileData } from "./data"; 
</script>



<div class="main" >
    <img src={profileData.profileURL} alt="image of " >
    <div class="flex-column">
        <h2>
            {profileData.firstname} {profileData.lastname}
        </h2>
        <h4>
            Born {profileData.birthDate.getFullYear()} | {new Date().getFullYear() - profileData.birthDate.getFullYear()}
        </h4>
    </div>
    <div class="contacts flex-wrapped">
        {#each contactOptions as co, i }
        <div>
            <a href={co.url} target="_blank" class="icon">
                <!-- <span class="iconify-inline" data-icon={co.icon}></span> -->
                <img src={co.icon} alt={co.platform}>
            </a>
        </div>
        {/each}
    </div>
</div>

<style lang="scss">
    .main {
       // visibility:hidden;
        display: flex;
        flex-direction: row;

        // background-color: green;
        // border: 2px solid red;
        // border-radius: 10px;

        padding: 5px 10px 5px 5px;
        margin: 10px 0px 0px 10px;

        // @media (max-width: 1023px) {
        //     visibility: visible;
        // }

        img {
            height: 72px;
            width: 72px;

            background-color: rgb(0, 0, 0);
            border: 2px solid gray;
            border-radius: 100px;

            margin-right: 10px;
        }

        .flex-column {
            margin-top: 5px;
            display: flex;
            flex-direction: column;
            text-align: left;
            h2,h4 {
                width: max-content;
                //padding-right: 10px;
                margin: 0;
            }

        }
        .flex-wrapped {
            //margin-left: 10px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: flex-end;
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
                width: 30px;
                height: 30px;

                background-color: rgb(184, 184, 184);
                //padding-top: 10px;
                padding: 13px 5px 3px 5px;
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
    }
</style>