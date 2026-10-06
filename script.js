var a = gsap.timeline({
    scrollTrigger: {
        trigger: ".one",
        start: "5% 90%",
        end: "30% 50%",
        scrub: true,
        
    }
})

a.to("#fanta",{
    top:"105%",
    left:"0%",
},'o')

a.to("#orange-cut",{
    top:"160%",
    left:"25%",
    zIndex:"1"
},'o')

a.to("#orange",{
    top:"160%",
    right:"6%"
},'o')

a.to("#leaf",{
    top:"100%",
    left:"90%",
    rotate:"-360",
    width:"20vh"
},'o')
a.to("#leaf2",{
    top:"90%",
    left:"10%",
    rotate:"-360",
    zIndex:"999",
    width:"20vh"
},'o')


// Second  start from here 

var b = gsap.timeline({
    scrollTrigger: {
        trigger: ".second",
        start: "5% 90%",
        end: "35% 50%",
        scrub: true,
    }
})
b.to("#fanta",{
    top:"245%",
    left:"25%",
    height: "75vh",
    width:"50vw"
},"fanta")

b.to("#orange-cut",{
    top:"220%",
    left:"36%",
    height: "52vh",
    width:"27vw",
    // zIndex:"1"
},"fanta")
