# Responsive-Images
Demo of using a responsive image to load different types of image on different devices and screens using the `srcset` and `sizes` attributes

See it in action - https://responsive-images.pages.dev/

## Video Tutorial

[<img src="https://user-images.githubusercontent.com/23727670/188132872-c98a177a-b7e1-4035-a96c-f1b3aaed5076.jpg" width="320" height="180" height=""/>](https://youtu.be/97TGWROPyUE)

## Video demo:

https://user-images.githubusercontent.com/23727670/187479618-c7eba905-5f41-4cc4-908b-3117ba215679.mp4

## How to add multiple images?

```html
<img
  width="500"
  height="500"
  srcset="
    ./images/doggo-250w.webp   250w,
    ./images/doggo-500w.webp   500w,
    ./images/doggo-750w.webp   750w,
    ./images/doggo-1000w.webp 1000w,
    ./images/doggo-1500w.webp 1500w
  "
  sizes="(min-width: 800px) 500px, (min-width: 500px) calc(50vw - 2px), 100vw"
  alt="a cute doggo eating icecream"
/>
```
