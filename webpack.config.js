const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    mode: "development",
    entry: {
        app: "./src/app.js",
        users: "./src/users.js",
    },
    output: {
        path: path.resolve("./public"),
        filename: "js/[name].js",
    },
    plugins: [new VueLoaderPlugin()],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ["vue-loader"],
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
            },
        ],
    },
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js",
        },
    },
};
