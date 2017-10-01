# zoomIn
A simple jQuery Plugin that type/zooms text into a control.

Download the ```dist``` directory to get everything you need to start using **zoomin**.

## Demo

You can check out a simple demo [here](http://www.wicked-concept.com/ZoomIn/).

## Installation

#### CSS Installation:

Include the ZoomIn CSS style: **jquery.zoomin.css** or the minified version: **jquery.zoomin.min.css**

```
<link rel="stylesheet" href="yourpath/jquery.zoomin.css" />
```
or
```
<link rel="stylesheet" href="yourpath/jquery.zoomin.min.css" />
```

#### jQuery Installation:

Include a reference to the jQuery Library. I prefer to use Google's CDN.

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
```

#### JS Installation:

Include the ZoomIn JS file: **jquery.zoomin.js** or the minified version: **jquery.zoomin.min.js**

```
<script src="yourpath/jquery.zoomin.js"></script>
```
or
```
<script src="yourpath/jquery.zoomin.min.js"></script>
```

## Usage

Calling **zoomin** on an element it straight forward:

```javascript
$( "#yourId" ).zoomin({
  text: "I'm using the zoomin plugin!",
  onComplete: function () {
    console.log( "onComplete Callback Fired!" );
  }
});
```

ZoomIn has the following three options that can be passed to it:

| Name           | Type     | Default                 |
| -------------- | -------- | ----------------------- |
| **text**       | String   | "No text has been set." |
| **typeSpeed**  | Number   | 50 (type speed in ms)   |
| **onComplete** | Function | null                    |

## Modifying the text style.

If you need to modify the style of the text being added, you can do it one of two ways:

1. Modify the ```.zoom-in``` class contained in **jquery.zoomin.css**

2. Add a style to modify the ```<span>``` element of your container.
```css
#yourcontainer span {
  ...
}
```
