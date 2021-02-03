module.exports = {
    devServer: {
      proxy: {
        "^/api": {
          target: "https://referalgame.herokuapp.com",
          ws:true,
          secure:false
        },
      },
    },
  };