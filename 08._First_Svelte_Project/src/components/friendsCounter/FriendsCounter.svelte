<script>
   export let friendsCounter = 0;
    function alienateFriend(){
        friendsCounter--;
    }
    function getFriends(){
        friendsCounter++;
    }
</script>
<h1> hej ven </h1>



<div> Friends Counter:</div>
<h1> {friendsCounter}</h1>
<button on:click={alienateFriend}> Alienate A Friend</button>
<button on:click={getFriends}>Make Friends</button>