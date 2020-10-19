<template>
    <div class="goodslist">
        <div
            class="st_list_son"
            v-for="(item, index) in goodslist"
            :key="index"
            :class="{
                last_st_list_son: index + 1 == goodslist.length ? true : false,
            }"
        >
            <div class="st_list_son_icon">
                <img :src="item.imgSrc" width="100%" alt="" />
            </div>
            <div class="st_list_son_text">
                <p>{{ item.name }}</p>
                <p>月售{{ item.salescount }}</p>
                <p><span>￥</span>{{ item.price }}</p>
                <div>
                    <van-icon
                        name="close"
                        size="20"
                        color="#d6d2c4"
                        @click="delCart(index)"
						v-show="item.number == 0 ? false : true"
                    />
                    <span>{{ item.number }}</span>
                    <van-icon
                        name="add"
                        size="20"
                        color="#ff9642"
                        @click="addCart(index)"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "GoodsList",
    props: ["goodslist"],
    data() {
        return {

		};
    },
    methods: {
        addCart(index) {
            let cart_data = this.$store.state.cart;
			let temp_store = this.goodslist[index].storeid
			let temp_id = this.goodslist[index].goodsid
            if (cart_data.hasOwnProperty(temp_store)) {
				if (cart_data[temp_store].hasOwnProperty(temp_id)) {
					++cart_data[temp_store][temp_id].number;
				}else{
					cart_data[temp_store][temp_id] = {}
                	cart_data[temp_store][temp_id].price = this.goodslist[index].price;
                	cart_data[temp_store][temp_id].number = 1;
				}
            } else {
				cart_data[temp_store] = {}
				cart_data[temp_store][temp_id] = {}
                cart_data[temp_store][temp_id].price = this.goodslist[index].price;
				cart_data[temp_store][temp_id].number = 1;
			}
			this.$store.commit("setCart", cart_data);
			this.$emit('update_cart')
			this.updateData()
        },
        delCart(index) {
			let cart_data = this.$store.state.cart;
			let temp_store = this.goodslist[index].storeid
			let temp_id = this.goodslist[index].goodsid
            /* if (cart_data.hasOwnProperty(temp_store)) {
				if (cart_data[temp_store].hasOwnProperty(temp_id)) {
					if(cart_data[temp_store][temp_id].number > 1)
						--cart_data[temp_store][temp_id].number
					else
						cart_data[temp_store][temp_id].number = 0
				}else{
					cart_data[temp_store][temp_id] = {}
                	cart_data[temp_store][temp_id].price = this.goodslist[index].price;
                	cart_data[temp_store][temp_id].number = 1;
				}
            } else {
				cart_data[temp_store] = {}
				cart_data[temp_store][temp_id] = {}
                cart_data[temp_store][temp_id].price = this.goodslist[index].price;
				cart_data[temp_store][temp_id].number = 1;
			} */
			if(cart_data[temp_store][temp_id].number > 1)
				--cart_data[temp_store][temp_id].number
			else
				cart_data[temp_store][temp_id].number = 0
			this.$store.commit("setCart", cart_data);
			this.$emit('update_cart')
			this.updateData()
		},
		updateData() {
			let temp_data = this.$store.state.cart
			temp_data = temp_data[this.storeid];
			console.log(this.storeid)
			for (let goodsId in temp_data) {
				for (let key in this.goodslist) {
					if(goodsId == this.goodslist[key].goodsid){
						this.goodslist[key].number = temp_data[goodsId].number
					}
				}
			}
		}
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.st_list_son {
    width: 100%;
    height: 90px;
    background-color: #ffffff;
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid rgb(209, 209, 209);

    .st_list_son_icon {
        position: absolute;
        float: left;
        height: 70px;
        width: 70px;
        border-radius: 10px;
        overflow: hidden;
        z-index: 1;
    }

    .st_list_son_text {
        position: relative;
        float: left;
        width: 100%;
        height: 100%;
        padding-left: 90px;
        box-sizing: border-box;

        p:nth-child(1) {
            font-size: 16px;
            font-weight: 600;
            line-height: 25px;
        }

        p:nth-child(2) {
            font-size: 12px;
            line-height: 20px;
            color: rgb(92, 91, 91);
        }

        p:nth-child(3) {
            font-size: 16px;
            line-height: 30px;
            color: #ff414d;

            span {
                font-size: 12px;
            }
        }

        div {
            position: absolute;
            right: 10px;
            bottom: 0px;

            span {
                margin: 0 5px;
                vertical-align: 5px;
            }
        }
    }
}

.last_st_list_son {
    border: 0px;
}
</style>
