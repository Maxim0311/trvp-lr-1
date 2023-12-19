<script>
  	import { Router, Route, Link } from 'svelte-routing';
</script>
<header>
        <div>
            logo
        </div>
        <div class="button-content">
            <Router>
              <nav> 
                <button><Link to="/Home" >Home</Link></button>
                <button ><Link to="/login" >Login</Link></button>
              </nav>
            </Router>
        </div>
</header>
<style>
     header {
  background-color: #d9d9d9;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
.button-content{
    display: flex;
}
button {
  border-radius: 25px;
}

button:hover {
    opacity: 50%;
}

:global(a) {
        text-decoration: none;
        width: 100px;
        display: block;
        
    }

    :global(a:visited) {
      color: black;
    }

    :global(a:hover) {
      color: black;
      text-decoration: none;
    }


@media screen and (max-width: 768px) {
    .button-content {
        flex-direction: column;
        align-items: center;
  }
}
@media screen and (max-width: 768px) {
    header {
    flex-direction: column;
    align-items: flex-start;
    align-items: center;
  }
}


</style>
 