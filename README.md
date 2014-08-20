## LESS grid system

Are you looking for a lean, responsive and markup-independent LESS grid system that just works?

You've just found it - the flexible LESS grid system to kick-start your projects.

**Tested in latest:** IE, Chrome, Firefox, Opera, Safari, Safari Mobile.

License: [MIT](LICENSE)

## Table of contents
1. [Getting started](#getting-started)
2. [Basic usage](#basic-usage)
	* [Configuring variables](#configuring-variables)
    * [Creating columns](#creating-columns)
    * [Pushing &amp; pulling](#pushing--pulling)
3. [Advanced usage](#advanced-usage)
	* [Changing grid settings on the fly](#changing-grid-settings-on-the-fly)
    * [Fluid grid](#fluid-grid)
    * [Nested grids](#nested-grids)
4. [Examples](#examples)
5. [Acknowledgements](#acknowledgements)


## Getting started

Install with [Bower](http://bower.io/):

```
bower install less-grid-system
```

or [NPM](https://www.npmjs.org/):

```
npm install less-grid-system
```

or download the source code from [GitHub](https://github.com/goodpixels/less-grid-system/zipball/master)

## Basic usage

LESS grid system does not clutter your markup with unnecessary classes.

You write column declarations directly in your stylesheet.

### Configuring variables

Default configuration will create a 12-column 1180px grid.

You can change the number, size and gutter of columns and adjust the breakpoint for the grid, by changing the variables in the `grid.less` file.

```
// Defaults
@gridBreakpoint:	480px;
@gridColumnCount:	12;
@gridGutter:		20;
@gridColumn:		80;
```

### Creating columns

To create a column, call the column mixin:

```
#grid > .column( [ number of columns: 1 ], [ responsive: true ], [ auto clear margins: true ] )
```

All arguments are optional.

You don't need to worry about things like *first* or *last* classes - the mixin will only add gutters where necessary.

If you want to disable this behavior, you can pass an optional `@autoClearMargins: false` to the mixin.

By default, all columns are responsive, and will drop down on smaller screens, stacking on top of each other. You can disable this feature by setting the `@responsive` argument to `false` when calling the mixin.

### Pushing &amp; pulling

You can either *push*:

```
#grid > .push( [ number of columns to push by ] );
```

or *pull* a column:

```
#grid > .pull( [ number of columns to pull by ] );
```

## Advanced usage

LESS grid system was designed with flexibility in mind, so you can customize it however you want.

### Changing grid settings on the fly

You can either alter global variables or alternatively you can change them on the fly by creating a new instance of the grid mixin.

This is useful, when you want to use more than one version of the grid on one website.

You can define a new instance of the grid by calling the core mixin with new parameters:

```
// Define grid instances
#grid16 { #dynamicGrid( 16, 55, 20 ); }
#grid24 { #dynamicGrid( 24, 30, 20 ); }
```
Syntax is as follows:

```
#[ reference name ] { #dynamicGrid( [ number of columns ], [ column width ], [ gutter size ] ) }
```

Then you can use it in your stylesheet by simply calling the reference:

```
.my-grid-16 {

	#grid16 > .container;

	.column { #grid16 > .column; }

}

.other-grid-24 {

	#grid24 > .container;

	.column { #grid24 > .column; }

}
```

### Fluid grid

By default, *all grids have a fixed width defined by the wrapping container* - but you can make them fluid by setting the container width to `auto` or `100%`.

The following snippet will create a fluid grid, with column sizes proportional to the fixed grid.

```
.container {

	width: auto;

	.column { grid > .column( 3 ); }

}

.container {

	width: 75%;

	.column { grid > .column( 3 ); }

}
```

### Nested grids

If you want to create a column containing nested columns inside it, switch to:

```
#grid > .columnOuter;
```

instead of:

```
#grid > .column;
```

You will also need to wrap inner columns in a new element, giving it the `.row` class.

## Examples


* [Default](http://htmlpreview.github.io/?https://raw.githubusercontent.com/goodpixels/less-grid-system/master/examples/default.html) [ [source](examples/less/default.less) ]
* [Custom (16 columns)](http://htmlpreview.github.io/?https://raw.githubusercontent.com/goodpixels/less-grid-system/master/examples/custom-16.html) [ [source](examples/less/custom-16.less) ]
* [Custom (24 columns)](http://htmlpreview.github.io/?https://raw.githubusercontent.com/goodpixels/less-grid-system/master/examples/custom-24.html) [ [source](examples/less/custom-24.less) ]
* [Fluid](http://htmlpreview.github.io/?https://raw.githubusercontent.com/goodpixels/less-grid-system/master/examples/fluid.html) [ [source](examples/less/fluid.less) ]
* [Four columns](http://htmlpreview.github.io/?https://raw.githubusercontent.com/goodpixels/less-grid-system/master/examples/four-columns.html) [ [source](examples/less/four-columns.less) ]
* [Pull](http://htmlpreview.github.io/?https://raw.githubusercontent.com/goodpixels/less-grid-system/master/examples/pull.html) [ [source](examples/less/pull.less) ]
* [Push](http://htmlpreview.github.io/?https://raw.githubusercontent.com/goodpixels/less-grid-system/master/examples/push.html) [ [source](examples/less/push.less) ]
* [Sidebar](http://htmlpreview.github.io/?https://raw.githubusercontent.com/goodpixels/less-grid-system/master/examples/sidebar.html) [ [source](examples/less/sidebar.less) ]
* [Double sidebar](http://htmlpreview.github.io/?https://raw.githubusercontent.com/goodpixels/less-grid-system/master/examples/sidebar-double.html) [ [source](examples/less/sidebar-double.less) ]
* [One level nested](http://htmlpreview.github.io/?https://raw.githubusercontent.com/goodpixels/less-grid-system/master/examples/nested-one-level.html) [ [source](examples/less/nested-one-level.less) ]
* [Two levels nested](http://htmlpreview.github.io/?https://raw.githubusercontent.com/goodpixels/less-grid-system/master/examples/nested-two-levels.html) [ [source](examples/less/nested-two-levels.less) ]

## Acknowledgements

The idea behind LESS grid system was hugely inspired by [Twitter Bootstrap](http://getbootstrap.com/) and [The Semantic Grid System](http://semantic.gs/).