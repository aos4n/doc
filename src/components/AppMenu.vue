<style lang="scss" scoped>
.menu {
    width: 280px;
    padding: 15px;
    overflow-y: auto;
    flex-shrink: 0;
    box-sizing: border-box;
}

.menu.hidden {
    display: none;
}

.menu .dir {
    padding-left: 15px;
}

.menu .title {
    margin-left: -15px;
    padding: 5px;
    cursor: default;
}

.menu .dir > .title::before {
    content: "+";
    width: 20px;
    text-align: left;
    display: inline-block;
}

.menu .dir.on > .title::before {
    content: "-";
}

.menu .file {
    display: block;
    text-decoration: none;
    color: #000;
    padding: 5px;
}

.menu .file.on,
.menu .file:hover {
    color: darkseagreen;
    text-decoration: underline;
}

.menu .files {
    display: none;
    padding-left: 5px;
}

.menu .dir.on > .files {
    display: block;
}

.menu.lessThan768 {
    position: absolute;
    top: 50px;
    background-color: #fff;
    max-height: calc(100% - 50px);
    overflow: auto;
    border: none;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
        0 0 8px rgba(102, 175, 233, 0.6);
}
</style>

<script>
import { menuItems } from '../componentIndex'
export default {
    render(h) {
        return h('div', {
            attrs: {
                class: 'menu border-right' + (this.lessThan768 ? ' lessThan768' : '') + (this.shown ? '' : ' hidden'),
            }
        }, this.turnFiles(this.menuItems, h))
    },
    data() {
        let menuFileList = []
        menuItems.forEach(a => this.scanFile(a, b => {
            if (b.type == 1) {
                b.on = false
                menuFileList.push(b)
            }
        }))
        return {
            menuItems,
            menuFileList,
            shown: true
        }
    },
    computed: {
        lessThan768: function () {
            return this.$store.getters.lessThan768
        }
    },
    watch: {
        $route(val) {
            let path = val.path
            this.menuFileList.forEach(a => {
                a.on = a.path == path
            })
        },
        '$store.state.menuShown'(val) {
            this.shown = val
        },
        lessThan768(val) {
            this.shown = !val
        }
    },
    mounted() {
        let path = this.$route.path
        this.menuFileList.forEach(a => {
            a.on = a.path == path
        })
    },
    methods: {
        turnFiles(files, h) {
            return files.map(a => {
                if (a.type == 0) {
                    return this.turnDir(a, h)
                }
                return this.turnFile(a, h)
            })
        },
        turnFile(file, h) {
            return h('a', {
                attrs: {
                    class: 'file' + (file.on ? ' on' : ''),
                    href: file.path
                },
                on: {
                    click: (e) => {
                        e.preventDefault()
                        this.$router.push(file.path)
                    }
                }
            }, file.name)
        },
        turnDir(dir, h) {
            return h('div', {
                attrs: {
                    class: 'dir' + (dir.on ? ' on' : '')
                }
            }, [
                h('div', {
                    attrs: {
                        class: 'title'
                    },
                    on: {
                        click: () => {
                            dir.on = !dir.on
                        }
                    }
                }, dir.name),
                h('div', {
                    attrs: {
                        class: 'files'
                    }
                }, this.turnFiles(dir.files, h))
            ])
        },
        scanFile(file, handler) {
            if (file.type == 0) {
                file.files.forEach(a => this.scanFile(a, handler))
            }
            handler(file)
        }
    }
}
</script>