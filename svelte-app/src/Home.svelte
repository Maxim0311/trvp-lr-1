<script>
  import { each } from "svelte/internal";
  import Card from "./Card.svelte";
  const items = [
    {
      img: 'https://spb.sotovik.shop/upload/resize_cache/iblock/6a7/400_400_140cd750bba9870f18aada2478b24840a/roa29ocrgtzrqs4629e9wu1nlmz0txwz.jpg',
      title: 'IPhone 14 Pro Max',
      price: 129999,
    },
    {
      img: 'https://spb.sotovik.shop/upload/resize_cache/iblock/d20/400_400_140cd750bba9870f18aada2478b24840a/0g36o4cjy0okfq498eclog01sablxtfy.jpg',
      title: 'IPhone 12 Pro',
      price: 45000,
    },
    {
      img: 'https://spb.sotovik.shop/upload/resize_cache/iblock/1e4/400_400_140cd750bba9870f18aada2478b24840a/j72qf1iq4y62n0x2gy1a8b85w343ph0u.jpeg',
      title: 'IPhone 13 Pro',
      price: 89000,
    },
  ];
</script>
<div>
    {#each items as item, index}
		<Card img={item.img} title={item.title} price={item.price}></Card>
	{/each}
</div>

<style>

    div {
        padding-top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    img {
        width: 250px;
        height: 200px;
    }

    @media screen and (max-width: 768px) {
        div {
            padding-top: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

@media screen and (max-width: 768px) {
    img {
        padding-top: 20px;
  }
}
    
</style>