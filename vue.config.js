module.exports = {
    css:{
        loaderOptions:{
            sass:{
                prependData:`@import "@/styles/index.scss";`
            },
            scss:{
                prependData:`@import "@/styles/index.scss";`
            }
        }
    }
}