<script>
  import FriendsCounter from "./components/friendsCounter/FriendsCounter.svelte";
  import Greeter from "./components/Greater/Greeter.svelte"
</script>

<main>

  <Greeter></Greeter>

  <FriendsCounter friendsCounter={5}></FriendsCounter>
</main>

