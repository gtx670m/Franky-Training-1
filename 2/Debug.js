export default {
    //debug dùng để chuyển loader sang chế độ debug 
    debug: true, //sẽ bị loại bỏ từ webpack 3 trở lên
    plugins: [
        //Để tương thích với với những loader cũ thì có thể 
        //chuyển sang debug mode thông qua 1 plugin
        new webpack.LoaderOptionsPlugin({
            debug: true
        })
    ]
}