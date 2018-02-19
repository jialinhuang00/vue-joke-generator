# Notes

Here's the project using `vuex` to centralize and manage data. It's a tool just like `Redux` framework used in `React` library.

## 檔案職責:


* index.js 	

  ```js
  const state = {
    jokes: []
  }
  export default new Vuex.Store({
    state,
    mutations,
    actions
  })
  ```
* actions.js

    定義行為，commit(constant, data)

    ```js
    export const initJokes = ({ commit }) => {
      fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten', {
        method: 'GET'
      })
        .then(res => res.json())
        .then(json => {
          console.log(json);
          commit(types.INIT_JOKES, json)
        })
    }

    export const addJoke = ({ commit }) => {
      fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke', {
        method: 'GET'
      })
        .then(res => res.json())
        .then(json => {
          commit(types.ADD_JOKE, json)
        })
    }
    export const removeJoke = ({ commit }, index) => {
      commit(types.REMOVE_JOKE, index)
    }

    ```

* mutation-types.js
    
    像`react`使用的`redux`的`constant.js`，用大寫名字定義行為，給`action.js`以及`mutation.js`使用
    
* mutations.js
    
    修改到中央的state
    ```js 
    export const mutations = {
    [types.INIT_JOKES](state, payload) {
      state.jokes.push(...payload)
    },
    [types.ADD_JOKE](state, payload) {
      state.jokes.push(payload)
    },
    [types.REMOVE_JOKE](state, index) {
      state.jokes.splice(index, 1)
    }
  }
    ```
