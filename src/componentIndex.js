import Vue from 'vue'
let routes = []
let rootDir = {
    files: []
}

function register(requireComponent, isPage) {
    requireComponent.keys().forEach((fileName) => {
        const componentConfig = requireComponent(fileName)
        if (isPage) {
            let path = fileName.replace(/^\./, '').replace(/\.vue$/, '')
            let routePath = componentConfig.default.path || path.replace(/\/\d+\./g, a => '/')

            let arr = path.split('/').filter(a => a)
            if (arr.every(a => /\d+\./.test(a))) {
                let dir = rootDir
                arr.forEach((a, i) => {
                    if (i == arr.length - 1) {
                        dir.files.push({
                            type: 1,
                            name: a,
                            path: routePath
                        })
                    } else {
                        let existedDir = dir.files.find(b => b.name == a)
                        if (existedDir == null) {
                            existedDir = {
                                type: 0,
                                name: a,
                                on: true,
                                files: []
                            }
                            dir.files.push(existedDir)
                        }
                        dir = existedDir
                    }
                })
            }

            routes.push({ path: routePath, component: componentConfig.default })
        } else {
            let componentName = fileName.replace(/\.vue$/, '').split('/').reverse()[0]
            Vue.component(componentName, componentConfig.default)
        }
    })
}

function sort(dir) {
    dir.files.sort((a, b) => {
        return Number.parseInt(a.name.split('.')[0]) - Number.parseInt(b.name.split('.')[0])
    })
    dir.files.forEach(a => {
        a.name = a.name.split('.')[1]
        if (a.type == 0) {
            sort(a)
        }
    })
}

register(require.context('./components', true, /\.vue$/))
register(require.context('./pages', true, /\.vue$/), true)
sort(rootDir)
let menuItems = rootDir.files
export { routes, menuItems }