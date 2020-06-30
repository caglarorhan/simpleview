const state = {};
state['viewList']={};

window.addEventListener('load',()=>{
    document.querySelectorAll("[data-view]").forEach(item=>{
        state['viewList'][item.dataset.view]=item.dataset.caption;
        item.addEventListener('click',()=>{
            hideAllContainers(item.dataset.view);
        })
    });
//
   hideAllContainers('welcomeScreenContainer');
});

//
function hideAllContainers(exceptThat){
    let viewNames = state['viewList'];

        Object.keys(viewNames).forEach((key)=>{
            if(key===exceptThat){
                document.querySelector("#"+key).style.display='block';
            }else{
                document.querySelector("#"+key).style.display='none';
            }
    });
}
