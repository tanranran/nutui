#  Signature autograph

### Intro
    
Signature component based on canvas.

### Install

``` javascript
import { createApp } from 'vue';
// vue
import { Signature} from '@nutui/nutui';

const app = createApp();
app.use(Signature);

```
    



### Basic usage

:::demo

```html
<template>
  <nut-signature  
    @confirm="confirm" 
    @clear="clear"
  ></nut-signature>
  <p class="demo-tips demo">Tips: click the confirm button, and the signature image is displayed below</p>
</template>
<script>
export default {
    props: {},
    setup() {
        const confirm = (canvas, data) => {
            let img = document.createElement('img');
            img.src = data;
            document.querySelector('.demo').appendChild(img);
        };
        const clear = () => {
            let img = document.querySelector('.demo img'); 
            if (img) {
                img.remove();
            }
        }
        return { confirm, clear };
    }
}
</script>
<script>
import { reactive } from 'vue';
export default {
  props: {},
  setup() {
    const confirm = (canvas, data) => {
        let img = document.createElement('img');
        img.src = data;
        document.querySelector('.demo').appendChild(img);
    };
    const clear = () => {
        let img = document.querySelector('.demo img'); 
        if (img) {
            img.remove();
        }
    }
    return { confirm, clear };
  }
};
</script>
```
:::
### Modify color and signature thickness

:::demo

```html
<template>
  <nut-signature  
    :lineWidth="lineWidth" 
    :strokeStyle="strokeStyle"
    @confirm="confirm" 
    @clear="clear"
  ></nut-signature>
  <p class="demo-tips demo">Tips: click the confirm button, and the signature image is displayed below</p>
</template>
<script>
import { reactive } from 'vue';
export default {
  props: {},
  setup() {
    const state = reactive({
      lineWidth: 4,
      strokeStyle: 'green'
    });
    const confirm = (canvas, data) => {
        let img = document.createElement('img');
        img.src = data;
        document.querySelector('.demo').appendChild(img);
    };
    const clear = () => {
        let img = document.querySelector('.demo img'); 
        if (img) {
            img.remove();
        }
    }
    return { ...state, confirm, clear };
  }
};
</script>

```
:::  
## API
    
### Props
    
| Attribute | Description | Type   | Default 
|----- | ----- | ----- | ----- 
| custom-class | Custom class | String | -
| line-width | Width of line | Number | 3
| stroke-style | Drawing stroke color | String | '#000'
| type | Picture format | String | 'png'
| un-support-tpl | Display copy without canvas | String | 'sorry, the current browser doesn't support canvas, so we can't use this control! '

### Events

| Event | Description   | Arguments   |
|----- | ----- | ----- 
|start `v3.2.0` | signature start callback function (refers to the beginning of a stroke) | none
|signing `v3.2.0`| the callback function being signed (refers to a stroke in progress) | event
|end `v3.2.0`| signature end callback function (refers to the end of a stroke) | none
| confirm | Click the confirm button to trigger the event callback function | `canvas and signature image display data URI，<br/>If not drawn, returns a tooltip and an empty data URI`
| clear | Click the re sign button to trigger the event callback function | -