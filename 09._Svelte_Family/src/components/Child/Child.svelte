<script>
    export let child;
    export let onShowLove;
    export let onTakeItem;

    import { fridgeMessages } from "../../stores/fridgeMessageStore";


    let fridgeMessageInputValue = "";

    function submitFridgeMessage(){

        const newFridgeMessage = {
            creator: child.name,
            message: fridgeMessageInputValue
        };
        /* fridgeMessages.set([...$fridgeMessages, newFridgeMessage]) */

        fridgeMessages.update((fridgeMessageStoreValue) => {
            fridgeMessageStoreValue.push(newFridgeMessage)
            return fridgeMessageStoreValue;
        });
        fridgeMessageInputValue = "";

    }
</script>
 <!-- conditional Styling : -->
<div
    class:is-girl={child.isGirl}
    class:is-boy={!child.isGirl}
    class={child.familySheep || "not-a-sheep"}
>
<h3>{child.name}</h3>


<label for="fridgeMessage"> write a message</label>
<input type="text" name="fridgeMessage" placeholder="fridge Message"
    bind:value={fridgeMessageInputValue}

>
<br>
<button on:click={submitFridgeMessage}>Write Fridge Message</button>
<br>
<br>


<button on:click={() => onShowLove(child.name)}>Show Love</button>
<br>
<button on:click={() => onTakeItem(child.name)}> Take Item</button>
</div>

<style>
    .is-girl{
        background-color: blue;
    }
    .is-boy{
        background-color: green;
    }
    .grey-sheep{
        border: 0.5em solid indianred;
    }
    .black-sheep{
        border: 0.5em solid red;
    }
    .not-a-sheep{
        border: 0.5em solid goldenrod;
    }
</style>