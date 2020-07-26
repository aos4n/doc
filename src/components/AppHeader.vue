<template>
    <div class="header border-bottom">
        <h2 class="brand">
            <a href="/">
                <img src="../assets/img/aos4n.svg" alt />
                <span>aos4n</span>
            </a>
        </h2>
        <div class="actions">
            <input
                v-model="searchKey"
                @keydown.esc="searchKey = ''"
                type="text"
                class="keyword"
                placeholder="搜索"
                ref="input"
            />
            <div
                class="toggle"
                :class="{'lessThan768': lessThan768}"
                @click="$store.commit('toggleMenu')"
            ></div>
        </div>
        <div class="search-results" v-show="searchList.length">
            <div
                v-for="(a, i) in searchList"
                :key="i"
                class="search-item"
                @click="$router.push(a.path)"
            >{{a.name}}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header {
    height: 50px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;

    .brand {
        a {
            display: flex;
            align-items: center;
            text-decoration: none;
            color: #000;
            img {
                width: 48px;
                height: 48px;
            }
        }
    }

    .actions {
        display: flex;
        align-items: center;

        .keyword {
            padding: 5px 30px;
            font-size: 14px;
            line-height: 1.42857143;
            border: 1px solid #cccccc;
            border-radius: 20px;
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            transition: border-color ease-in-out 0.15s,
                box-shadow ease-in-out 0.15s;
            &.lessThan768 {
                width: 100px;
            }

            &:focus {
                border-color: #66afe9;
                outline: none;
                box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
                    0 0 8px rgba(102, 175, 233, 0.6);
            }
        }

        .toggle {
            display: none;
            width: 32px;
            height: 32px;
            margin-left: 10px;
            background: url("../assets/img/toggle.svg");
            &.lessThan768 {
                display: block;
            }
        }
    }

    .search-results {
        position: absolute;
        top: 50px;
        right: 0;
        text-align: right;
        background-color: #fff;
        box-shadow: 1px 1px 10px #ccc;
        max-height: calc(100% - 50px);
        overflow: auto;
        .search-item {
            padding: 10px 15px;
            cursor: pointer;
            &:hover {
                background-color: #ccc;
            }
        }
    }
}
</style>

<script>
import Fuse from 'fuse.js'
import { menuItems } from '../componentIndex'
export default {
    data() {
        return {
            searchKey: '',
            menuItems: menuItems
        }
    },
    computed: {
        itemList: function () {
            let itemList = []
            this.menuItems.forEach(a => this.getItemList(a, itemList))

            return itemList
        },
        searchList: function () {
            return this.fuseInstance.search(this.searchKey).map(a => a.item)
        },
        fuseInstance() {
            let fuse = new Fuse(this.itemList, {
                shouldSort: true,
                threshold: 0.5,
                location: 0,
                distance: 100,
                maxPatternLength: 32,
                minMatchCharLength: 1,
                keys: [
                    "name"
                ]
            })

            return fuse
        },
        lessThan768: function () {
            return this.$store.getters.lessThan768
        },
    },
    methods: {
        getItemList(item, list) {
            if (item.type == 0) {
                item.files.forEach(a => {
                    this.getItemList(a, list)
                })
            } else {
                list.push(item)
            }
        }
    }
}
</script>