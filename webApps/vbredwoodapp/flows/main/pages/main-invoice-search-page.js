define([], () => {
  'use strict';

  class PageModule {
    // test(data) {
    //   console.log("I am Arjun" + data.documentId);
    // };

    test(doc){
      console.log(doc);
    }

    downloadFile(data, mimeType, filename) {
      const blob = new Blob([data], {
        type: mimeType
      });
      // IE/Edge
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob);
        return;
      }
      let link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();
      setTimeout(function () {

        URL.revokeObjectURL(blob);
      }, 100);
    };


  downloadPDFFromAPI(data, mimeType, filename) {
    const blob = new Blob([data], {
        type: mimeType
    });
    // IE/Edge
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob, filename);
        return;
    }
    let link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    setTimeout(function () {
        URL.revokeObjectURL(link.href);
    }, 100);
};

  }

  return PageModule;
});
