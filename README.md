# Box-slide
=========

Box-slide is a free support for tablet style pane navigation. It enables you to create smooth transitions between panes with CSS transitions and minimalistic approach. 

## Use

The component works like a simple extension on a DOM object with couple of properties.
<pre>
$('#box').box({
	boxes: ['box_1', 'box_2', 'box_3', 'box_4'],
	swipe: false
});
</pre>

## Navigation

You can tie the navigation like this (using 'left' or 'right' to control the direction):
<pre>
$('#prev').click(function(){
	$('#box').moveBox('left');
});
</pre>

## Dependencies

jQuery - is required
swipe.js - optional, only when using the feature. 