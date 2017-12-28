<template>
  <div id="app" class="container-fluid">
    
    <button @click="demoModal=true">open modal with select</button>

       <vodal :width="380" :height="420" :show="demoModal" @hide="demoModal = false" class="modal-default">
          <div class="dialog-content content">
            <div class="wrapper">
             <stf-select v-model="value">
                    <div slot="label">Input address</div>
                    <div slot="value">
                        <div v-if="value">
                            <span>{{value.title}}</span>
                        </div>
                    </div>
                    <div slot="search-input">
                        <input @input="onsearch">
                    </div>
                    <section class="options delivery_order__options">
                        <stf-select-option v-for="item of listFinded"
                                            :key="item.id"
                                            :value="item"
                                            :class="{'stf-select-option_selected': item.id === (value && value.id)}">
                            <span><div class="item-text">{{item.title}}</div></span>
                        </stf-select-option>
                    </section>
                </stf-select>
                </div>
          </div>
          <div class="actions">
          </div>
        </vodal>


<br><br><br><br><br><br>
<label>Normal select</label>
<div class="wrapper">
     <stf-select v-model="value">
                    <div slot="label">Input address</div>
                    <div slot="value">
                        <div v-if="value">
                            <span>{{value.title}}</span>
                        </div>
                    </div>
                    <div slot="search-input">
                        <input @input="onsearch">
                    </div>
                    <section class="options delivery_order__options">
                        <stf-select-option v-for="item of listFinded"
                                            :key="item.id"
                                            :value="item"
                                            :class="{'stf-select-option_selected': item.id === (value && value.id)}">
                            <span><div class="item-text">{{item.title}}</div></span>
                        </stf-select-option>
                    </section>
                </stf-select>
</div>
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      demoModal: false,
       value: {
              id: 1,
              title: 'aaaaaaa'
          },
          listFinded: [],
          themes: [{
                  id: 1,
                  title: 'bbbbbb'
              },
              {
                  id: 43,
                  title: 'bbbccbbb'
              },
              {
                  id: 54,
                  title: 'bbbaabbb'
              },
              {
                  id: 2,
                  title: 'cccccdd'
              },
                {
                  id: 2,
                  title: 'ddddddaaa'
              }]
    }
  },
  methods: {
      onsearch(e) {
        if (e.target.value) {
            this.listFinded = this.themes.filter(el => el.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1);
        } else {
            this.listFinded = this.themes;
        }
  }
  }
}
</script>

<style>
.wrapper {
  width: 200px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* -- common -- */
.vodal,
.vodal-mask {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
}

.vodal {
    position: fixed;
}

.vodal-mask {
    position: absolute;
    background: rgba(0, 0, 0, .3);
}

.vodal-dialog {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 101;
    padding: 15px;
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .2);
}

.vodal-close {
    position: absolute;
    cursor: pointer;
    top: 16px;
    right: 16px;
    width: 16px;
    height: 16px;
    z-index: 9999;
}

.vodal-close:before,
.vodal-close:after {
    position: absolute;
    content: '';
    height: 2px;
    width: 100%;
    top: 50%;
    left: 0;
    margin-top: -1px;
    background: #999;
    border-radius: 100%;
    -webkit-transition: background .2s;
    transition: background .2s;
}

.vodal-close:before {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}

.vodal-close:after {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
}

.vodal-close:hover:before,
.vodal-close:hover:after {
    background: #333;
}

/* -- fade -- */
@-webkit-keyframes vodal-fade-enter {
    from {
        opacity: 0;
    }
}

@keyframes vodal-fade-enter {
    from {
        opacity: 0;
    }
}

.vodal-fade-enter-active {
    -webkit-animation: vodal-fade-enter both ease-in;
    animation: vodal-fade-enter both ease-in;
}

@-webkit-keyframes vodal-fade-leave {
    to {
        opacity: 0
    }
}

@keyframes vodal-fade-leave {
    to {
        opacity: 0
    }
}

.vodal-fade-leave-active {
    -webkit-animation: vodal-fade-leave both ease-out;
    animation: vodal-fade-leave both ease-out;
}

</style>
