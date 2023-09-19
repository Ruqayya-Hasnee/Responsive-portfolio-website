console.log("script running.......")
document.querySelector('.cross').style.display= 'nono';
document.querySelector('.hamburger').addEventListener("click", ()=>{
document.querySelector('.sidebar').classList.toggle('sidebarGo');
if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
    document.querySelector('.ham').style.display = 'inline'
    document.querySelector('.cross').style.display = 'none'
}
else{
    document.querySelector('.ham').style.display = 'none'
    setTimeout(() => {

    }, 350);
    document.querySelector('.cross').style.display = 'inline'
}
}) 