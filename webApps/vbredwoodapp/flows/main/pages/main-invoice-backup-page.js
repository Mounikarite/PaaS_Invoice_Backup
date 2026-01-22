define([], () => {
  'use strict';

  class PageModule {
    test(){
      console.log('ABC');
      document.querySelector("#mydialog").open();
    };
    getProjectNames(data){
      if(data){      
        let projects=[];
        data.forEach((itm)=>{
          let obj={
            "id":itm.ProjectId,
            "label":itm.ProjectNumber,
            "value":itm.ProjectNumber +" - "+ itm.ProjectName
          };
          projects.push(obj);
        });
        return projects;
      }

    };
    navigateTo(link){
      if(link){
        window.open(link);
      };
    }
  }
  
  return PageModule;
});
