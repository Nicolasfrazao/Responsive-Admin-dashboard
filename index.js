const sideLinks = document.querySelectorAll(' .sidebar .side-menu li a:not(.logout)');
const searchBtnIcon = document.querySelector('.content nav form . form-input button .bx' );
const searchForm = document.querySelector('.content nav form');
const sidebar = document.querySelector('sidebar');
const menuBar = document.querySelector('.content nav .bx .bx-menu');
const toggle = document.getElementById('theme-toggle');


sideLinks.forEach( item => {
  const li = item.parentElement;
  item.addEventListener('click', () => {
    sideLinks.forEach( i => {
      i.parentElement.classList.remove('active');
    })
    li.classList.add('active');
  })
});

menuBar.addEventListener('click', () => {
  sidebar.classList.toggle('close');
});

searchBtn.addEventListener('click', function (e) {
  if(window.innerWidth < 576){
    e.preventDefault;
    searchForm.classList.toggle('show');
    if(searchForm.classList.contains('show')) {
      searchBtnIcon.classList.replace('bx-search', 'bx-x');
    } else{
      searchBtnIcon.classList.replace('bx-x','bx-search') ;
    }
  }
});

window.addEventListener('resize', () => {
  if(window.innerWidth < 768 ) {
    sidebar.classList.add('close');
  } else{
    sidebar.classList.remove('close')
  }
  if(window.innerWidth > 576 ){
    searchBtnIcon.classList.replace('bx-x', 'bx-search');
    searchForm.classList.remove('show')
  }
});

toggle.addEventListener('change', function ()  {
  if(this.checked){
    document.body.classList.add('dark');
  }else{
    document.body.classList.remove('dark');
  }
});
