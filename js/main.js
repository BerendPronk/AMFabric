// box that displays the main model
var paper = Raphael(document.getElementById('modelBox'), document.innerWidth, document.innerHeight);

// import the model SVG if page is opened
window.onload = paper.importSVG('<svg><g id="model"><g id="body"><path id="blank-body" class="st0" fill="#F5AE7D" d="M133,161.4c1.6,5.2,17,41.1,13.5,51.1c-0.7,2.1,1.5,9-2.1,14.6c-3.2,5,1.1,6.3,4.2,0c0.9-1.8,1-4.2,1.6-2.8c0.5,1.3,1.2,6,1.1,7.7c-0.3,4.7,1.4,9.3,2.4,5.3c0.3-1.2,0-10.3,0-10.3s2.1,4.9,2.1,6.2c0,1.4-0.3,6.6,0.3,7.3c0.7,0.7,1.6-0.9,2.4-1.2c0.9-0.3,1.7-5,2.6-6.4c0.9-1.4,0.9-9,0-11.4c-0.9-2.4-7.8-16.2-9.2-23.7c-0.3-1.5-1-16.6-1.9-21.7c-0.9-5-2.4-17.7-4.5-21.5s-2.9-16.8-2.9-20.6c0-3-0.4-15.9-0.6-21.3c-0.5-12.5-0.9-19.4-8.4-22.2c-5.3-2-17.3-2.4-21.9-6.4c-4.3-3.7-1.7-14.7-1.7-14.7s5.4-6.8,6.1-8.5c0.7-1.7,1-5,1-5s3.1,0,3.3-2.3c0.1-2.2,1.6-8.4-0.1-9.4c-1.7-1-3.4,0.1-3.4,0.1s-0.5-10.7-2.8-13.5c-2.3-2.8-5.8-6.1-14.3-6.1c-8.3,0-14.2,4.3-16.2,12.1c-1.2,4.8-0.2,10-0.2,10s-2.8,0-2.4,2.1s0.2,4,1,5.5c0.9,1.6,2.4,2.3,2.4,2.3s0.9,5,2.1,6.6c1.2,1.6,5.4,5.2,5.5,6.1c0.2,0.9,3,12.7-4.7,16.3c-2.8,1.3-9.2,2.3-12.5,2.4c-15.7,0.5-16.8,13.7-17.2,19.6c-0.3,5.9,0.3,36.1-3.8,47c-2.4,6.3-5.9,30.9-6.4,43.1c-0.1,3-5.8,17.1-9.2,23.7c-1.2,2.3-0.9,10,0,11.4c0.9,1.4,1.7,6.1,2.6,6.4s1.7,1.9,2.4,1.2c0.7-0.7,0.3-5.9,0.3-7.3c0-1.4,2.1-6.2,2.1-6.2s-0.7,8.8-0.2,9.9c1.7,3.5,3.1,1.6,2.6-6.1c-0.1-1.6,0.5-5.1,1-6.5c0.5-1.3,0.9,0.9,1.6,2.8c1.7,5,7.6,6.2,4.2,0c-3.2-5.8-1.4-12.5-2.1-14.6s-1.4-12.6,2.3-22.2c4-10.7,14-29.8,12.5-45.9c-0.6-6.6,2.6-26.7,2.6-26.7s2.4,2.4,2.6,4.5c0.2,2.1,1.1,8.8,2.4,11.3c1.2,2.5,2.5,6.3,3.6,14.8c1.7,12.7-15.2,31.2-15.9,50.7c-0.7,21.6,8.4,63.7,9.5,67.7c1.8,6.3-0.1,28.5-1.2,38.5c-1.3,11.3,8.6,50.8,9.4,54.9c1.2,6.5-2.2,35.6,1.1,42.1c2.1,4.2,19,9,15.5-5.2c-2.4-9.9-6.7-35.1-5.3-45.2c0.5-4,0.5-44.4,2-51.9c2.3-11.8,0.1-44.3-0.1-48.8c-0.3-7.8,1.6-38.1,1.6-38.1s1.2,1,3,1c1.8,0,3.2-1,3.2-1s-0.9,28.4-0.6,51.1c0.2,12.8,2.3,31.4,2.7,37.3c0.3,5.9-0.7,56.2,0.2,67.1c0.2,2.4-1.9,21.1-2.6,32.1c-0.8,11.5,15.3,5.2,16.5,0.2c0.5-2-1.5-8-0.9-14.3c0.4-5.1-2.4-27.4,0.2-36.1c4.2-13.7,8.5-34.7,7.3-52.8c-0.4-6.4-0.9-20.3,0.1-23.7c1-3.5,5.3-26.3,6.5-35s2.4-22,1.7-32.6c-0.7-10.6-1.6-19.2-4-27.4c-2.4-8.1-8.3-16.8-8.8-21.3c-0.5-4.5-0.9-13.6,2.2-19.6c3.9-7.6,5.1-15.4,5.4-16.6c0.3-1.2,1.9-1.2,1.9-1.2S131.2,155.8,133,161.4z"/><g id="bellybutton"><g><path class="st1" fill="#BA7749" d="M96.3,173c0,0.3,0.2,0.6,0.2,0.9c0,0.3-0.1,0.6-0.1,0.9c0,0.5,0.8,0.5,0.8,0c0-0.3,0.1-0.7,0.1-1c0-0.3-0.2-0.7-0.2-1C97,172.3,96.2,172.6,96.3,173L96.3,173z"/></g></g><g id="shades"><path class="st2" fill="#EEA06D" d="M72.9,178c-0.8-1.1-1.3-3.3-1.6-6.1c-2.2,4.6-4.4,9.4-6,14.4c5.7-2,13.8-2.2,13.8-2.2S74.6,180.3,72.9,178z"/><path class="st2" fill="#EEA06D" d="M123.5,167c0.2,4.4,0.1,8.6-0.9,10.5c-2.6,5.2-5.7,8.7-5.7,8.7s7.1,2.8,13.6,1.5c-0.5-3.1-1.2-6-2-8.9C127.3,174.7,125.3,170.6,123.5,167z"/><path class="st2" fill="#EEA06D" d="M92.5,76.1c2.1,1.5,5.3,3.5,7.1,4.1c2.8,0.9,7.3-4,7.3-4s0.1,7.4,8,9.7c-1.3-0.5-2.5-1.2-3.4-2c-4.3-3.7-1.7-14.7-1.7-14.7s1.8-2.2,3.4-4.5l0,0c-6.1,7-7.8,9.5-12.4,9.4c-2.4-0.1-5.1-2.9-9.1-5.4c0,0,0,0,0,0c0.2,0.2,0.3,0.4,0.3,0.5C92,69.6,92.7,72.7,92.5,76.1z"/><path class="st2" fill="#EEA06D" d="M119.9,144.2c0.4-2.3,1-4.5,2-6.4c0.8-1.7,1.6-3.3,2.2-4.9c-4.5,3.6-10.6,14.7-10.6,14.7S117,146.1,119.9,144.2z"/><path class="st2" fill="#EEA06D" d="M67.6,147.6c0-1.1,0-2.2-0.1-3.2c-0.5-4.9,1.2-17.1,2.1-23.1c0,0,0,0,0,0c0-0.1,0-0.2,0-0.3c0-0.3,0.1-0.5,0.1-0.7c0.2-1.6,0.4-2.5,0.4-2.5s1.5,1.5,2.2,3.1c-0.2-6.7-1.1-15.1-1.1-15.1s-1.4,3.3-1.7,6.6c-0.2,2.2,0,4.8,0,8.2C64.5,132.4,65.6,140.9,67.6,147.6z"/><path class="st2" fill="#EEA06D" d="M129,119.4c0.3-2.3,0.5-4,0.5-5c0-2.3,0-7.3,0-7.3s-3.9,12.1-4.5,22.6c1.4-4.4,2-7.8,2.2-8.6c0,0,0,0,0,0c0,0,0,0,0,0c0-0.1,0.1-0.3,0.2-0.4c0,0,0,0,0,0c0.1-0.1,0.2-0.2,0.2-0.3c0,0,0,0,0,0c0.3-0.2,0.6-0.4,0.9-0.4c0,0,0,0,0,0c0.1,0,0.1,0,0.2,0c0,0,0,0,0,0c0.1,0,0.2,0,0.2,0s0.8,14.7,1.9,26.7C133.1,139.9,134.2,131.4,129,119.4z"/><path class="st2" fill="#EEA06D" d="M59.5,179.4c2.4-5.8,4.9-12.4,6.5-19.1C63.2,163.6,60.8,171.5,59.5,179.4z"/><path class="st2" fill="#EEA06D" d="M132.5,159.5c0.1,0.8,0.3,1.5,0.4,1.9c0.7,2.2,3.8,9.8,6.9,18.7C138.5,171.3,135.7,162.4,132.5,159.5z"/><path class="st2" fill="#EEA06D" d="M103.2,297.5c0.1,1.6,0.2,2.9,0.3,3.9c0.1,1.5,0.1,5.7,0.1,11.3c1.3-5,2.9-7,4.6-9c2.9-3.6,7.5-8.1,7.5-8.1S108.2,295.3,103.2,297.5z"/><path class="st2" fill="#EEA06D" d="M76.5,297.9c0,0,5.1,3.9,8.5,7.1c2.5,2.3,4.9,4.5,7.6,13.7c0.2-7.2,0.5-13.7,0.9-17.2c-0.2-0.3-0.3-0.6-0.5-0.8C89.3,295.6,76.5,297.9,76.5,297.9z"/><path class="st2" fill="#EEA06D" d="M104.1,87.9c0-1.4-2.3,0.5-4.5,0.5c-1.5,0-4.1-1.8-4.1-0.3c0,2.6,2.9,2.9,4,2.9C100.6,91,104.1,90.5,104.1,87.9z"/></g><g id="shines"><path class="st3" fill="#F9BB90" d="M81.8,249.4c-1.8,7.1,1.5,36.6-0.8,36.5c-3.2-0.1-4.4-17.2-4.4-17.2c-1.3,8.8-1.8,25.3,4.9,22.6s4.9-15.1,2.3-27C81.3,252.4,81.8,249.4,81.8,249.4z"/><path class="st3" fill="#F9BB90" d="M110.8,283.6c-3.2-0.3-4.4-17.2-4.4-17.2c-1.3,8.8-1.9,25.2,4.9,22.6c8.9-3.4,11.2-44.2,11.2-44.2S113.4,283.8,110.8,283.6z"/><path class="st3" fill="#F9BB90" d="M122.5,309.7c-0.3-4,0-7.9-1.3-9.1c-1.6-1.4-2.3,3.6-1.8,5.6S122.8,313.7,122.5,309.7z"/><path class="st3" fill="#F9BB90" d="M90.5,113.9c-4.1-2.3-8.4-1.2-8.4-1.2s5.4,0.9,6.9,1.7c4.5,2.4,5.2,5.5,5.2,5.5S94.6,116.3,90.5,113.9z"/><path class="st3" fill="#F9BB90" d="M115.1,112.8c0,0-4.3-1.2-8.4,1.2c-4.1,2.3-3.7,6-3.7,6s0.7-3.1,5.2-5.5C109.7,113.6,115.1,112.8,115.1,112.8z"/></g><path id="panties" class="st4" fill="#3C3C3B" d="M130.5,187.6c-5.5,2.8-22.1,10.9-35.8,10.4c-13.1-0.4-24.6-7.3-29.6-11.1c-1.1,3.5-1.9,7.1-2.1,10.7c3.3,0.1,9.5,0.9,18.1,4.2c9.1,3.5,12.7,8.8,14.1,11.7c0-0.4,0-0.6,0-0.6s1.2,1,3,1c1.3,0,2.5-0.6,3-0.8c2.7-6,9.7-9,16.4-12.1c5.7-2.6,11.7-4.3,14.1-4.9C131.4,193.2,131,190.4,130.5,187.6z"/><path id="bra" class="st4" fill="#3C3C3B" d="M122.9,114.5c-16.1,1.3-17.4,9.7-23.3,9.7c-5.5,0-12.5-9.5-23.9-9.5c0-1.4-0.7-16.5,1.5-27c-0.5,0.1-1,0.1-1.5,0.1c-0.5,2.7-1,6.8-1.2,10.7c-0.3,5.3-0.1,13.4,0,16.5c-1.1,0.8-1.8,3-2.4,5.1c0.4,0.7,0.7,1.4,0.7,2c0.2,2.1,1.1,8.8,2.4,11.3c0.4,0.9,0.9,2,1.3,3.4c10.9-1.8,18.8-8.9,23.3-8.8c4.4,0.1,9.5,6.8,23.1,7.8c3.2-7,4.2-13.7,4.6-14.8c0,0,0,0,0,0c-0.7-2.1-1.8-4.9-2.9-6.1c0.3-5.9-0.7-20-1.3-27c-0.6-0.1-1.1-0.2-1.7-0.3C122.6,98.8,123.1,109.6,122.9,114.5z"/><path id="hair" class="st5" fill="#432918" d="M76,50.1c0.8-15.3,2.1-25.3,7.6-29.1s9.8-3.2,13.3-3.5c3.5-0.3,10.8-2.3,13.8-1.1c3,1.2,8.6,5.5,10.9,10.4c2.3,5,2.3,22,2,27c-0.3,5-1.5,19.8,0.1,25.7s4.9,9.5,4.9,9.5s-8.3-2.7-9.8,1.5s1.8,16.8,1.8,16.8s-8.9-5-9.4-12.6c-0.5-7.6-1.3-11.5-1.9-16.1c-0.6-4.7-1.1-9.2,2.5-12.7c3.8-3.6,4.5-11.3,4.2-16.4s-0.8-7.4-2.6-9.2c-1.8-1.8-4.7-3-7.4-2.3c-2.7,0.8-7.4,0.2-10.1-1.8s-5.5-6.1-5.5-6.1s-0.9,5-2.7,7.6c-1.8,2.6-3.5,4.7-3.5,4.7s-0.8,12.5,0.7,16.8c1.5,4.1,5.8,6.7,7,9.9c1.2,3.2,1.2,8.8,0.3,11.5c-0.9,2.7-3,3.3-3,3.3s2.1,6.7,0.9,10.6s-6.2,14.8-6.2,14.8s0.6-9.4-0.2-15.8s-1.7-7.6-1.7-7.6s-0.6,1-2.4,1.3c-1.5,0.2-3.3,0.3-3.3,0.3s2.7-3.7,2-12C77.5,67.4,75.6,58.3,76,50.1z"/></g></g></svg>');

// array of top selection
var tops = document.querySelectorAll('#topchoice li');

// the different kinds of tops
var topSelection = ['M79.2,85.5c0,0-5,9.8,0,19.1c5,9.3,10,11.9,19.8,11c9.8-1,19.6-4.1,22.4-2.9c2.9,1.2,7.2,6,5.8,12.2c-1.4,6.3-7.8,16-7,22.2c0.7,6.2,1.2,9.5,3.1,11.2s3.1,3.6,3.6,9.1c0.5,5.5,5.8,14.2,6.2,30s1.2,35.2-5,36.9c-6.2,1.7-10,0.5-14.3-2.6c-4.3-3.1-13.1,1-13.1,1s-1.9-3.8-3.3-1.9c-1.4,1.9-0.2,6.4-3.1,6.4c-2.9,0-14.3-5-18.4-5.7c-4.1-0.7-14.3-0.2-14.3-0.2s-0.7-30.4,1.2-39c1.9-8.6,6.4-18,5.9-19.9c-0.5-2-1.4-6.3,3.1-13.7c4.5-7.4,2.2-17.5,1.2-23.9c-2-12.9-16.2-18.4-16.6-22.2c-0.5-3.8,1.1-16.2,5.7-20.5S73,86.3,79.2,85.5z',
					'M134.4,204.1c-1.2-11.8-3-24.7-8.1-35c-5.1-10.4-7.1-12.9-6.6-20.7s6.1-15.1,7.1-20.3    c1.7-9.2-0.7-18.2,0-29.7c0.4-6.9,0.5-8.9,0.6-9.4l-2.2-0.4c-1.2-0.1-2.4-0.2-3.6,0.1c0.2,2.9,0.9,13.7-0.5,17.3    c-0.2,0.4-0.3,0.9-0.5,1.4c0.1,0.2,0.1,0.3,0.1,0.3s-0.1,0-0.2-0.1c-1.7,4.6-4.2,11.9-4.2,11.9s-8.1,0.2-13.8,0    s-17.5,1.2-17.5,1.2s-5.7-14.3-5.7-20.8c0-5.4,0.9-10.7,1.2-12.4c-0.2,0.1-0.4,0.1-0.7,0.1c-1.5,0.2-3.3,0.3-3.3,0.3    s0.1-0.2,0.3-0.6l-5.2,0.6c0,0,0.3,6.8,1.1,12.4c1.8,11.7-1.2,20.7-1.2,24.4s8.4,25,5.9,29.1s-9.9,19.6-13.2,34.1s1.6,53,1.6,53    s9.1-2.6,14.7-1.8c5,0.6,14.1,3,14.1,3s0.7-10.1,0.9-14.7c0.2-4.6,0-12,0-12s1.2,0,3.4,0c2.2,0,2.1,0,2.1,0s-1,10.1-1,14.3    s0.2,13.4,0.2,13.4s9.2-3.9,18.2-4.1c9-0.2,14.7,0.9,14.7,0.9S135.5,215.8,134.4,204.1z',
					'M132,189.6c-1.9-9.6-10.5-29.1-11.4-38.9c-0.9-9.8,8.3-29.4,8.3-29.4s-0.9-9.2-3.2-13.2   c-2.2-4-3.1-14.9-3.3-16.4c-0.1-0.8,0.9-2.3,1.8-3.4c-2.3-0.2-4.8,0.2-5.5,2.3c-0.7,2-0.3,5.9,0.3,9.5c0.3,0.6,0.4,1.3,0.4,1.9   c0.6,3,1.2,5.4,1.2,5.4s-2.2-1.2-4.5-3.4c0,0-0.1,0-0.1,0c-1.6-0.3-6.7-4-6.7-4s1.4-0.5,3.1-0.9c-0.6-1.3-1.1-2.7-1.2-4.3   c0-0.4,0-0.7-0.1-1.1c-3.6,1.6-8.2,2.9-13.5,3c-2.8,0.1-5.4-0.5-7.8-1.3c-0.4,1.2-1.1,2.8-1.7,4.4c1.2,0.4,2,0.7,2,0.7   s-1.4,1-3.1,1.9c-1.2,2.9-2.4,5.5-2.9,6.5c1.7-2,9.2-6.2,9.2-6.2s-1,8.4-3,10.9s-4.7,2.2-6.4,0.8c-1.8-1.4-1.4-3.5,0-5.4   c0,0,0,0,0,0c0-0.6,0.2-2.7,0.2-5.4c-0.4,0.1-0.7,0.2-1.1,0.2c-2.2,0.1-3.2-1.4-3.3-3c-0.1-1.5,1.2-2.3,2.8-2.4   c0.3,0,0.9,0,1.5,0.2c0-1.8-0.2-3.6-0.3-5.2c-0.1-0.4-0.1-0.8-0.2-1.2c-2.8-1.8-4.8-3.8-5.9-4.9c-0.8,0.1-1.4,0.1-1.4,0.1   s0.3-0.3,0.6-1.1c0,0,0,0,0,0H72l3.6,4.7c0,0-2,7.8-3.3,13.8c-1.3,6-1.1,17.6-1.1,17.6s5.2,15.4,5.9,26.7   c0.7,11.3-4.1,19.3-10.6,31.3c-6.4,12-7.1,30.7-7.1,30.7s21.3,7.6,38.2,8.2c16.9,0.7,36.9-8.5,36.9-8.5S133.7,198,132,189.6z    M99,122.4c-3.1,0-4.5-2.6-4.7-5.9c-0.2-3.3,4.7-15.1,4.7-15.1s6.3,10,6.3,14.5C105.2,120.4,102.1,122.4,99,122.4z M113.1,115.6   c-2,1.1-3.7,0-5-2c-1.3-2-2.3-11.1-2.3-11.1s7.4,4.1,9,6.9C116.4,112.2,115.1,114.5,113.1,115.6z',
					'M132.2,179.2c-1.9-5.5-13.8-24.4-12.1-32.2c1.2-5.3,8.5-26.2,8.5-26.2s-3.3-11.7-3.5-16.5   c-0.1-4,1-12.8,1.4-15.7c-2.4-0.5-6.2-0.8-7.5,1.5c1.4,4.7,3.4,12.8,2,16.5c-1.9,5.3-20,15.4-23.2,15.2s-19.2-12.4-20.5-17   c-1.7-5.9,0.8-15,1.6-17.4c-1.3,0.1-2.6,0.3-2.6,0.3s0.1-0.2,0.4-0.6l-5.9,0.6c0,0,1.1,8.3,2.3,15.1s-2.4,15.5-2.4,15.5   s4.5,17.8,5.8,30.1c1,9.9-14.6,38.5-15.3,52.9c-0.7,14.4,2.5,43.3,2.5,43.3s1.8-3.2,3.9-3c2.1,0.2,3-0.9,4.8-3.5   c1.8-2.6,9.3-5.6,11.6-8.1c2.3-2.5,7.2-2.1,10-4.6c2.8-2.5,8.8-3,11.3-4.4c2.5-1.4,3.9-3.2,6.7-3.9c2.8-0.7,12.1-9,15.7-10   c3.5-1.1,4.8,3.3,4.6,6.2c-0.2,2.8,1.6,7.7,1.6,7.7s2.1-4.9,2.6-10.6C136.9,204.9,134.1,184.7,132.2,179.2z'
					];

// visual feed-forwards about tops in selection
var top1Box = Raphael(tops[0], document.innerWidth, document.innerHeight);
top1Box.path('M52.2,7.3c0,0-3.8,7.5,0,14.5s7.6,9.1,15.1,8.4s14.9-3.1,17.1-2.2c2.2,0.9,4.5,2.2,2.2,6.4S83,49.5,83.5,54.2  c0.5,4.7,0.9,7.3,2.4,8.5c1.5,1.3,2.4,2.7,2.7,6.9s3.6,10.5,4,22.5s1.6,27.1-3.1,28.4s-7.6,0.4-10.9-2c-3.3-2.4-10,0.7-10,0.7  s-1.5-2.9-2.5-1.5c-1.1,1.5-0.2,4.9-2.4,4.9s-10.9-3.8-14-4.4c-3.1-0.5-10.9-0.2-10.9-0.2S39,95,40.4,88.4s4.2-13.5,3.8-15  s-1.1-4.8,2.4-10.4s2.2-13.5,0.9-18.2c-1.3-4.7-10.7-14-11.1-16.9s-0.7-12.4,2.7-15.6C42.6,8.9,47.5,7.8,52.2,7.3z');
var top2Box = Raphael(tops[1], document.innerWidth, document.innerHeight);
top2Box.path('M51.5,119.6c3.6,0.5,10.2,2.2,10.2,2.2s0.5-7.3,0.7-10.7c0.2-3.3,0-8.7,0-8.7s0.9,0,2.4,0c1.6,0,2.2,0,2.2,0  s0,7.3,0,10.4c0,3,0.8,9.7,0.8,9.7s4.5-2.8,11-3s10.7,0.7,10.7,0.7s1.8-17.2,1-25.7c-0.8-8.5-2.2-17.9-5.8-25.4s-5.8-9.3-5.5-15  s1.2-11.7,1-15.5s0.5-6,0.5-6s3.8-6.3,4.3-14.7s0.7-10.4,0.7-10.4h-6.3c0,0,1.2,12.9,0,15.9s-2,5.3-2,5.3s-5.8,0.2-10,0  c-4.2-0.2-12.7,0.8-12.7,0.8s-3.2-6.2-3.2-10.9s0-11.2,0-11.2h-6.3c0,0-0.2,7.7,0.7,11.7c0.8,4,5,13.4,5,16c0,2.7,3.2,19.4,1.3,22.4  S42,72,39.6,82.5c-2.3,10.5,1.2,38.4,1.2,38.4S47.4,119.1,51.5,119.6z');
var top3Box = Raphael(tops[2], document.innerWidth, document.innerHeight);
top3Box.path('M95,96.7c-2.1-7.2-9.3-21.7-10.1-30.2c-0.8-8.5,8.9-29.2,8.9-29.2s-2.3-7.9-4.3-11.4c-1.9-3.5-2.7-13-2.9-14.3  c-0.2-1.3,2.9-4.5,2.9-4.5h-3.7c0,0-7.5,8.7-20.9,8.9c-10.6,0.2-18-8.9-18-8.9h-4.3l3.1,4.1c0,0-1.7,6.8-2.9,12  c-1.2,5.2-4.3,15.3-4.3,15.3s6.2,17.8,6.8,27.7c0.6,9.9-1.9,12.4-7.5,22.8c-5.6,10.4-6.2,26.7-6.2,26.7s18.6,6.6,33.3,7.2  c14.7,0.6,32.1-7.4,32.1-7.4S97.1,103.8,95,96.7z M45.5,20c-0.1-1.5,1.1-2.2,2.8-2.4c1.6-0.2,7.4,2,7.4,2s-4.7,3.2-6.9,3.3  C46.5,23,45.5,21.5,45.5,20z M55.9,32.6c-2,2.5-4.6,2.2-6.3,0.8c-1.7-1.4-1.4-3.4,0-5.3c1.4-1.9,9.3-6.3,9.3-6.3  S57.9,30.1,55.9,32.6z M64.4,41c-3.1,0-4.4-2.5-4.6-5.8c-0.2-3.3,4.6-14.9,4.6-14.9s6.2,9.9,6.2,14.3C70.6,39,67.5,41,64.4,41z   M78.4,34.3c-1.9,1.1-3.7,0-4.9-2c-1.3-2-2.3-11-2.3-11s7.3,4,8.9,6.8C81.6,30.9,80.3,33.2,78.4,34.3z M84.4,21.3  c-0.4,1.5-1.7,1.8-3.3,1.5c-1.6-0.3-6.6-3.9-6.6-3.9s5.4-1.8,7.5-1.3C84.2,18.2,84.8,19.9,84.4,21.3z');
var top4Box = Raphael(tops[3], document.innerWidth, document.innerHeight);
top4Box.path('M51.5,21.5c0.9,3.3,10.1,12.5,12.4,12.6s12-7.2,13.4-11c1.4-3.8,0-15.5,0-15.5l7.4,0.8c0,0-3.4,9.7-3.3,13.1  c0.1,3.4,4.3,8.6,4.3,8.6s-6.3,17.8-5.9,22.1c0.4,4.3,7.3,19.2,8.7,23.1s3.4,18.4,3,22.5c-0.4,4-1.9,7.6-1.9,7.6s-1.3-3.5-1.1-5.6  c0.1-2-0.8-5.2-3.3-4.4c-2.5,0.8-9.2,6.7-11.2,7.2c-2,0.5-3,1.8-4.8,2.8c-1.8,1-6.1,1.4-8.1,3.2c-2,1.8-5.6,1.5-7.2,3.3  s-7.1,3.9-8.3,5.8c-1.3,1.9-1.9,2.7-3.4,2.5c-1.5-0.1-2.8,2.1-2.8,2.1s-2.3-20.7-1.8-31.1s11-28.3,10.5-38  c-0.5-9.7-2.8-22.6-2.8-22.6s3.7-5.3,2.8-10.2c-0.9-4.9-3.8-12-3.8-12l7.1-0.8C51.4,7.6,50.2,16.5,51.5,21.5z');

// tops that will be placed on model (empty now)
var top1
var top2;
var top3;
var top4;

// array of top colors
var topColors = document.querySelectorAll('#topcolorchoice li');

// array of bottom selection
var bottoms = document.querySelectorAll('#bottomchoice li');

// the different kinds of bottoms
var bottomSelection = [	'M73.5,167c0,0,9.1,4.6,21.8,4.3c12.7-0.4,28.7-4.3,28.7-4.3s7.1,12,8.7,32.3s-1.1,35.7-2.9,47.5   s-5,24.4-5.7,31.8c-0.7,7.3,1.1,18,1.1,23.7c0,5.7-1.1,13.6-1.1,13.6s-5.5-2.7-10-2.3c-4.5,0.4-10.9,5.2-10.9,5.2   s-0.8-32.4-1.7-37.8c-0.5-3-0.9-56-0.7-59.6c0.2-3.6,0.5-6,0.5-6s-2.1,0.5-3,0.5c-0.9,0-3.4-1.1-3.4-1.1s0.4,23.8,0,27.4   c-0.4,3.6-0.2,26.6,0.4,31.2c0.5,4.6-1.4,43.9-1.4,43.9s-7.7-4.3-11.4-4.5c-3.7-0.2-11.1,2.5-11.1,2.5s-1.1-9.5,0-15   c0.8-3.9,1.4-14.6,1.1-22.1c-0.4-7.5-3.7-24.8-5-31.4c-1.2-6.6-6.4-30.7-5.7-41.8S62.6,188,73.5,167z',
						'M97.7,173.5c16.7-0.6,29.1-3,29.1-3s10.2,21.9,9.5,40.8c-0.7,18.9-7,71.7-6.7,77.6c0.2,6-3,53.7-3.5,59.7   c-0.5,6-2,28.9-2,28.9l-24.4-2.2c0,0,0-36.6,0.2-50.5c0.2-13.9,2.5-70.9,2-80.9c-0.5-10-1.7-27.9-1.7-27.9l-4.2-0.2   c0,0,0.2,55.7,0,68.9c-0.2,13.2-0.2,52.3,0,59.7c0.2,7.5-0.2,30.4-0.2,30.4s-8.5-0.2-12.3,0s-10.7,1.5-10.7,1.5s-4.2-39.6-5-53.2   c-0.7-13.7-0.5-47.3-2.2-60.5c-1.7-13.2-5.2-52-3.7-65.2c1.5-13.2,8.5-26.9,8.5-26.9S87.1,173.9,97.7,173.5z',
						'M96.2,144.3c13.6-0.6,24.6-2.3,24.6-2.3s-0.7,10.5,0.8,16.7c1.5,6.2,17.5,29.5,14.6,62.6s-8,42.3-9.2,52.9   c-1.3,10.5,0.5,32.1,0.5,32.1s-6.7-2.6-19.2-2.3c-12.6,0.3-38.8,2.3-38.8,2.3s3.1-19.8,1.3-28.2c-1.8-8.5-11.3-51.8-10-73.9   C62,182.1,71.9,168,75.3,160c3.8-9,1.5-18,1.5-18S87.9,144.7,96.2,144.3z',
						'M96.3,179.8c9.5-0.9,31.7-4.9,31.7-4.9s7.2,13.9,7.5,40.8s-4.1,32.5-4.1,40s-0.8,19.4-0.8,19.4   s-14.7-8.3-31-8.3S69.9,275,69.9,275s-11.1-35.9-10.3-61.7c0.8-25.8,8.5-38.5,8.5-38.5S85.4,180.8,96.3,179.8z'
						];

// visual feed-forwards about bottoms in selection
var bottom1Box = Raphael(bottoms[0], document.innerWidth, document.innerHeight);
bottom1Box.path('M49.1,7.3c0,0,5.6,2.9,13.5,2.7c7.9-0.2,17.8-2.7,17.8-2.7s4.4,7.4,5.4,20c1,12.6-0.7,22.1-1.8,29.4  c-1.1,7.3-3.1,15.2-3.5,19.7c-0.4,4.5,0.7,11.2,0.7,14.7c0,3.5-0.7,8.4-0.7,8.4s-3.4-1.7-6.2-1.4c-2.8,0.2-6.2,2.3-6.2,2.3  s0.3-8.1,0-11.1c-0.3-3-1.7-9.6-1.7-11.5s0.8-19.9,0.4-22c-0.3-2.1-1-12.7-0.9-14.9s0.3-5,0.3-5s-1.3,0.3-1.9,0.3  c-0.6,0-2.1-0.7-2.1-0.7s0.2,16,0,18.3c-0.2,2.2-0.1,16.5,0.2,19.4c0.3,2.9-0.6,10.4-0.8,13.6c-0.2,3.2-0.1,13.6-0.1,13.6  s-4.8-2.7-7.1-2.8c-2.3-0.1-6.9,1.5-6.9,1.5s-0.2-6.9,0-9.3s0.9-9.1,0.7-13.7s-2.3-15.4-3.1-19.5c-0.8-4.1-3.1-19.4-2.7-26.2  C43.1,23.7,42.3,20.4,49.1,7.3z');
var bottom2Box = Raphael(bottoms[1], document.innerWidth, document.innerHeight);
bottom2Box.path('M64.3,9c9.3-0.3,16.3-1.7,16.3-1.7s5.7,12.2,5.3,22.8c-0.4,10.6-3.9,40-3.8,43.4c0.1,3.3-1.7,30-1.9,33.4  C79.8,110.2,79,123,79,123l-13.6-1.3c0,0,0-20.4,0.1-28.2s1.4-39.6,1.1-45.2c-0.3-5.6-1-15.6-1-15.6l-2.4-0.1c0,0,0.1,31.1,0,38.5  c-0.1,7.4-0.1,29.2,0,33.4c0.1,4.2-0.1,17-0.1,17s-4.8-0.1-6.8,0c-2.1,0.1-6,0.8-6,0.8s-2.4-22.1-2.8-29.8s-0.3-26.4-1.3-33.8  s-2.9-29.1-2.1-36.4c0.8-7.4,4.7-15,4.7-15S58.3,9.2,64.3,9z');
var bottom3Box = Raphael(bottoms[2], document.innerWidth, document.innerHeight);
bottom3Box.path('<path xmlns="http://www.w3.org/2000/svg" class="st0" d="M63,8.5c7.4-0.3,12.9-1.3,12.9-1.3s0.1,5.7,1,9.1s9.5,16.1,8,34.1c-1.5,18-4.3,23.1-5,28.8  C79,85,80,96.7,80,96.7s-3.6-1.4-10.5-1.3c-6.9,0.1-21.1,1.3-21.1,1.3s1.7-10.8,0.7-15.4c-1-4.6-6.2-28.2-5.5-40.3  c0.7-12,6.3-19.4,7.4-24s0.8-9.8,0.8-9.8S58.5,8.7,63,8.5z"/>');
var bottom4Box = Raphael(bottoms[3], document.innerWidth, document.innerHeight);
bottom4Box.path('M63.8,9.9c5.1-0.5,16.9-2.6,16.9-2.6s3.8,7.4,4,21.7c0.1,14.3-2.2,17.3-2.2,21.3s-0.4,10.3-0.4,10.3  s-7.8-4.4-16.5-4.4s-15.8,4.4-15.8,4.4s-5.9-19.1-5.5-32.8s4.5-20.4,4.5-20.4S58,10.5,63.8,9.9z');

// bottoms that will be placed on model (empty now)
var bottom1;
var bottom2;
var bottom3;
var bottom4;

// array of bottom colors
var bottomColors = document.querySelectorAll('#bottomcolorchoice li');

// adds inner shadow when <li> is clicked
var i;
for (i = 0; i < tops.length; i++) {
	tops[i].addEventListener('click', function() {
		this.className = 'on';
	});
}
for (i = 0; i < topColors.length; i++) {
	topColors[i].addEventListener('click', function() {
		this.className = 'on';
	});
}

/*
========================================
	DIFFERENT KINDS OF TOPS
========================================
*/

// prevents user from placing more than one of type
var top1Limit = 0;
var top2Limit = 0;
var top3Limit = 0;
var top4Limit = 0;

tops[0].addEventListener('click', function() {
	top1Limit++;
	top2Limit--;
	top3Limit--;
	top4Limit--;

	// clear existing tops
	if (tops[1].className == 'on') {
		tops[1].className = '';
		top2.attr({fill: 'none', stroke: 'none'});
	}
	if (tops[2].className == 'on') {
		tops[2].className = '';
		top3.attr({fill: 'none', stroke: 'none'});
	}
	if (tops[3].className == 'on') {
		tops[3].className = '';
		top4.attr({fill: 'none', stroke: 'none'});
	}

	// add top1
	if (top1Limit <= 1) {
		top1 = paper.path(topSelection[0]);
		top1.attr({fill: '#999', stroke: 'none', opacity: '0'});
		top1.translate(-140, 0);

		top1.animate({transform: ['t', 0, 0]}, 600, 'backIn');
		top1.show().animate({ opacity : 1 }, 300);

	}
});
tops[1].addEventListener('click', function() {
	top1Limit--;
	top2Limit++;
	top3Limit--;
	top4Limit--;

	// clear existing tops
	if (tops[0].className == 'on') {
		tops[0].className = '';
		top1.attr({fill: 'none', stroke: 'none'});
	}
	if (tops[2].className == 'on') {
		tops[2].className = '';
		top3.attr({fill: 'none', stroke: 'none'});
	}
	if (tops[3].className == 'on') {
		tops[3].className = '';
		top4.attr({fill: 'none', stroke: 'none'});
	}

	// add top2
	if (top2Limit <= 1) {
		top2 = paper.path(topSelection[1]);
		top2.attr({fill: '#999', stroke: 'none', opacity: '0'});
		top2.translate(-140, 0);

		top2.animate({transform: ['t', 0, 0]}, 600, 'backIn');
		top2.show().animate({ opacity : 1 }, 300);
	}
});
tops[2].addEventListener('click', function() {
	top1Limit--;
	top2Limit--;
	top3Limit++;
	top4Limit--;

	// clear existing tops
	if (tops[0].className == 'on') {
		tops[0].className = '';
		top1.attr({fill: 'none', stroke: 'none'});
	}
	if (tops[1].className == 'on') {
		tops[1].className = '';
		top2.attr({fill: 'none', stroke: 'none'});
	}
	if (tops[3].className == 'on') {
		tops[3].className = '';
		top4.attr({fill: 'none', stroke: 'none'});
	}

	// add top3
	if (top3Limit <= 1) {
		top3 = paper.path(topSelection[2]);
		top3.attr({fill: '#999', stroke: 'none', opacity: '0'});
		top3.translate(-140, 0);

		top3.animate({transform: ['t', 0, 0]}, 600, 'backIn');
		top3.show().animate({ opacity : 1 }, 300);
	}
});
tops[3].addEventListener('click', function() {
	top1Limit--;
	top2Limit--;
	top3Limit--;
	top4Limit++;

	// clear existing tops
	if (tops[0].className == 'on') {
		tops[0].className = '';
		top1.attr({fill: 'none', stroke: 'none'});
	}
	if (tops[1].className == 'on') {
		tops[1].className = '';
		top2.attr({fill: 'none', stroke: 'none'});
	}
	if (tops[2].className == 'on') {
		tops[2].className = '';
		top3.attr({fill: 'none', stroke: 'none'});
	}

	// add top4
	if (top4Limit <= 1) {
		top4 = paper.path(topSelection[3]);
		top4.attr({fill: '#999', stroke: 'none', opacity: '0'});
		top4.translate(-140, 0);

		top4.animate({transform: ['t', 0, 0]}, 600, 'backIn');
		top4.show().animate({ opacity : 1 }, 300);
	}
});

/*
========================================
	TOP COLORS
========================================
*/
topColors[0].addEventListener('click', function() {
	topColors[1].className = '';
	topColors[2].className = '';
	topColors[3].className = '';

	if (tops[0].className == 'on') {
		top1.attr({fill: '#95c11f'});
	}
	if (tops[1].className == 'on') {
		top2.attr({fill: '#95c11f'});
	}
	if (tops[2].className == 'on') {
		top3.attr({fill: '#95c11f'});
	}
	if (tops[3].className == 'on') {
		top4.attr({fill: '#95c11f'});
	}
});
topColors[1].addEventListener('click', function() {
	topColors[0].className = '';
	topColors[2].className = '';
	topColors[3].className = '';

	if (tops[0].className == 'on') {
		top1.attr({fill: '#ea394a'});
	}
	if (tops[1].className == 'on') {
		top2.attr({fill: '#ea394a'});
	}
	if (tops[2].className == 'on') {
		top3.attr({fill: '#ea394a'});
	}
	if (tops[3].className == 'on') {
		top4.attr({fill: '#ea394a'});
	}
});
topColors[2].addEventListener('click', function() {
	topColors[0].className = '';
	topColors[1].className = '';
	topColors[3].className = '';

	if (tops[0].className == 'on') {
		top1.attr({fill: '#5face0'});
	}
	if (tops[1].className == 'on') {
		top2.attr({fill: '#5face0'});
	}
	if (tops[2].className == 'on') {
		top3.attr({fill: '#5face0'});
	}
	if (tops[3].className == 'on') {
		top4.attr({fill: '#5face0'});
	}
});
topColors[3].addEventListener('click', function() {
	topColors[0].className = '';
	topColors[1].className = '';
	topColors[2].className = '';

	if (tops[0].className == 'on') {
		top1.attr({fill: '#233e3f'});
	}
	if (tops[1].className == 'on') {
		top2.attr({fill: '#233e3f'});
	}
	if (tops[2].className == 'on') {
		top3.attr({fill: '#233e3f'});
	}
	if (tops[3].className == 'on') {
		top4.attr({fill: '#233e3f'});
	}
});

// adds inner shadow when <li> is clicked
for (i = 0; i < bottoms.length; i++) {
	bottoms[i].addEventListener('click', function() {
		this.className = 'on';
	});
}
for (i = 0; i < bottomColors.length; i++) {
	bottomColors[i].addEventListener('click', function() {
		this.className = 'on';
	});
}

/*
========================================
	DIFFERENT KINDS OF BOTTOMS
========================================
*/

// prevents user from placing more than one of type
var bottom1Limit = 0;
var bottom2Limit = 0;
var bottom3Limit = 0;
var bottom4Limit = 0;

bottoms[0].addEventListener('click', function() {
	bottom1Limit++;
	bottom2Limit--;
	bottom3Limit--;
	bottom4Limit--;

	// clear existing tops
	if (bottoms[1].className == 'on') {
		bottoms[1].className = '';
		bottom2.attr({fill: 'none', stroke: 'none'});
	}
	if (bottoms[2].className == 'on') {
		bottoms[2].className = '';
		bottom3.attr({fill: 'none', stroke: 'none'});
	}
	if (bottoms[3].className == 'on') {
		bottoms[3].className = '';
		bottom4.attr({fill: 'none', stroke: 'none'});
	}

	// add bottom1
	if (bottom1Limit <= 1) {
		bottom1 = paper.path(bottomSelection[0]);
		bottom1.attr({fill: '#666', stroke: 'none', opacity: '0'});
		bottom1.translate(200, 0);

		bottom1.animate({transform: ['t', 0, 0]}, 600, 'backIn');
		bottom1.show().animate({ opacity : 1 }, 300);
	}
});
bottoms[1].addEventListener('click', function() {
	bottom1Limit--;
	bottom2Limit++;
	bottom3Limit--;
	bottom4Limit--;

	// clear existing tops
	if (bottoms[0].className == 'on') {
		bottoms[0].className = '';
		bottom1.attr({fill: 'none', stroke: 'none'});
	}
	if (bottoms[2].className == 'on') {
		bottoms[2].className = '';
		bottom3.attr({fill: 'none', stroke: 'none'});
	}
	if (bottoms[3].className == 'on') {
		bottoms[3].className = '';
		bottom4.attr({fill: 'none', stroke: 'none'});
	}

	// add bottom2
	if (bottom2Limit <= 1) {
		bottom2 = paper.path(bottomSelection[1]);
		bottom2.attr({fill: '#666', stroke: 'none', opacity: '0'});
		bottom2.translate(200, 0);

		bottom2.animate({transform: ['t', 0, 0]}, 600, 'backIn');
		bottom2.show().animate({ opacity : 1 }, 300);
	}
});
bottoms[2].addEventListener('click', function() {
	bottom1Limit--;
	bottom2Limit--;
	bottom3Limit++;
	bottom4Limit--;

	// clear existing tops
	if (bottoms[0].className == 'on') {
		bottoms[0].className = '';
		bottom1.attr({fill: 'none', stroke: 'none'});
	}
	if (bottoms[1].className == 'on') {
		bottoms[1].className = '';
		bottom2.attr({fill: 'none', stroke: 'none'});
	}
	if (bottoms[3].className == 'on') {
		bottoms[3].className = '';
		bottom4.attr({fill: 'none', stroke: 'none'});
	}

	// add bottom3
	if (bottom3Limit <= 1) {
		bottom3 = paper.path(bottomSelection[2]);
		bottom3.attr({fill: '#666', stroke: 'none', opacity: '0'});
		bottom3.translate(200, 0);

		bottom3.animate({transform: ['t', 0, 0]}, 600, 'backIn');
		bottom3.show().animate({ opacity : 1 }, 300);
	}
});
bottoms[3].addEventListener('click', function() {
	bottom1Limit--;
	bottom2Limit--;
	bottom3Limit--;
	bottom4Limit++;

	// clear existing tops
	if (bottoms[0].className == 'on') {
		bottoms[0].className = '';
		bottom1.attr({fill: 'none', stroke: 'none'});
	}
	if (bottoms[1].className == 'on') {
		bottoms[1].className = '';
		bottom2.attr({fill: 'none', stroke: 'none'});
	}
	if (bottoms[2].className == 'on') {
		bottoms[2].className = '';
		bottom3.attr({fill: 'none', stroke: 'none'});
	}

	// add bottom4
	if (bottom4Limit <= 1) {
		bottom4 = paper.path(bottomSelection[3]);
		bottom4.attr({fill: '#666', stroke: 'none', opacity: '0'});
		bottom4.translate(200, 0);

		bottom4.animate({transform: ['t', 0, 0]}, 600, 'backIn');
		bottom4.show().animate({ opacity : 1 }, 300);
	}
});

/*
========================================
	BOTTOM COLORS
========================================
*/
bottomColors[0].addEventListener('click', function() {
	bottomColors[1].className = '';
	bottomColors[2].className = '';
	bottomColors[3].className = '';

	if (bottoms[0].className == 'on') {
		bottom1.attr({fill: '#a81143'});
	}
	if (bottoms[1].className == 'on') {
		bottom2.attr({fill: '#a81143'});
	}
	if (bottoms[2].className == 'on') {
		bottom3.attr({fill: '#a81143'});
	}
	if (bottoms[3].className == 'on') {
		bottom4.attr({fill: '#a81143'});
	}
});
bottomColors[1].addEventListener('click', function() {
	bottomColors[0].className = '';
	bottomColors[2].className = '';
	bottomColors[3].className = '';

	if (bottoms[0].className == 'on') {
		bottom1.attr({fill: '#375f7f'});
	}
	if (bottoms[1].className == 'on') {
		bottom2.attr({fill: '#375f7f'});
	}
	if (bottoms[2].className == 'on') {
		bottom3.attr({fill: '#375f7f'});
	}
	if (bottoms[3].className == 'on') {
		bottom4.attr({fill: '#375f7f'});
	}
});
bottomColors[2].addEventListener('click', function() {
	bottomColors[0].className = '';
	bottomColors[1].className = '';
	bottomColors[3].className = '';

	if (bottoms[0].className == 'on') {
		bottom1.attr({fill: '#377c63'});
	}
	if (bottoms[1].className == 'on') {
		bottom2.attr({fill: '#377c63'});
	}
	if (bottoms[2].className == 'on') {
		bottom3.attr({fill: '#377c63'});
	}
	if (bottoms[3].className == 'on') {
		bottom4.attr({fill: '#377c63'});
	}
});
bottomColors[3].addEventListener('click', function() {
	bottomColors[0].className = '';
	bottomColors[1].className = '';
	bottomColors[2].className = '';

	if (bottoms[0].className == 'on') {
		bottom1.attr({fill: '#242825'});
	}
	if (bottoms[1].className == 'on') {
		bottom2.attr({fill: '#242825'});
	}
	if (bottoms[2].className == 'on') {
		bottom3.attr({fill: '#242825'});
	}
	if (bottoms[3].className == 'on') {
		bottom4.attr({fill: '#242825'});
	}
});

// for the responsive layout clothes selection
var topSlide = document.getElementById('topslide');
var topTab = document.getElementById('toptab');
var topColorTab = document.getElementById('topcolortab');

var bottomSlide = document.getElementById('bottomslide');
var bottomTab = document.getElementById('bottomtab');
var bottomColorTab = document.getElementById('bottomcolortab');

var retractTopColors = document.getElementById('retracttopcolors');
var retractBottomColors = document.getElementById('retractbottomcolors');

topSlide.addEventListener('click', function() {
	
	if (topTab.className == 'top') {
		topSlide.innerHTML = '&lt;';

		topTab.className = 'topopen';
		topColorTab.className = 'activated';

		bottomTab.className = 'bottomclosed';
		bottomColorTab.className = 'none';
	} else {
		topSlide.innerHTML = '&gt;';

		topTab.className = 'top';

		bottomTab.className = 'bottom';
	}
});
bottomSlide.addEventListener('click', function() {
	
	if (bottomTab.className == 'bottom') {
		bottomSlide.innerHTML = '&gt;';

		bottomTab.className = 'bottomopen';
		bottomColorTab.className = 'activated';

		topTab.className = 'topclosed';
		topColorTab.className = 'none';
	} else {
		bottomSlide.innerHTML = '&lt;';

		bottomTab.className = 'bottom';

		topTab.className = 'top';
	}
});
retractTopColors.addEventListener('click', function() {
	topColorTab.className = '';
});
retractBottomColors.addEventListener('click', function() {
	bottomColorTab.className = '';
});

var modelBox = document.getElementById('modelBox');
var heading = document.getElementById('heading');

var confirmMsg = document.getElementById('confirmMsg');
var confirmOpt = document.getElementById('confirmOpt');
var confirmY = document.querySelectorAll('#confirmOpt li')[0];
var confirmN = document.querySelectorAll('#confirmOpt li')[1];

modelBox.addEventListener('click', function() {
	heading.textContent = 'Send design';
	confirmMsg.textContent = 'Are you sure?';

	confirmOpt.className = '';
});
confirmY.addEventListener('click', function() {
	heading.textContent = 'Design sent!';
	confirmMsg.textContent = 'contact us via: 020 595 4555';

	confirmOpt.className ='none';
	topTab.className = 'none';
	bottomTab.className = 'none';
	topColorTab.className = 'none';
	bottomColorTab.className = 'none';

	modelBox.className = 'selfcenter';

});
confirmN.addEventListener('click', function() {
	heading.textContent = 'AMFabric';
	confirmMsg.textContent = '';

	confirmOpt.className = 'none';
});