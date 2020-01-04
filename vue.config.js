module.exports={
    devServer: {
            // proxy: {
            //       '/': {
            //         target: 'http://127.0.0.1:5000',
            //       }
            // }
            proxy: {
                '^/api': {
                  target: 'http://localhost:5000/',
                  pathRewrite: { '^/api': '' }
                }
              }
      }
}