<script>
    export let parentName;
    export let myChildren;

    let treasureChest = ["🔱", "🏅", "⭐️", "🔑", "🏆", "👑", "🌟"];

    import Child from "../Child/Child.svelte";

    import { fridgeMessages } from "../../stores/fridgeMessageStore";
  import Fridge from "../Fridge/Fridge.svelte";

    function handleShowLove(childName){
        console.log(`${parentName} is loved by ${childName} veeeery much`)
    }
    function handleTakeItem(childName){
        treasureChest.pop()
        console.log(`${childName} took an item from ${parentName}'s Treasure chest'`)
        treasureChest = treasureChest;
    }

    function clearFridge(){
        fridgeMessages.set([{ message: "Svelte family Fridge" }])

    }
            // assignment give parenst the powe to clear the fridge
</script>

<h1> {parentName} </h1>


<button on:click={clearFridge}> Clear Fridge</button>

<p>
{#each treasureChest as treasure}
    {treasure + " "}
{/each}
</p>
{#each myChildren as child}
    <Child child={child} onShowLove={handleShowLove} onTakeItem={handleTakeItem}/>
{/each}


<!-- pass eact set of children to each parent -->