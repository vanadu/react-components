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





IN PROGRESS: Replace display: none with z-index in active/inactive class. 
  zIndex has to be 2 when playing/paused slideshow, otherwise -1
  zIndex has to be 2 when paging
  PROBLEM: When slideshow is NULL, zINdex is always -1, which conflicts with the paging. 

  IF paging OR playing/paused slideshow then zIndex = 2. 
  IF not paging AND playing/paused is NULL, then zIndex = -1
  ELSE Error









TODO: Disable Prev button on initial render 
TODO: Get rid of multiple conditional style assignment in Content component
TODO: Make the active slide move in from the top



 */
