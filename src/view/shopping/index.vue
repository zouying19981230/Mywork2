<template>
  <div id="app">
    <h1>购物车示例</h1>
    <p>姓名: {{ $store.state.userInfo.username }}</p>
    <hr />
    <h2>产品</h2>
    <ul>
      <li v-for="product in products" :key="product.id" style="list-style-type:none;">
        {{ product.title }} - {{ product.price }} - 库存{{ product.inventory }}
        <br />
        <button
          :disabled="!product.inventory"
          @click="addProductToCard(product)"
        >
          加入购物车
        </button>
      </li>
    </ul>

    <hr />

    <h2>购物车列表</h2>
    <ul>
      <li v-for="item in this.$store.state.cart.items" :key="item.id" style="list-style-type:none;">
        名称：{{ item.title }}
        <br />
        单价：{{ item.price }}
        <br />
        数量：{{ item.count }}
        <br />
        小计：{{ item.subtotal }}
        <br />
        <button :disabled="!item.count" @click="delFromCart(item)">删除</button>
      </li>
      <b>总计：{{ total }}</b>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Cart",
  computed: {
    products() {
      return this.$store.state.products.all;
    },
    total() {
      let total = 0;
      for (let item of this.$store.state.cart.items) {
        total += item.subtotal;
      }
      return total;
    }
  },
  methods: {
    addProductToCard(product) {
      this.$store.dispatch("cart/addProductToCard", product);
    },

    delFromCart(item) {
      this.$store.dispatch("cart/del", item);
    }
  },

  created() {
    this.$store.dispatch("products/getAllProducts");
  }

};
</script>

<style></style>

