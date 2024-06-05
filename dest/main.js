const body = document.querySelector(".homepage");
// BACK TO TOP

function backToTop  () {
    let hero = document.querySelector(".hero");
    let header = document.querySelector(".header");
    let btnBackToTop = document.querySelector('.footer__backtotop');
    document.addEventListener('scroll', ()=> {
        let heightHero = hero.clientHeight - 120;
        let scrollY = window.scrollY;
        if(heightHero < scrollY) {
            btnBackToTop.classList.add('active');
            header.classList.add('changeBg');
        } else {
            btnBackToTop.classList.remove('active');
            header.classList.remove('changeBg');
        }
    })
    btnBackToTop.addEventListener('click', ()=> {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
}
backToTop();

// CHOOSE LANG
function handleLang ()  {
    const lang = document.querySelector(".header__cta-lang");
    const langCurent = document.querySelector(".current .current__lang");
    const langItem = document.querySelectorAll(".dropdow li");

    lang.addEventListener('click', (e) =>{
        e.stopPropagation();
        lang.classList.toggle('--showdropdow')
    })

    /*
        1. Lay text cua lang hien tai => luu bien
        2. Lay text cua lang khi click 
        3. Chuyen text2 len text1 trong html dung innerHTML
        4. Chuyen text1 xuong text2 (lang dc click)
    */
    langItem.forEach((item) => {
        item.addEventListener('click', () => {
            let langCurentText = langCurent.textContent;
            let langClickText = item.textContent;
            langCurent.innerHTML = langClickText;
            item.innerHTML = langCurentText;
        })
    });

    document.addEventListener('click', () => {
        lang.classList.remove('--showdropdow');
    })
    
}
handleLang();

// MENU MOBILE
function handleMenuMB() {
    
    const btnHamburger = document.querySelector(".header__cta-btnmenu");
    const headerMenuMB = document.querySelector(".headermoblie");
    const headerLogo = document.querySelector(".header__logo");
    const headerLang = document.querySelector(".header__cta-lang");
    const headerBG = document.querySelector(".header");
    const body = document.querySelector(".homepage")
    btnHamburger.addEventListener('click',() =>{
        headerMenuMB.classList.toggle('--active');
        btnHamburger.classList.toggle('--hamburger');
        headerLogo.classList.toggle('--hidden');
        headerLang.classList.toggle('--hidden');
        headerBG.classList.toggle('--bgblack');
        body.classList.toggle('--hidden');
    })
}   
handleMenuMB()


// CLICK VIDEO SECTION VIDEOS
function handleVideo(){
    let videos = document.querySelectorAll(".thumbvideo");
    let popupVideo = document.querySelector(".popupvideo");
    let iframeVideo = document.querySelector(".popupvideo__inner-iframe iframe ")
    let closeVideo = document.querySelector(".video__close");

    videos.forEach(function (item){
        item.addEventListener('click', function(e){
            e.stopPropagation();
            popupVideo.classList.toggle("--show");

            //lay ID video
            let idDataVideo = item.getAttribute('data-video')

            //gan ID gan vao src cuar iframe
            iframeVideo.setAttribute('src', `https://www.youtube.com/embed/${idDataVideo}?autoplay=1`)
        })
    });

    // Xoa src cua video
    closeVideo.addEventListener('click', function () {
        popupVideo.classList.remove('--show');
        iframeVideo.setAttribute('src', '');
    })

    document.addEventListener('click', function () {
        popupVideo.classList.remove('--show');
        iframeVideo.setAttribute('src', '');
    })
}
handleVideo();

// CLICK VIDEO SECTION BANNER
function handleVideoBanner(){
    let video = document.querySelector(".--btnvideo");
    let popupVideo = document.querySelector(".popupvideo");
    let iframeVideo = document.querySelector(".popupvideo__inner-iframe iframe ")
    let closeVideo = document.querySelector(".video__close");
    video.addEventListener('click', function(e){
        e.stopPropagation();
        popupVideo.classList.toggle("--show");
        let idData = video.getAttribute('data-videoBanner');
        iframeVideo.setAttribute('src', `https://www.youtube.com/embed/${idData}?autoplay=1`)
    })
    closeVideo.addEventListener('click', function () {
        popupVideo.classList.remove('--show');
        iframeVideo.setAttribute('src', '');
    })

    document.addEventListener('click', function () {
        popupVideo.classList.remove('--show');
        iframeVideo.setAttribute('src', '');
    })
}
handleVideoBanner();

// PROGRESS BAR
function progressBar() {
    let progressbar = document.querySelector('.page-progressbar');
    if(!progressbar) return;
    // console.log(progressbar);
    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;
        let height = document.body.offsetHeight - window.innerHeight;

        let percent = (scrollY / height) * 100;
        progressbar.style.width = `${percent}%`;  
       
    });
}

// TABS NEWS
function handleTabNew () {
    let tabs = document.querySelectorAll(".news__tab-item");
    let listNew = document.querySelectorAll(".news__list");

    tabs.forEach(function (tab) {
        tab.addEventListener('click',function(){
            // 1. Click 1 tab thi xoa active cua tab mac dinh

            tabs.forEach(function(tab){
                tab.classList.remove('--active')
            })
            // 2. Gan active cho tab vua nay
            tab.classList.add('--active');
            //3. Xoa active cua newlist
            listNew.forEach(function(l){
                l.classList.remove('--active');
            })
            // 4. Lay data tab
            let idDataTab = tab.getAttribute('data-tab')
            console.log(idDataTab)
            // Lay id gan vo class cua newlist kem theo active
            document.querySelector('.news__list-' + idDataTab).classList.add('--active');
        })
        
        
    })
}
handleTabNew()

//  ACCORDION   
function accordion () {
    let accordion = document.querySelectorAll(".accordion__content");

    accordion.forEach(function (item, index){

        item.addEventListener('click', function(){
            accordion.forEach(function(e, _index){
                if(index === _index) return
                e.classList.remove('--show');
                e.lastElementChild.style.maxHeight = null
            })
            this.classList.add('--show');
            // Kiem tra max-height cua text co hien ra ko
            //neu co thi an
            let text = this.lastElementChild;
            // console.log(this.lastElementChild);
            if(text.style.maxHeight){
                text.style.maxHeight = null;
            }   
            else{
                text.style.maxHeight = text.scrollHeight + "px";
            }  
        })
    })
    
}
accordion()

// SCROLL TO SECTION
function handleSrollSc (){
    const menuItems = document.querySelectorAll(".header .header__nav li a");
    let headerH = document.querySelector(".header").offsetHeight;
    const body = document.querySelector(".homepage")

    let navMobile = document.querySelector(".headermoblie");
    let headerLogo = document.querySelector(".header__logo"); 
    let headerLang = document.querySelector(".header__cta-lang");
    let humburger = document.querySelector(".header__cta-btnmenu");

    menuItems.forEach(function(item, index){

        item.addEventListener('click', function(e){

            // preventDefault() chan the a chuyen trang;
            e.preventDefault();
            let href = item.getAttribute('href');
            let idOfSection = document.querySelector(href).offsetTop;
            
            window.scrollTo({
                top: idOfSection - headerH,
                behavior: 'smooth'
            })

            removeActiveMenu();
            item.classList.add('active');
        })
    })
    function removeActiveMenu(){
        menuItems.forEach(function(item){
            item.classList.remove('active');
            body.classList.remove('--hidden');

            navMobile.classList.remove('--active');
            humburger.classList.remove('--hamburger');
            headerLogo.classList.remove('--hidden');
            headerLang.classList.remove('--hidden');
            
        })
    }

        let section = document.querySelectorAll("section[id]");
        window.addEventListener('scroll', function(){
            let scrollY = window.scrollY + 1;
            section.forEach(function(item, index){
                if( (scrollY > (item.offsetTop - headerH))&&(scrollY < (item.offsetTop + item.offsetHeight))){
                    removeActiveMenu();
                    menuItems?.[index]?.classList.add('active');
                }

            })
        })
        
    
}
handleSrollSc()

// SLIDER HERO
function handleSlider(){
    const slider = document.querySelector(".hero__slider");
    console.log(slider);
    const flktySlider = new Flickity(
        slider,{
            cellAlign: "left",
            contain: true,
            draggable: '>1',
            prevNextButtons: false,
            wrapAround: true,
            on: {
                ready: function() {
                  console.log('Flickity is ready');
                  handleDots();
                  handleChangeNum();
                },
                change: function(index) {
                  console.log( 'Slide changed to' + index );
                  handleChangeNum();
                }
              }
        }
    );

    // Controls
    let btnPrev = document.querySelector(".--btnprev");
    let btnNext = document.querySelector(".--btnnext");
    
    btnPrev.addEventListener('click',function(){
        flktySlider.previous(true);
    });
    btnNext.addEventListener('click',function(){
        flktySlider.next(true);
    });

    function handleDots(){
        let dotSlider = document.querySelector(".flickity-page-dots");
        let dotBottom = document.querySelector(".hero__bottom-paging");
        dotBottom.appendChild(dotSlider);
    }

    function handleChangeNum(){
        
        let flkty = Flickity.data(slider);
        let pagingNum = document.querySelector('.pagingnum');
        let slideNumber = flkty.selectedIndex + 1;
        pagingNum.textContent = (slideNumber).toString().padStart(2,"0") + '/' + (flkty.slides.length).toString().padStart(2,"0");

    }
}

// SLIDER CAROUSEL
function handleCarousel(){
    let slider = document.querySelector(".carousel__img");
    let carouProgress = document.querySelector(".carousel__progress-bar")
    let flktySlider = new Flickity(
        slider,{
            cellAlign: "left",
            contain: true,
            draggable: '>1',
            prevNextButtons: false,
            wrapAround: true,
            pageDots: false,
            freeScroll: true,
            lazyLoad: 3,
            on: {
                ready: function() {
                //   console.log('Flickity is ready');
                
                },
                change: function(index) {
                  console.log( 'Slide changed to' + index );
                  progress()
                }
              }
        }           
    );
    
    function progress(){
        const carImg = document.querySelector('.carousel__img');
        const carBar = document.querySelector('.carousel__progress-bar');
        flktySlider.on('scroll', function(progress){
            progress = Math.max(0, Math.min(1, progress)) * 100;  
            carBar.style.width = `${progress}%`;
        })

    };
    
}

// FANCYBOX GALLERY
Fancybox.bind('[data-fancybox="image"]', {
    infinite: true,
    keyboard: {
        Escape: "close",
        Delete: "close",
        Backspace: "close",
        PageUp: "next",
        PageDown: "prev",
        ArrowUp: "prev",
        ArrowDown: "next",
        ArrowRight: "next",
        ArrowLeft: "prev",
    },

    on: {
        reveal: (fancybox, slide) => {
            console.log(`fancybox #${fancybox.id} is ready`);
        },
    },
    caption: function(fancybox, slider, carousel){
    }
});

// LOADING PAGE IMAGE
function loadingPage(){
    let loadCount = 0;
    let imgs = document.querySelectorAll('img').length;
    let contain = document.querySelector('body');
    
    let imgsLoad = imagesLoaded(contain);

    imgsLoad.on('progress',(instance) =>{
        loadCount++;
        percent = Math.floor((loadCount / imgs) * 100);
        // console.log(percent);
        handleLoading(percent)
    }).on('always', (instance) =>{
        console.log('always');
    }).on('fail', (instance)=>{
        console.log('fail');
    }).on('done', (instance)=>{
        console.log('done');
        hiddenLoading();
    });
}

function handleLoading(percent){
    const progress = document.querySelector(".loading__inner-progress");
    let textPercent = document.querySelector(".loading__text");

    progress.style.width = `${percent}%`;
    textPercent.innerHTML = `${percent}%`
}

function hiddenLoading(){
    const loading = document.querySelector(".loading");
    const body = document.querySelector("body");
    loading.classList.add('--is-loaded');
    body.classList.remove('--hidden')    ;
}
loadingPage();

// POPUP SIGNUP
function handleSignUp(){
    const btnSignUp = document.querySelector(".header__cta .header__cta-signup");
    const btnSignUpMB = document.querySelector(".header__navmoblie .btnsingup")
    const btnClose = document.querySelector(".popupsignup__inner-close");
    const popupsignup = document.querySelector(".popupsignup");
    const inner = document.querySelector(".popupsignup__inner");
    const headerMB = document.querySelector(".headermoblie ");
    function open(){
        popupsignup.classList.add("showSignUp");
    }
    function close(){
        popupsignup.classList.remove("showSignUp");
    }

    btnSignUp.addEventListener('click', open);
    btnSignUpMB.addEventListener('click', open);
    btnClose.addEventListener('click', close);
    popupsignup.addEventListener('click', close);
    
    inner.addEventListener('click', (e)=>{
        e.stopPropagation();
    })
   
} 
handleSignUp();

// HIDE - SHOW PASSWORD
function handleEyePassword(){
    const eye = document.querySelectorAll(".form__group-password .eye");

    eye.forEach(function (item) {
        item.addEventListener("click", handleEye);
    });
    function handleEye(){
        const eyeShow = this.previousElementSibling;
        // console.log(object);
        const typePass = this.parentElement.previousElementSibling
        if(this.classList.contains("eye-hide")){
            eyeShow.classList.toggle("hidden");
            typePass.setAttribute("type", "text");
            // this.classList.remove("eye-hide");
        }else{
            this.classList.toggle("hidden");
            typePass.setAttribute("type", "password");
            // this.classList.add("eye-hide");
        }
    }       
}
handleEyePassword();


// VADIDATE FORM
function handleValidate() {
    const form = document.querySelector(".popupsignup");
    const name = document.querySelector("#fullname");
    const email = document.querySelector("#email");
    const username = document.querySelector("#username");
    const passw = document.querySelector("#password");
    const cfpassw = document.querySelector("#checkpassword");
    const confirm = document.querySelector("#confirm");
    
    // VALIDATE EMAIL
    function isEemail(value) {
        const re = /\S+@\S+\.\S+/;
        return re.test(value);
      }
    // VALIDATE USERNAME
    function isUserName (value) {
		const regexUsernam = /^[a-z0-9_\.]+$/;
		return regexUsernam.test(value);
	}

    // VALIDATE PASSWORD
	function isPassword (value) {
		const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
		return regexPassword.test(value);
	}

    // GET PARENT
    function getParentElement (element, selector) {
		while (element.parentElement) {
		  if (element.parentElement.matches(selector)) {
			return element.parentElement;
		  }
		  element = element.parentElement;
		}
	  }

     // ERROR
    function handleError(input, textError = '') {
        const parentElement = getParentElement(input, '.form__group');

        let error = parentElement.querySelector('.error');
        if(textError!=''){
            error.innerHTML = textError;
            input.classList.add("--formError");
        }
        else{
            error.innerHTML = textError;
            input.classList.remove("--formError");
        }
    }
   
    function checkForm(){
        // NAME
        const valueName = name.value.trim();
        if(valueName == ''){
           handleError(name,"Please enter information");
        }
        else{
            handleError(name);
        }
        
        // EMAIL
        const valueEmail = email.value.trim();
        if(valueEmail == ''){
            handleError(email,"Please enter information");
        }else if(!isEemail(valueEmail)){
            handleError(email,"Invalid email");
        }
        else{
            handleError(email);
        }

        // USERNAME
        const usernameValue = username.value.trim();
        if(usernameValue == ''){
            handleError(username,"Please enter information");
        }else if(!isUserName(usernameValue)){
            handleError(username,"Username has no spaces or special characters");
        }
        else{
            handleError(username);
        }

        // PASSWORD
        const valuePassw = passw.value.trim();
        if(valuePassw == ''){
            handleError(passw,"Please enter information");
        }else if(!isPassword(valuePassw)){
            handleError(passw,"Minimum password 6 characters, contains special characters and numbers");
        }
        else{
            handleError(passw)
        }
        
        // CONFORM PASSWORD
        const valueCfPassW = cfpassw.value.trim();
       
        if(valueCfPassW == ""){
            handleError(cfpassw,"Please enter information");
        }else if(valuePassw !== valueCfPassW){
			handleError(cfpassw, "Passwords do not match");
        }else{
            handleError(cfpassw);
        }

        // CONFIRM
        if(!confirm.checked){
            handleError(confirm, "Please select confirm")
        }else{
            handleError(confirm)
        }

    }  

    // SUBMIT FORM
    form.addEventListener('submit', function (e){
        e.preventDefault();

        checkForm();
    })  

}
handleValidate();


window.addEventListener('load', function(){
    progressBar();
    handleCarousel();
    handleSlider();
} )
