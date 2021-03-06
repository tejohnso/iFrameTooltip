(function toolTip() {
  document.getElementById('aTest').addEventListener('mouseover', function() {
    showFrame('http://www.wired.com');
  });

  var toolTip = document.createElement('iframe');
  toolTip.className = 'tooltip';

  function showFrame(url) {
    event.currentTarget.addEventListener('mouseout', removeFrame);
    toolTip.style.top = (event.clientY + 10) + 'px';
    toolTip.style.left = (event.clientX + 10) + 'px';
    toolTip.src=url;
    document.body.appendChild(toolTip);
  }

  function removeFrame() {
    document.body.removeChild(toolTip);
    event.currentTarget.removeEventListener('mouseout', removeFrame);
  }
}());
