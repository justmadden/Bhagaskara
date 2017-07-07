var allThuItem=document.getElementsByClassName("thumbnails-item");



function Portfolio() {
    var self=this;
    var allItems;
    this.all;
    this.init=function () {

        allItems=document.getElementsByClassName("thumbnails-item");
        this.all=allItems;
        document.getElementById("btn-web").addEventListener("click",function () {
            document.getElementsByClassName("btn-categories-active")[0].classList.remove("btn-categories-active");
            this.classList.add("btn-categories-active");
            Change("web");
        });
        document.getElementById("btn-apps").addEventListener("click",function () {
            document.getElementsByClassName("btn-categories-active")[0].classList.remove("btn-categories-active");
            this.classList.add("btn-categories-active");
            Change("apps");
        });
        document.getElementById("btn-icons").addEventListener("click",function () {
            document.getElementsByClassName("btn-categories-active")[0].classList.remove("btn-categories-active");
            this.classList.add("btn-categories-active");
            Change("icons");
        });
        document.getElementById("btn-all").addEventListener("click",function () {
            document.getElementsByClassName("btn-categories-active")[0].classList.remove("btn-categories-active");
            this.classList.add("btn-categories-active");
            Change("all");
        });
    }

    function Change(categories) {

        if(categories=="all")
        {
            for(var i=0; i<allItems.length;i++)
            {
                if(allItems[i].classList.contains("hidden"))
                {
                    allItems[i].classList.remove("hidden");
                }
            }
            return;
        }

        for(var i=0; i<allItems.length;i++)
        {
            var tmp=allItems[i].dataset.categories.toString();
            if(tmp.indexOf(categories)==-1)
            {
                allItems[i].classList.add("hidden");
            }
            else
            {
                if(allItems[i].classList.contains("hidden"))
                {
                    allItems[i].classList.remove("hidden");
                }
            }
        }

    }
}
var pf=new Portfolio();
pf.init()