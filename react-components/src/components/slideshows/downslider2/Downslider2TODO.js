/* !VA 
DONE: Replace all slideshow3 classes with downslider2
DONE: Fix lint errors
DONE: Delete dots and play-pause classes FIX IN SLIDESHOW3
DONE: Disable pager buttons when playing -- comment this in Slideshow3 but leave it for demo purposes
  .prev => downslider2-control downslider2-control-prev
  .next => downslider2-control downslider2-control-next
  .downslider2-controls span => make it a specific selector, see above
  create .downslider2-control-disable
  In Controls, conditionally apply .downslider2-control-disable to prev and next if play === playing
DONE: Get rid of bringrorward in Content - FIX IN SLIDESHOW3
DONE: get rid of conditional styles disableNext and disablePrev  in Controls. comment this in Slideshow3 but leave it for demo purposes
DONE: On reset, disable Prev and enable Next, set firstIndexFlag to true
DONE: Stop slideshow when reached the end and set indexFlags appropriately
  Change setInterval to setTimeout - see docs for the difference but the bottom line is that setTimeout runs the function before the delay and setInterval runs the function after the delay and all the paging works.

IN PROGRESS: Replace display: none with z-index in active/inactive class. 
  zIndex has to be 2 when playing/paused slideshow, otherwise -1
  zIndex has to be 2 when paging
  PROBLEM: When slideshow is NULL, zINdex is always -1, which conflicts with the paging. 

  IF paging OR playing/paused slideshow then zIndex = 2. 
  IF not paging AND playing/paused is NULL, then zIndex = -1
  ELSE Error










TODO: Get rid of multiple conditional style assignment in Content component
TODO: Make the active slide move in from the top


Slideshow3 TODOs
TODO: On reset, disable Prev and enable Next, set firstIndexFlag to true
TODO: Disable Prev button on initial render, just useEffect and set firstIndexFlag to true
TODO: Fix the slideslength ref and prop in Downslider2 and Content
TODO: Get rid of bringrorward in Content - FIX IN SLIDESHOW3
TODO: Disable pager buttons when playing -- comment this in Slideshow3 but leave it for demo purposes
TODO: Stop slideshow when reached the end and set indexFlags appropriately
  Change setInterval to setTimeout - see docs for the difference but the bottom line is that setTimeout runs the function before the delay and setInterval runs the function after the delay. There are too many changes to document here, so just copy the whole useEffect into Slideshow3
TODO: Delete dots and play-pause classes FIX IN SLIDESHOW3
 */
