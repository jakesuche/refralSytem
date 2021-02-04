module.exports = {
    devServer: {
      proxy: {
        "^/api": {
          target: "http://localhost:8045",
          ws:true,
          secure:false
        },
      },
    },
  };