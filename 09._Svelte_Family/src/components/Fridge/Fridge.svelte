<script>
    import { fridgeMessages } from "../../stores/fridgeMessageStore";

    /* import { BASE_URL } from "../../stores/generalStore"; */

    export let fridgeHeight = 40;

    console.log($fridgeMessages)
    /* console.log(BASE_URL) */
</script>

<div class="fridge" style="min-height: {fridgeHeight}vh">

    {#each $fridgeMessages as message}
        <p>{message.creator ?? "Title"}: {message.message}</p>
        {/each}
</div>

<style>
    .fridge {
        background-color: red;
        color: black;
        border-radius: 1.5em;
    }
</style>