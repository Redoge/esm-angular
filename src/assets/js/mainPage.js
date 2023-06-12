function addNewCoupon(coupon, last=false) {
    var newElement = document.createElement('div');
    if(last) newElement.id = 'bottom';
    var newCouponPhoto = document.createElement('div');
    var newCouponInfo = document.createElement('div');
    var newCouponBuy = document.createElement('div');
    var row1 = document.createElement('div');
    var row2 = document.createElement('div');
    var couponName = document.createElement('div');    
    var couponLike = document.createElement('div');
    var hCouponName = document.createElement('h3')
    var imgCouponLike = document.createElement('img')
    var couponDescription = document.createElement('div');    
    var couponExpired = document.createElement('div');
    var pCouponDescription = document.createElement('p')
    var pCouponExpired = document.createElement('p')
    var couponPrice = document.createElement('div');    
    var couponButton = document.createElement('div');
    var h3CouponPrice = document.createElement('h3');    
    var buttonCouponButton = document.createElement('button');
    var hiddenTag = document.createElement('p')
    hiddenTag.hidden = true
    hiddenTag.textContent = coupon.tag
    newElement.classList = ['coupon']
    newCouponInfo.classList = ['coupon-info']
    newCouponPhoto.classList = ['coupon-photo']
    newCouponBuy.classList = ['coupon-buy row']
    row1.classList = ['row']
    row2.classList = ['row']
    couponName.classList = ['coupon-name']
    hCouponName.textContent = coupon.name;
    couponName.appendChild(hCouponName)
    couponLike.classList = ['coupon-like']
    imgCouponLike.setAttribute('src', '../static/img/like.svg') 
    couponLike.appendChild(imgCouponLike)
    row1.appendChild(couponName)
    row1.appendChild(couponLike)
    couponDescription.classList = ['coupon-description']
    couponExpired.classList = ['coupon-expired']
    pCouponDescription.textContent = coupon.description;
    couponDescription.appendChild(pCouponDescription)
    pCouponExpired.textContent = 'Expired in' + coupon.expired + 'days';
    couponExpired.appendChild(pCouponExpired)
    row2.appendChild(couponDescription)
    row2.appendChild(couponExpired)
    newCouponInfo.appendChild(row1)
    newCouponInfo.appendChild(row2)
    couponPrice.classList = ['coupon-price']
    couponButton.classList = ['coupon-button']
    h3CouponPrice.textContent = '$'+coupon.price 
    buttonCouponButton.textContent = 'Add to Cart'
    newCouponInfo.appendChild(hiddenTag)
    couponPrice.appendChild(h3CouponPrice)
    couponButton.appendChild(buttonCouponButton)
    newCouponBuy.appendChild(couponPrice)
    newCouponBuy.appendChild(couponButton)
    newElement.appendChild(newCouponPhoto)
    newElement.appendChild(newCouponInfo)
    newElement.appendChild(newCouponBuy)
    document.getElementsByClassName('main-coupons')[0].appendChild(newElement);
}
function isPageScrolledToBottom() {
    const pageHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    return (pageHeight - windowHeight - scrollPosition) <= 0;
}
function startScrollCheck() {
    checkPageScroll();
    setInterval(checkPageScroll, 500);
}
function getCoupons(count){
    function getRandomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    let coupons = [];
    for(i=0; i<count; i++){
        let coupon = {
            name: ('Coupon name ' + (i+1)),
            description: ('Some brief description ' + (i+1)),
            expired: getRandomNumber(0, 10),
            price: getRandomNumber(50, 999),
            tag: 'tag'
        }
        coupons.push(coupon)
    }

    return coupons;
}

function addCouponsToPage(coupons, count){
    for(let i = 0; i<coupons.length; i++){
        if(i>=count || i==coupons.length-1){
            removeIdFromLastEl();
            addNewCoupon(coupons[i], true)   
            break;
        }
        addNewCoupon(coupons[i])
    }
    return removeAddedCouponsFromArray(coupons, count);
}
function removeIdFromLastEl(){
    let lastEl = document.getElementById('bottom');
    if(lastEl!= null){
        lastEl.id = ''
    }
}
let allCoupons = getCoupons(50);
let coupons = allCoupons.slice(0);
async function checkPageScroll() {
    if (isPageScrolledToBottom() && coupons.length>0) {
        await loadingAnimation()
        await addCouponsToPage(coupons, 25);
        coupons = await removeAddedCouponsFromArray(coupons, 25);

    } else {
        //TODO: page is not scrolled to bottom
    }
}
function removeAddedCouponsFromArray(coupons, count){
    for(let i = 0; i<count; i++){
        coupons.shift(i);
    }
    return coupons;
}
async function  loadingAnimation(){
    let loadingBar = document.getElementsByClassName('loading')[0];
    loadingBar.classList.remove('hidden')
    await wait(1)
    loadingBar.classList.add('hidden')
    async function  wait(seconds) {
        return new Promise((resolve) => {
          setTimeout(resolve, seconds * 1000);
        });
      }
}
coupons = addCouponsToPage(coupons, 25);
startScrollCheck();


//Пошук
const form = document.querySelector('form');
const input = document.querySelector('input[name="search"]');
const select = document.querySelector('.select');

document.addEventListener('click', function(event) {
  if (event.target.closest('form') === form || event.target === input || event.target === select) {
    return; 
  }
  performSearch();
});

function performSearch() {
  const searchValue = input.value;
  const categoryValue = select.value;
  findElementByNameOrDescription(allCoupons, searchValue, categoryValue)
}

function findElementByNameOrDescription(coupons, search, tag){
    let filteredCoupons = []
    for(let i = 0; i<coupons.length; i++){
        if(coupons[i].name.includes(search) || coupons[i].description.includes(search) ){
            if(tag=='All categories'){
                filteredCoupons.push(coupons[i])
            }else{
                if(coupons[i].tag == tag){
                    filteredCoupons.push(coupons[i])
                }
            }
        }
    }
    console.log(filteredCoupons.length)


    showCoupons(filteredCoupons)
    
}
function showCoupons(filteredCoupons){
    let couponsDiv = document.getElementsByClassName('main-coupons')[0]
    while (couponsDiv.firstChild) {
        couponsDiv.removeChild(couponsDiv.firstChild);
    }
    coupons = []
    addCouponsToPage(filteredCoupons)
}
