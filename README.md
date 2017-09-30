# ZoomIn
jQuery Plugin that type/zooms text into a control.


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
  text: "I'm using the zoomin plugin!"
});
```

ZoomIn has the following three options that can be passed to it:

| Name           | Type     | Default                 |
| -------------- | -------- | ----------------------- |
| **text**       | String   | "No text has been set." |
| **dur**        | Number   | 50 (type speed in ms)   |
| **onComplete** | Function | null                    |
